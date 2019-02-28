import { Activity, Activity2, IActivity } from './types';
import { excludeVal } from './utils';

// ! always use single quotes for string literals

//? create a destructuring example
const person = {
  name: 'juan',
  lastName: 'perez',
  age: 16,
  address: {
    apartment: '512B',
    street: 'la reforma',
    country: {
      name: 'El Salvador',
      code: 'SV',
      timezone: 'UTC-06:00'
    }
  },
  user: {
    nickname: 'xXxJuanitoxXx',
    name: 'juanito16',
    roles: ['reader', 'web', 'mobile']
  }
};

const {
  name,
  lastName,
  age,
  address: {
    apartment,
    street,
    country: {
      name: countryName, // asign an alias
      code,
      timezone
    }
  },
  user: { nickname, name: userName, roles }
} = person;

//? example of rest parameter
function goto(point2D: { x: number; y: number }) {
  // Imagine some code that might break
  // if you pass in an object
  // with more items than desired
}
// Some point you get from somewhere
const point3D = { x: 1, y: 2, z: 3 };
/** A nifty use of rest to remove extra properties */
const { z, ...point2D } = point3D;
goto(point2D);

//? create function types
//! tell the difference of passing undefined and passing null
// TODO: goto utils file and explain generics

const activiyNames: string[] = ['truck load', 'dock ship', 'unload truck'];

let a: any;

a = {
  activityNumber: `A-`,
  alerts: 2,
  delays: 1,
  name: '23',
  asdas: 123
};
(a as Partial<Activity>).activityNumber;

const activityList: Activity[] = activiyNames.reduce<Activity[]>(
  (acumulator, currentName, index) => {
    return [
      ...acumulator,
      new Activity({
        activityNumber: `A-${index}`,
        alerts: 2,
        delays: 1,
        name: currentName
      })
    ];
  },
  []
);

//?
// const f1 = excludeVal<Activity2>(activityList, activityList[0]);
// f1[0].alerts
const f1 = excludeVal(activityList, activityList[0]);
// f1[0].
// const f1 = excludeVal<Activity2>(activityList, activityList[0]); //! ERROR

// TODO: create a type
//?
type MixedActivityArray = Array<Activity | Activity2 | IActivity>;
type status = 'active' | 'pending' | 'done';
const stat: status = 'active';
const activityList2: MixedActivityArray = activiyNames.reduce<
  MixedActivityArray
>((acumulator, currentName, index) => {
  return [
    ...acumulator,
    new Activity({
      activityNumber: `A-${index}`,
      alerts: 2,
      delays: 1,
      name: currentName
    }),
    new Activity2(
      `A2-${index}`,
      `A2:${currentName}`,
      'time',
      'totaltime',
      2,
      2,
      2
    )
  ];
}, []);
