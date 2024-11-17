let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
import "../index.css";
export const getDay = (timestamp) =>{
    let date = new Date(timestamp);

    return `${date.getDate()} ${months[date.getMonth()]}`
}