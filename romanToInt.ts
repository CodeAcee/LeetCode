function romanToInt(s: string) {
  const symbols: string[] = s.split("");
  let res: number = 0;
  const symbolsMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let symbol of symbols) {
    if (symbolsMap[symbol]) {
      res += symbolsMap[symbol];
    }
  }

  return res;
}



console.log(romanToInt("VLIII"));
