import { useState, useEffect } from "react";

export default function useFetch(url: string): [null, boolean, string] {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')

    useEffect(() => {
        const abortContoller = new AbortController;
        setLoading(true);
        fetch(url, { signal: abortContoller.signal })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((e) => setError(e))
            .finally(() => setLoading(false))
    }, [url])


    return [data, loading, error];
}