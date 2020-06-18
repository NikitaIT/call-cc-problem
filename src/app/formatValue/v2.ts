export function formatValue(value: string, next: (x: string) => void) {
  setTimeout(() => next("hi, after 2s, " + value), 2000);
}
