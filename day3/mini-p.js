let todos = [
    { id: 1, task: "Learn JavaScript", completed: false },
    { id: 2, task: "Practice Tailwind CSS", completed: true },
    { id: 3, task: "Build a project", completed: false }
];


todos.push({ id: 4, task: "Review Hoisting", completed: false });


todos = todos.filter(todo => !todo.completed);

console.log("Updated To-Do List:", todos);




const getIncompleteTasks = function(tasks) {
    return tasks.filter(task => !task.completed);
};


console.log("Incomplete Tasks:", getIncompleteTasks(todos));



console.log(declaredFunction()); // use function before declaration

function declaredFunction() {
    return "I am hoisted!";
}

// console.log(expressionFunction()); ERROR: Cannot access before initialization
const newExpressionFunction = function() {
    return "I am NOT hoisted!";
};


document.body.innerHTML = `
    <h2>To-Do List</h2>
    <ul>
        ${todos.map(todo => `<li>${todo.task} (${todo.completed ? "✅" : "❌"})</li>`).join('')}
    </ul>
    <h3>Incomplete Tasks:</h3>
    <ul>
        ${getIncompleteTasks(todos).map(todo => `<li>${todo.task}</li>`).join('')}
    </ul>
`;
