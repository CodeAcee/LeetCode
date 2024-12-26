function areOccurrencesEqual(s: string): boolean {
    const countMap: Record<string, number> = {}

    for (let char of s) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    const freq = Object.values(countMap);

    return freq.every(val => val === freq[0])

};
