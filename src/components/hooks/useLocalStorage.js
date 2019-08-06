import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {


    const [storedValue , setStoredValue] = useState(() => {

        console.log(`useLocalStorage:useState`);

        const item = window.localStorage.getItem(key)

        console.log(`useLocalStorage:useState`, key, initialValue, item);

        return item ? JSON.parse(item) : initialValue;


})

    const setValue = value => {

        setStoredValue(value);

        console.log(`useLocalStorage:useState:`, value);

        window.localStorage.setItem(key, JSON.stringify(value))

    }

return [storedValue, setValue];

}
