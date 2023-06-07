export default function calculateAccuracy(keyCount, correctKeyCount) {
    const accuracy = ((correctKeyCount / keyCount) * 100 || 0).toFixed(2);
    return accuracy;
}