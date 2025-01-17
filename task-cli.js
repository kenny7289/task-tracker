const fs = require('fs');
const path = './tasks.json';

function readTask() {
    if (!fs.existsSync(path)) { return []; }
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

function saveTask(tasks) {  // save tasks to JSON file
    fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

function addTask(description) {
    const tasks = readTask();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1, // if there are tasks, get the last task id and add 1, else set id to 1
        description,
        status: 'not done' // default status
    };
    tasks.push(newTask);
    saveTask(tasks);
    console.log(`Task added successfully (ID: ${id})`);
}

function updateTask(id, newDescription) {
    const tasks = readTask();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with id ${id} not found`);
        return;
    }
    task.description = newDescription;
    saveTask(tasks);
    console.log(`Updated task ${id} to: ${newDescription}`);
}

function deleteTask(id) {
    let tasks = readTask();
    tasks = tasks.filter(task => task.id !== id);
    saveTask(tasks);
    console.log(`Deleted task ${id}`);
}

function markTaskInProgress(id) {
    const tasks = readTask();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with id ${id} not found`);
        return;
    }
    task.status = 'in-progress';
    saveTask(tasks);
    console.log(`Marked task ${id} as in progress`);
}

function markTaskAsDone(id) {
    const tasks = readTask();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`Task with id ${id} not found`);
        return;
    }
    task.status = 'done';
    saveTask(tasks);
    console.log(`Marked task ${id} as done`);
}

function listTasksAll() {
    const tasks = readTask();
    if (!tasks.length) {
        console.log('No tasks');
        return;
    }
    console.log('All tasks:');
    tasks.forEach(task => console.log(`Task ${task.id}: ${task.description} - ${task.status}`));
}

function listTasksDone() {
    const tasks = readTask();
    if (!tasks.length) {
        console.log('No tasks');
        return;
    }
    console.log('Done tasks:');
    tasks.filter(task => task.status === 'done').forEach(task => console.log(`Task ${task.id}: ${task.description} - ${task.status}`));
}

function listTasksTodo() {
    const tasks = readTask();
    if (!tasks.length) {
        console.log('No tasks');
        return;
    }
    console.log('To do tasks:');
    tasks.filter(task => task.status === 'not done').forEach(task => console.log(`Task ${task.id}: ${task.description} - ${task.status}`));
}

function listTasksInProgress() {
    const tasks = readTask();
    if (!tasks.length) {
        console.log('No tasks');
        return;
    }
    console.log('Tasks in progress:');
    tasks.filter(task => task.status === 'in-progress').forEach(task => console.log(`Task ${task.id}: ${task.description} - ${task.status}`));
}

const [, , action, ...args] = process.argv;

switch (action) {
    case 'add':
        addTask(args.join(' '));
        break;
    case 'update':
        updateTask(parseInt(args[0]), args.slice(1).join(' '));
        break;
    case 'delete':
        deleteTask(parseInt(args[0]));
        break;
    case 'mark-in-progress':
        markTaskInProgress(parseInt(args[0]));
        break;
    case 'mark-done':
        markTaskAsDone(parseInt(args[0]));
        break;
    case 'list':
        switch (args[0]) {
            case 'done':
                listTasksDone();
                break;
            case 'todo':
                listTasksTodo();
                break;
            case 'in-progress':
                listTasksInProgress();
                break;
            default:
                listTasksAll();
                break;
        }
        break
    default:
        console.log('Invalid action');
        break;
}