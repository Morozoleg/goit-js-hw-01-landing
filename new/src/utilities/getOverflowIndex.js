export default function getOverflowIndex(i, len) {
    return ((i % len) + len) % len;
}