import {useEffect, useState} from 'react';

export function useDebouncer(searchInput: string) {
    const [debouncedValue, setDebouncedValue] = useState("");

    useEffect(() => {
        const debounceHandler = setTimeout(() => {
            setDebouncedValue(searchInput);
        }, 500);

        return () => {
            clearTimeout(debounceHandler);
        }
    }, [searchInput]);


    return debouncedValue;
}