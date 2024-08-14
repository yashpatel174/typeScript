"use strict";
// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// interface Square {
//   kind: "square";
//   side: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   length: number;
//   width: number;
// }
// type Shape = Circle | Square | Rectangle;
// function getTrueShape(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
//   //   return shape.side * shape.side;
// }
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "Square":
//       return shape.side * shape.side;
//     default:
//       const defaultShape: never = shape;
//       return defaultShape;
//   }
// }
