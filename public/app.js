var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Invoice from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
var ul = document.querySelector("ul");
var list = new ListTemplate(ul);
// localStorage
var saved = localStorage.getItem("history");
if (saved) {
    ul.innerHTML = saved;
}
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var values = [
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    var doc;
    if (type.value === "invoice") {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    }
    list.render(doc, type.value, "end");
});
// GENERICS
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: "yushi", age: 40 });
var docThree = {
    uid: 3,
    resourceName: "resource",
    data: {
        blue: "blue",
    },
};
var docFour = {
    uid: 4,
    resourceName: "string",
    data: ["ddd", "sadasd", 333, true],
};
// console.table(docFour);
// ENUMS
var BookType;
(function (BookType) {
    BookType[BookType["GOOD"] = 0] = "GOOD";
    BookType[BookType["BAD"] = 1] = "BAD";
    BookType[BookType["SCARY"] = 2] = "SCARY";
    BookType[BookType["BORING"] = 3] = "BORING";
})(BookType || (BookType = {}));
var bookOne = {
    title: "12 rules for life",
    type: BookType.GOOD,
    content: [true, false, true, false],
};
var bookTwo = {
    title: "mindfullness",
    type: BookType.BAD,
    content: { format: function () { return "dd"; } },
};
var bookThree = {
    title: "Harry potter",
    type: BookType.SCARY,
    content: "[true, false, true, false]",
};
// console.log(bookOne);
// console.log(bookTwo);
// console.log(bookThree);
// tupels
var arr = ["ryu", 323, true];
arr[0] = false;
arr = [1, true, "yushi"];
// console.log(arr);
var tup = ["ryu", 33, true];
// tup[0] = "false";
// tup[1] = "false";
// tup[2] = "false";
// console.log(tup);
var student;
student = ["tsach", 33];
