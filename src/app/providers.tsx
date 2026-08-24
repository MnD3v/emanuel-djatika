"use client";

import { DevModeProvider } from "./context/DevModeContext";
import GlobalLoader from "./compents/GlobalLoader";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <DevModeProvider>
            <GlobalLoader />
            {children}
        </DevModeProvider>
    );
}
