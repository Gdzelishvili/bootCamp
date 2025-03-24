//  1
let count = 0;
const increment = () => {
  count++;
  console.log(count);
};
increment();
increment();

// 2
const person = { firstName: 'Nina', lastName: 'Smith', age: 29 };
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
  
