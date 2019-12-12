import { IActivity } from "./types";

// ! generic interface example
export interface CommonApiResponse<T> {
  Version: string;
  StatusCode: number;
  ErrorMessage: string;
  Result: T;
}

export interface PagedResponse<T> {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  rowCount: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  items: T[];
}
// ? apply renaming remove common

export interface CommonPagedApiResponse<T>
  extends CommonApiResponse<PagedResponse<T>> {
  // add extra properties
}
export type ActivityResponse = CommonApiResponse<IActivity>;
export type PagedActivityResponse = CommonPagedApiResponse<IActivity>;

// in case you don't need aditional props you can create a type alias
// ! BAD
type AltPagedResponse = CommonApiResponse<PagedResponse<T>>;
// * GOOD
type AltPagedResponse2<T> = CommonApiResponse<PagedResponse<T>>;
