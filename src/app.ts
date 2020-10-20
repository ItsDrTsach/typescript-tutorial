import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
import HasFormatter from "./interfaces/HasFormatter.js";

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
// localStorage
let saved: string | null = localStorage.getItem("history");
if (saved) {
  ul.innerHTML = saved;
}

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

// GENERICS

let addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yushi", age: 40 });
// console.log(docOne.uid);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<string | object> = {
  uid: 3,
  resourceName: "resource",
  data: {
    blue: "blue",
  },
  // data: "im a string",
};

const docFour: Resource<(boolean | number | string)[]> = {
  uid: 4,
  resourceName: "string",
  data: ["ddd", "sadasd", 333, true],
};

// console.table(docFour);

// ENUMS

enum BookType {
  GOOD,
  BAD,
  SCARY,
  BORING,
}

interface Book<T> {
  title: string;
  type: number;
  content: T;
}

const bookOne: Book<boolean[]> = {
  title: "12 rules for life",
  type: BookType.GOOD,
  content: [true, false, true, false],
};
const bookTwo: Book<HasFormatter> = {
  title: "mindfullness",
  type: BookType.BAD,
  content: { format: () => "dd" },
};
const bookThree: Book<string> = {
  title: "Harry potter",
  type: BookType.SCARY,
  content: "[true, false, true, false]",
};

// console.log(bookOne);
// console.log(bookTwo);
// console.log(bookThree);

// tupels

let arr = ["ryu", 323, true];
arr[0] = false;
arr = [1, true, "yushi"];
// console.log(arr);

let tup: [string, number, boolean] = ["ryu", 33, true];
// tup[0] = "false";
// tup[1] = "false";
// tup[2] = "false";
// console.log(tup);

let student: [string, number];
student = ["tsach", 33];
