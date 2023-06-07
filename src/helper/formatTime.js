export const formatTime = (seconds) => {
    let minutes = 0;
    while (seconds >= 60) {
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
    }
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
};