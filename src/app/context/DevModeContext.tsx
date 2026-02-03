"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DevModeContextType {
    isDevMode: boolean;
    toggleDevMode: () => void;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

export function DevModeProvider({ children }: { children: React.ReactNode }) {
    const [isDevMode, setIsDevMode] = useState(false);

    // Optional: Persist state in localStorage
    useEffect(() => {
        const stored = localStorage.getItem("devMode");
        if (stored) {
            setIsDevMode(stored === "true");
        }
    }, []);

    const toggleDevMode = () => {
        setIsDevMode((prev) => {
            const newValue = !prev;
            localStorage.setItem("devMode", String(newValue));
            return newValue;
        });
    };

    return (
        <DevModeContext.Provider value={{ isDevMode, toggleDevMode }}>
            {children}
        </DevModeContext.Provider>
    );
}

export function useDevMode() {
    const context = useContext(DevModeContext);
    if (context === undefined) {
        throw new Error("useDevMode must be used within a DevModeProvider");
    }
    return context;
}
