import * as _ from "./core";

export type ValueFormatter = (
  value: _.ValueFormatterIn
) => _.ValueFormatterOut | Promise<_.ValueFormatterOut>;

export function awesomeValueFramework(
  input: HTMLInputElement,
  button: HTMLElement,
  valueFormatter: ValueFormatter
) {
  _.onClickBy(button, () => {
    const value = _.extractValue(input);
    callMayBeAsync(valueFormatter(value), valueFormatted => {
      const excelRow = _.valueToExcel(valueFormatted);
      _.saveToChlipboard(excelRow);
    });
  });
}

export function callMayBeAsync<T>(
  promisOrValue: Promise<T> | T,
  cc: (value: T) => void
) {
  if (promisOrValue instanceof Promise) {
    return promisOrValue.then(cc);
  }
  return cc(promisOrValue);
}

// ok, async allowed, but callback hell 50/50
// next? state machines, pure monad and generators!
