export function splitTextFirst(text: string): [string, string] {
    const [first, ...rest] = text.split(" ");
    return [first, rest.join(" ")];
}

export function splitTextTwo(text: string): [string, string] {
    const parts = text.trim().split(/\s+/);
    if (parts.length < 2) {
        return [parts[0] || "", ""];
    }
    const firstTwo = `${parts[0]} ${parts[1]}`;
    const rest = parts.slice(2).join(" ");
    return [firstTwo, rest];
}
