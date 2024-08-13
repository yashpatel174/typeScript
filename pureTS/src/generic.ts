const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree(false);

function identityFour<T>(val: T): T {
  return val;
}

identityFour(12);

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({});

function getSearchProducts<T>(products: T[]): T {
  // Do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearcgProducts = <T>(products: T[]): T => {
  // Do some database operations
  const myIndex = 4;
  return products[myIndex];
};
