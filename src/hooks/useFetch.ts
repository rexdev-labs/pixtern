"use client";

import { useEffect, useState } from "react";

interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useFetch<T = any>(endpoint: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                if (!apiUrl) {
                    throw new Error("NEXT_PUBLIC_API_URL is not defined");
                }

                const res = await fetch(`${apiUrl}${endpoint}`);

                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status}`);
                }

                const result: T = await res.json();
                setData(result);
            } catch (err: any) {
                setError(err.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}
