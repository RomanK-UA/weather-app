export default function getDay(dt_txt: string) {
    const date = new Date(dt_txt);
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();
    // Array to map the day number to the actual name
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Get the name of the day
    const dayName = daysOfWeek[dayOfWeek];
    return dayName;
}