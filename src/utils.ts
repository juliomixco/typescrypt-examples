//? create function types
//! tell the difference of passing undefined and passing null

export const compareStrings = (
  filterValue: string = '',
  recordValue: string = ''
) => recordValue.toLowerCase().localeCompare(filterValue.toLowerCase());

export const excludeVal = <TipoDato>(
  arr: TipoDato[],
  excludedVal: TipoDato
): TipoDato[] => arr.filter(e => e !== excludedVal);
