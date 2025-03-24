//  1
let count = 0;
const increment = () => {
  count++;
  console.log(count);
};
increment();
increment();

// 2
const person = { firstName: 'Nina', lastName: 'Smith', age: 66 };
const { firstName, lastName, age } = person;

const intro = `Hola, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
console.log(intro);

// 3
const tasks = [
    { title: 'Study JavaScript', done: true },
    { title: 'Go for a run', done: false },
    { title: 'Read a book', done: true }
  ];
  
  const titles = tasks.map(task => task.title);
  console.log('Task Titles:', titles);
  
  const completed = tasks.filter(task => task.done);
  console.log('Completed Tasks:', completed);
  
  const doneCount = tasks.reduce((count, task) => task.done ? count + 1 : count, 0);
  console.log('Number of Completed Tasks:', doneCount);


// 4 mini project 
const fetchPost = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json();
    console.log('Fetched Post:', data);
  };
  fetchPost();
  
  // class
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  const me = new Person('Nina', 29);
  me.greet();

  




  
