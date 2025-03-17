function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Shmebulakk"));


function greet2(name: string, age: number, isStudent: boolean): string {
    return `Hello, my name is ${name}, I am ${age} years old, and I am ${isStudent ? "a student" : "not a student"}.`;
}

console.log(greet2("Nina", 29, true));


interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

const person: Person = {
    name: "Nina",
    age: 29,
    isStudent: true
};

console.log(`Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`);


// app.ts

function multiply(a: number, b: number): number {
    return a * b;
  }
  
//   console.log(multiply("hello", 2)); // ❌ TypeScript Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  


// last exercise mini project 


const input = document.querySelector<HTMLInputElement>("#nameInput");
const button = document.querySelector<HTMLButtonElement>("#submitButton");
const output = document.querySelector<HTMLParagraphElement>("#outputText");


if (button && input && output) {
    button.addEventListener("click", () => {
        const name: string = input.value;
        output.textContent = `Hello, ${name}!`;
    });
}



interface Post {
    id: number;
    title: string;
    body: string;
}


async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json(); 
    return data;
}


fetchPosts().then(posts => {
    posts.forEach(post => console.log(`Post: ${post.title}`));
});
