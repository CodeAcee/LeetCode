// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/?envType=problem-list-v2&envId=string

function areOccurrencesEqual(s: string): boolean {
    const countMap: Record<string, number> = {}

    for (let char of s) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    const freq = Object.values(countMap);

    return freq.every(val => val === freq[0])

};


