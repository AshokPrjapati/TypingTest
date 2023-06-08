export const wpmCalculator = (lettersTyped, time) => {
    if (time > 0) {
        const wordTyped = lettersTyped / 4; // suppose avg word length is 4
        const wpm = Math.ceil(wordTyped / (time / 60));
        return wpm;
    }
    return null
}