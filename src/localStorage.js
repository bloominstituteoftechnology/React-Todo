
export const LoadState = () => {
    if (localStorage.getItem('state')) {
        return JSON.parse(localStorage.getItem('state'));
    }
    return {
        toDos: [],
        input: '',
    };
};

export const SaveState = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
};