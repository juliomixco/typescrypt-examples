export enum ActivityStatus {
  Arriving,
  Docking,
  Docked,
  Loading,
  Loaded,
  Dispatched
}

export enum ActivityStatus2 {
  Arriving = "Arriving",
  Docking = "Docking",
  Docked = "dadasdasd",
  Loading = "223",
  Loaded = 43422,
  Dispatched = "Dispatche"
}

export interface IActivity {
  activityNumber: string;
  name: string;
  startTime: string;
  totalTime: string;
  delays: number;
  alerts: number;
  onNameChange: (name: string) => void;
}

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

//! Both should implement IActivity
//? two ways of adding properties to a class

export abstract class AbsActivity implements IActivity {
  public activityNumber: string;
  public name: string;
  public startTime: string;
  public totalTime: string;
  public delays: number;
  public alerts: number;
  constructor() {}
  abstract onNameChange(name: string): void;

  public hola(text: string) {
    console.log("hola " + text);
  }
}

export class Activity extends AbsActivity {
  public activityNumber: string;
  public name: string;
  public startTime: string;
  public totalTime: string;
  public delays: number;
  public alerts: number;

  constructor(data: Partial<Activity>) {
    super();
    Object.assign(this, data);
  }

  public onNameChange(name: string): void {
    console.log(`Hola ${name}  Activity 1`);
  }
}

export class Activity2 extends AbsActivity {
  constructor(
    public activityNumber: string,
    public name: string,
    public startTime: string,
    public totalTime: string,
    public delays: number,
    public alerts: number,
    private length: number
  ) {
    super();
  }

  public onNameChange(name: string): void {
    console.log(`Hola ${name} Activity 2`);
  }
}

export interface LooseObject {
  [key: string]: any;
}

export interface TypedLooseObject<T> {
  [key: string]: T;
}

export interface Dictionary<Tipo> {
  [key: string]: Tipo;
}

export interface ActivityMap<Tipo extends IActivity> {
  [key: string]: Tipo;
}
