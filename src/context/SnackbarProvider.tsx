import { createContext, useState, ReactNode, useContext, useRef } from "react";
import Snackbar from "../components/Utils/Snackbar/Snackbar";

type SnackbarOptions = {
    status?: "success" | "error" | "info";
    text: string;
    duration?: number;
};

type SnackbarContextType = {
    showSnackbar: (options: SnackbarOptions) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export function SnackbarProvider({ children }: { children: ReactNode }) {
    const [snackbarShown, setSnackbarShown] = useState(false);
    const [snackbarOptions, setSnackbarOptions] = useState<SnackbarOptions>({
        status: "info",
        text: "",
        duration: 2000,
    });

    const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Store timeout ID

    function showSnackbar(options: SnackbarOptions) {
        // Clear any existing timeout to prevent multiple overlapping timers
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setSnackbarOptions({
            status: options.status || "info",
            text: options.text || "",
            duration: options.duration || 3000,
        });

        setSnackbarShown(true);

        // Set new timeout
        timeoutRef.current = setTimeout(() => {
            setSnackbarShown(false);
        }, options.duration || 3000);
    }

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            <Snackbar show={snackbarShown} status={snackbarOptions.status} text={snackbarOptions.text} />
            {children}
        </SnackbarContext.Provider>
    );
}

export function useSnackbar() {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
}
