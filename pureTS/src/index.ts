// // class User {
// //   public email: string;
// //   private name: string;
// //   readonly city: string = "Ahmedabad";
// //   constructor(email: string, name: string) {
// //     this.email = email;
// //     this.name = name;
// //     this.city = "Yash";
// //   }
// // }

// class User {
//   protected _courseCount = 1;

//   readonly city: string = "Ahmedabad";
//   constructor(
//     public email: string,
//     public name: string,
//     private userId?: number
//   ) {}

//   private deleteToken() {
//     console.log("Token deleted");
//   }

//   get getAppleEmail(): string {
//     return `Apple ${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than one.");
//     }
//     this._courseCount = courseNum;
//   }
// }

// class SubUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }

// const modi = new User("yash@gmail.com", "Yash");
// // modi.name;

// // modi.deleteToken();

// //* ======================================================================================================
