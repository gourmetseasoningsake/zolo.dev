export function parseCookies(str: any): Record<string, string> {
  const entries = String(str)
    .split(";")
    .reduce((a: string[][], v) => {
      if (/\S+=\S+/.test(v)) return [...a, v.split("=")];
      return a;
    }, []);
  return Object.fromEntries(entries);
}
