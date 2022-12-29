const API_KEY = "433243d3ca664ebdbde94302221412";
const SERVER_BASE_URL = "https://api.weatherapi.com/v1/current.json?key=433243d3ca664ebdbde94302221412&q=Tbilisi";

export default async function requestInfo(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=433243d3ca664ebdbde94302221412&q=${city}`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log("Error in requestInfo function ===>>>", e);
        return false;
    }
}
