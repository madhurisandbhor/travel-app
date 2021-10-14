/**
* This file is included for testing purpose with simplied custom hook, 
  as with useReducer it was givings errors to mock the custom hook
*/

import { useEffect, useState } from "react";

export const useHttp = (url, query) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query }),
                })
                let { data } = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [url, query]);

    return { data, error, isLoading };
};