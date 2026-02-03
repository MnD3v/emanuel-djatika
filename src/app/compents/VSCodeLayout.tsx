"use client";

import React, { useState } from 'react';
import {
    Folder,
    FileCode,
    ChevronRight,
    ChevronDown,
    Search,
    GitBranch,
    Menu,
    Settings,
    X,
    Terminal,
    LogOut
} from 'lucide-react';
import { useDevMode } from '../context/DevModeContext';

interface VSCodeLayoutProps {
    components: {
        [key: string]: React.ReactNode;
    };
}

interface FileTreeItemProps {
    name: string;
    path: string;
    depth: number;
    isFolder: boolean;
    children?: React.ReactNode;
    expandedFolders: { [key: string]: boolean };
    toggleFolder: (path: string) => void;
    activeFile: string;
    setActiveFile: (path: string) => void;
}

const FileTreeItem = ({
    name,
    path,
    depth,
    isFolder,
    children,
    expandedFolders,
    toggleFolder,
    activeFile,
    setActiveFile
}: FileTreeItemProps) => {
    const isOpen = expandedFolders[path];

    if (isFolder) {
        return (
            <div>
                <div
                    className="flex items-center cursor-pointer py-1 hover:bg-[#2a2d2e] whitespace-nowrap transition-colors"
                    style={{ paddingLeft: `${depth * 12 + 16}px` }}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFolder(path);
                    }}
                >
                    {isOpen ? <ChevronDown className="w-4 h-4 mr-1 flex-shrink-0 text-gray-400" /> : <ChevronRight className="w-4 h-4 mr-1 flex-shrink-0 text-gray-400" />}
                    <Folder className={`w-4 h-4 mr-2 flex-shrink-0 ${name === 'src' ? 'text-neon-orange' :
                        name === 'components' ? 'text-neon-green' :
                            'text-neon-blue'
                        }`} />
                    <span className="font-bold text-gray-300">{name}</span>
                </div>
                {isOpen && children}
            </div>
        )
    }

    return (
        <div
            className={`flex items-center cursor-pointer py-1 hover:bg-[#2a2d2e] whitespace-nowrap transition-colors border-l-2 ${activeFile === path ? 'bg-[#37373d] text-white border-neon-blue' : 'text-[#cccccc] border-transparent'}`}
            style={{ paddingLeft: `${depth * 12 + 14}px` }}
            onClick={(e) => {
                e.stopPropagation();
                setActiveFile(path);
            }}
        >
            <FileCode className={`w-4 h-4 mr-2 flex-shrink-0 ${activeFile === path ? 'text-neon-blue' : 'text-gray-500'}`} />
            <span>{name}</span>
        </div>
    );
};

const VSCodeLayout = ({ components }: VSCodeLayoutProps) => {
    const { toggleDevMode } = useDevMode();
    const [activeFile, setActiveFile] = useState<string>("presentation.tsx");
    const [expandedFolders, setExpandedFolders] = useState<{ [key: string]: boolean }>({
        "portfolio": true,
        "src": true,
        "components": true,
        "components/services": true,
        "components/projets": true,
        "components/blog": true
    });
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<string[]>([]);

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                e.preventDefault();
                setIsSearchOpen(prev => !prev);
                setSearchQuery("");
            }
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const files = Object.keys(components).filter(key => {
        const fileName = key.split('/').pop();
        return !['layout.tsx', 'page.tsx', 'globals.css', 'global.css'].includes(fileName || '');
    });

    React.useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults(files);
        } else {
            setSearchResults(files.filter(file =>
                file.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        }
    }, [searchQuery, files]);

    const toggleFolder = (path: string) => {
        setExpandedFolders(prev => ({
            ...prev,
            [path]: !prev[path]
        }));

        const cleanPath = path.replace(/^components\//, '');
        const candidates = [`${cleanPath}/index.tsx`, `${cleanPath}/page.tsx`];

        for (const candidate of candidates) {
            if (components[candidate]) {
                setActiveFile(candidate);
                break;
            }
        }
    };

    interface FileSystemNode {
        [key: string]: FileSystemNode | string;
    }

    // Helper: Build tree from file paths
    const buildTree = (filePaths: string[]) => {
        const root: FileSystemNode = {};
        filePaths.forEach(path => {
            const parts = path.split('/');
            let current = root;
            parts.forEach((part, index) => {
                if (index === parts.length - 1) {
                    current[part] = path; // Leaf contains full path
                } else {
                    current[part] = current[part] || {};
                    current = current[part] as FileSystemNode;
                }
            });
        });
        return root;
    };

    const tree = buildTree(files);

    const renderRecursive = (node: FileSystemNode, currentPath: string, depth: number) => {
        const order = [
            'presentation.tsx',
            'services',
            'about.tsx',
            'technologies.tsx',
            'projets',
            'blog',
            'contact.tsx'
        ];

        return Object.keys(node).sort((a, b) => {
            const indexA = order.indexOf(a);
            const indexB = order.indexOf(b);

            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB;
            }
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;

            const isAFolder = typeof node[a] === 'object';
            const isBFolder = typeof node[b] === 'object';
            if (isAFolder && !isBFolder) return -1;
            if (!isAFolder && isBFolder) return 1;
            return a.localeCompare(b);
        }).map(key => {
            const value = node[key];
            const isFolder = typeof value === 'object';
            const path = currentPath ? `${currentPath}/${key}` : key;

            if (isFolder) {
                return (
                    <FileTreeItem
                        key={path}
                        name={key}
                        path={path}
                        depth={depth}
                        isFolder={true}
                        expandedFolders={expandedFolders}
                        toggleFolder={toggleFolder}
                        activeFile={activeFile}
                        setActiveFile={setActiveFile}
                    >
                        {renderRecursive(value, path, depth + 1)}
                    </FileTreeItem>
                );
            } else {
                return (
                    <FileTreeItem
                        key={path}
                        name={key}
                        path={value}
                        depth={depth}
                        isFolder={false}
                        expandedFolders={expandedFolders}
                        toggleFolder={toggleFolder}
                        activeFile={activeFile}
                        setActiveFile={setActiveFile}
                    />
                );
            }
        });
    };

    return (
        <div className="flex h-screen bg-[#1e1e1e] text-[#cccccc] font-mono text-sm overflow-hidden pt-0">
            {/* Activity Bar */}
            <div className="w-12 bg-[#333333] flex flex-col items-center py-4 space-y-6 border-r border-[#1e1e1e] flex-shrink-0">
                <div className="p-2 border-l-2 border-white cursor-pointer"><FileCode className="w-6 h-6 text-white" /></div>
                <div className="p-2 opacity-50 hover:opacity-100 cursor-pointer"><Search className="w-6 h-6" /></div>
                <div className="p-2 opacity-50 hover:opacity-100 cursor-pointer"><GitBranch className="w-6 h-6" /></div>
                <div className="mt-auto p-2 opacity-50 hover:opacity-100 cursor-pointer"><Settings className="w-6 h-6" /></div>
            </div>

            {/* Sidebar */}
            <div className="w-64 bg-[#252526] flex flex-col border-r border-[#1e1e1e] flex-shrink-0">
                <div className="px-4 py-2 text-xs font-bold tracking-wider uppercase flex justify-between items-center bg-[#252526] h-10 border-b border-[#1e1e1e]">
                    <span>Explorer</span>
                    <Menu className="w-4 h-4" />
                </div>
                <div className="flex-1 overflow-y-auto overflow-x-hidden pt-2">
                    <FileTreeItem
                        name="PORTFOLIO"
                        path="portfolio"
                        depth={0}
                        isFolder={true}
                        expandedFolders={expandedFolders}
                        toggleFolder={toggleFolder}
                        activeFile={activeFile}
                        setActiveFile={setActiveFile}
                    >
                        <FileTreeItem
                            name="src"
                            path="src"
                            depth={1}
                            isFolder={true}
                            expandedFolders={expandedFolders}
                            toggleFolder={toggleFolder}
                            activeFile={activeFile}
                            setActiveFile={setActiveFile}
                        >
                            <FileTreeItem
                                name="components"
                                path="components"
                                depth={2}
                                isFolder={true}
                                expandedFolders={expandedFolders}
                                toggleFolder={toggleFolder}
                                activeFile={activeFile}
                                setActiveFile={setActiveFile}
                            >
                                {renderRecursive(tree, "components", 3)}
                            </FileTreeItem>

                        </FileTreeItem>
                        <FileTreeItem
                            name="public"
                            path="public"
                            depth={1}
                            isFolder={true}
                            expandedFolders={expandedFolders}
                            toggleFolder={toggleFolder}
                            activeFile={activeFile}
                            setActiveFile={setActiveFile}
                        >
                            <div className="flex items-center py-1 pl-[40px] text-gray-500 text-xs italic">
                                (assets...)
                            </div>
                        </FileTreeItem>
                    </FileTreeItem>
                </div>
            </div>

            {/* Main Editor */}
            <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0">
                {/* Tabs */}
                <div className="flex bg-[#252526] border-b border-[#1e1e1e] overflow-x-auto h-10">
                    <div className="flex items-center px-4 py-2 border-r border-[#1e1e1e] cursor-pointer min-w-[120px] justify-between group bg-[#1e1e1e] text-neon-blue border-t-2 border-t-neon-blue">
                        <div className="flex items-center">
                            <FileCode className="w-3 h-3 mr-2 text-neon-blue" />
                            <span className="text-xs">{activeFile.split('/').pop()}</span>
                        </div>
                        <X className="w-3 h-3 ml-2 opacity-50 group-hover:opacity-100 hover:text-white" />
                    </div>

                    <div className="ml-auto flex items-center pr-2">
                        <button
                            onClick={toggleDevMode}
                            className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500 rounded-sm text-red-500 hover:bg-red-500 hover:text-white transition-colors text-xs font-bold my-1 whitespace-nowrap"
                        >
                            <LogOut className="w-3 h-3" />
                            EXIT DEV MODE
                        </button>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="flex items-center px-4 h-8 text-xs text-gray-500 bg-[#1e1e1e] shadow-sm overflow-hidden whitespace-nowrap border-b border-[#333]">
                    <span>portfolio</span>
                    <ChevronRight className="w-3 h-3 mx-1" />
                    <span>src</span>
                    <ChevronRight className="w-3 h-3 mx-1" />
                    <span>components</span>
                    {activeFile.split('/').map((part, i) => (
                        <React.Fragment key={i}>
                            <ChevronRight className="w-3 h-3 mx-1" />
                            <span className={i === activeFile.split('/').length - 1 ? "text-white font-medium" : ""}>{part}</span>
                        </React.Fragment>
                    ))}
                </div>

                {/* Editor Content */}
                <div className="flex-1 overflow-y-auto relative bg-[#1e1e1e]">
                    <div className="flex min-h-full">
                        {/* Gutter */}
                        <div className="w-12 bg-[#1e1e1e] flex flex-col text-right pr-4 text-[#858585] select-none pt-4 text-xs font-mono border-r border-[#333] flex-shrink-0">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div key={i} className="h-6 leading-6">{i + 1}</div>
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-0 pt-8 flex flex-col justify-start w-full min-w-0">
                            <div className="max-w-5xl mx-auto w-full">
                                <div className="bg-background/20 rounded-md p-0 border border-white/5 overflow-hidden">

                                    <div className='p-0'>
                                        {components[activeFile] || (
                                            <div className="text-red-500 p-8 text-center border border-red-900/50 rounded bg-red-900/10 m-4">
                                                <h3 className="text-lg font-bold mb-2">404 - File Not Found</h3>
                                                <p className="text-sm">The component <span className="font-mono bg-black/30 px-1 rounded">{activeFile}</span> could not be loaded.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search Modal (Command Palette) */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-50 flex justify-center pt-20 bg-black/50 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}>
                    <div
                        className="w-[600px] h-[400px] bg-[#252526] rounded-lg shadow-2xl border border-[#333] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-100"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-3 border-b border-[#333]">
                            <div className="flex items-center bg-[#3c3c3c] rounded px-3 py-1 border border-neon-blue/50">
                                <Search className="w-4 h-4 text-gray-400 mr-2" />
                                <input
                                    autoFocus
                                    type="text"
                                    className="bg-transparent border-none outline-none text-white w-full placeholder-gray-500 text-sm font-sans"
                                    placeholder="Search files by name..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-1">
                            {searchResults.map(file => (
                                <div
                                    key={file}
                                    className="px-4 py-2 hover:bg-[#2a2d2e] cursor-pointer flex items-center group"
                                    onClick={() => {
                                        setActiveFile(file);
                                        setIsSearchOpen(false);
                                    }}
                                >
                                    <FileCode className="w-4 h-4 mr-3 text-neon-blue" />
                                    <div>
                                        <div className="text-gray-200 text-sm font-medium group-hover:text-neon-blue transition-colors">
                                            {file.split('/').pop()}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            src/components/{file}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {searchResults.length === 0 && (
                                <div className="p-4 text-center text-gray-500 text-sm">
                                    No files found matching "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VSCodeLayout;
