//? create function types
//! tell the difference of passing undefined and passing null

export const compareStrings = (
  filterValue: string = "",
  recordValue: string = ""
) => recordValue.toLowerCase().localeCompare(filterValue.toLowerCase());

// * you can name the generic params as you like, not restricted to `T`
export const excludeVal = <DataType>(
  arr: DataType[],
  excludedVal: DataType
): DataType[] => arr.filter((e) => e !== excludedVal);



function excludeValue(arr: any[], excludedVal: any): any[] {
  return arr.filter((e) => e !== excludedVal);
}

function excludeValueTyped<T>(arr: T[], excludedVal: T): T[] {
  return arr.filter((e) => e !== excludedVal);
}
