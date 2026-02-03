"use client";

import { DevModeProvider } from "./context/DevModeContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return <DevModeProvider>{children}</DevModeProvider>;
}
