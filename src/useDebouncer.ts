import {useState} from 'react';

export function useDebouncer() {
    const [debouncedValue, setDebouncedValue] = useState("");


    return debouncedValue;
}