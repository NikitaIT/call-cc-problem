import * as _ from "./core";

export type ValueFormatter = (value: _.ValueFormatterIn) => _.ValueFormatterOut;

export function awesomeValueFramework(
  input: HTMLInputElement,
  button: HTMLElement,
  valueFormatter: ValueFormatter
) {
  _.onClickBy(button, () => {
    const value = _.extractValue(input);
    const valueFormatted = valueFormatter(value);
    const excelRow = _.valueToExcel(valueFormatted);
    _.saveToChlipboard(excelRow);
  });
}

// oh, only sync call for valueFormatter
