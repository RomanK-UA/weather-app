export default function formateTime(time: string): string {
    const initualTime = time.split(" ")[1].slice(0, 5);
    const formattedTime = `${parseInt(initualTime.split(":")[0], 10)}:${time.split(":")[1]}`;
    return formattedTime;
}