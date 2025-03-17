"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Shmebulakk"));
function greet2(name, age, isStudent) {
    return `Hello, my name is ${name}, I am ${age} years old, and I am ${isStudent ? "a student" : "not a student"}.`;
}
console.log(greet2("Nina", 29, true));
const person = {
    name: "Nina",
    age: 29,
    isStudent: true
};
console.log(`Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`);
// app.ts
function multiply(a, b) {
    return a * b;
}
//   console.log(multiply("hello", 2)); // ❌ TypeScript Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// last exercise mini project 
const input = document.querySelector("#nameInput");
const button = document.querySelector("#submitButton");
const output = document.querySelector("#outputText");
if (button && input && output) {
    button.addEventListener("click", () => {
        const name = input.value;
        output.textContent = `Hello, ${name}!`;
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const data = yield response.json();
        return data;
    });
}
fetchPosts().then(posts => {
    posts.forEach(post => console.log(`Post: ${post.title}`));
});
