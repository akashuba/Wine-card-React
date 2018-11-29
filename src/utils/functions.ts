export function isMatching(full: string, chunk: string) {
    full = full.toLowerCase()
    chunk = chunk.toLowerCase()
    return full.indexOf(chunk) >= 0
}
