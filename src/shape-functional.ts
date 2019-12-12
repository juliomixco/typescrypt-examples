export interface ICircle {
  kind: "circle";
  radius: number;
}
export interface IRectangle {
  kind: "rectangle";
  w: number;
  h: number;
}
export interface ISquare {
  kind: "square";
  size: number;
}
//! use interface so you can reuse them later
// export type Shape =
//    { kind: "circle"; radius: number }
//   | { kind: "rectangle"; w: number; h: number }
//   | { kind: "square"; size: number };

export type Shape = ICircle | IRectangle | ISquare;
function assertNever(object: never) {
  throw new Error("Unexpected object");
}

// ? hover over each case
const gerArea = (shape: Shape): number => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.w * shape.h;
    case "square":
      return shape.size ** 2;
  }
  shape;
  // throw new Error("Invalid Shape");
  // ? comment a case and see what happens
  assertNever(shape);
};

const shape: Shape = { kind: "circle", radius: 5 };
const area = gerArea(shape);
