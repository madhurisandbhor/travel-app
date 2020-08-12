import { useReducer, useEffect } from 'react';

const httpReducer = (currentState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null, responseData: null };
        case 'RESPONSE':
            return { ...currentState, loading: false, responseData: action.responseData };
        case 'ERROR':
            return { loading: false, error: action.errorMsg, responseData: null };
        default: throw new Error(`Wrong action type: ${action.type}`);
    }
}

const useHttp = (url, query) => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null, responseData: null });

    useEffect(() => {
        dispatchHttp({ type: 'SEND' });
        const fetchRequest = async () => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query }),
                })
                let { data } = await res.json();
                dispatchHttp({ type: 'RESPONSE', responseData: data });
            } catch (err) {
                console.log(err);
                dispatchHttp({ type: 'ERROR', errorMsg: err });
            }
        };
        fetchRequest();
    }, [url]);

    return {
        isLoading: httpState.loading,
        error: httpState.error,
        data: httpState.responseData,
    };
};

export default useHttp;