export function getRandomKey(keys) {
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}