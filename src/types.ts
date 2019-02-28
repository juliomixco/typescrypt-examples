export interface IActivity {
  activityNumber: string;
  name: string;
  startTime: string;
  totalTime: string;
  delays: number;
  alerts: number;
  onNameChange: (name: string) => void;
}

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
    console.log('hola ' + text);
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
    console.log(`Hola ${name}`);
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
    console.log(`Hola ${name}`);
  }
}

export interface LooseObject {
  [key: string]: any;
}

export interface TypedLooseObject<T> {
  [key: string]: T;
}

export interface Diccionario<Tipo> {
  [key: string]: Tipo;
}

export interface ActivityMap<Tipo extends IActivity> {
  [key: string]: Tipo;
}
