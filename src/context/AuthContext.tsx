'use client';
import { createContext, useContext, useEffect, useState } from "react";
import axiosPublic from "@/lib/axiosPublic";
import { AuthContextProps } from "@/types/authContext";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextProps>({ user: false, loading: true, logout: () => { }, });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const validateAccessToken = async () => {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        const expiresIn = localStorage.getItem("expiresIn");

        if (!accessToken || !refreshToken) {
            setUser(false);
            setLoading(false);
            return;
        }

        const isExpired = !expiresIn || Date.now() >= Number(expiresIn);

        if (!isExpired) {
            setUser(true);
            setLoading(false);
            return;
        }

        // If expired, try refreshing the token
        try {
            const res = await axiosPublic.post("/api/refresh-token", { refreshToken });
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("expiresIn", String(Date.now() + res.data.expiresIn * 1000));
            setUser(true);
        } catch (err) {
            console.error("Token refresh failed", err);
            localStorage.clear(); // remove invalid tokens
            setUser(false);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("expiresIn");
        setUser(false);
        router.push("/"); // redirect if needed
    };

    useEffect(() => {
        validateAccessToken();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
