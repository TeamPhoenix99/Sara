let fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};


export const fetchPlaces = async () => {
    return fetchData('http://127.0.0.1:5000/data')
};