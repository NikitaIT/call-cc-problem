export type ValueFormatterIn = string;
export type ValueFormatterOut = string;

export function valueToExcel(value: string) {
  return JSON.stringify(value);
}

export function saveToChlipboard(value: string) {
  console.log(value);
}

export function onClickBy(button: HTMLElement, f: () => void) {
  button.addEventListener("click", f);
}

export function extractValue(input: HTMLInputElement): string {
  return String(input.value);
}
