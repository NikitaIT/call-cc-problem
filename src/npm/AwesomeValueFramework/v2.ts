import * as _ from "./core";

export type ValueFormatter = (
  value: _.ValueFormatterIn,
  next: (value: _.ValueFormatterOut) => void
) => void;

export function awesomeValueFramework(
  input: HTMLInputElement,
  button: HTMLElement,
  valueFormatter: ValueFormatter
) {
  _.onClickBy(button, () => {
    const value = _.extractValue(input);
    valueFormatter(value, valueFormatted => {
      const excelRow = _.valueToExcel(valueFormatted);
      _.saveToChlipboard(excelRow);
    });
  });
}

// ok, async allowed, but if more when one function provided - callback hell
