const tasks = []

function newTask(task) {
	tasks.push(task)
}

function editTask(index, task) {
	tasks[index] = task
}

function removeTask(index) {
	tasks.pop(index)
}

const task_01 = {
	title: "Study JS",
	concluded: false,
	priority: 2
}

const task_02 = {
	title: "Study CSS",
	concluded: true,
	priority: 1
}

console.log(tasks)

newTask(task_02)
console.log("\n")
console.log(tasks)

editTask(0, task_01)
console.log("\n")
console.log(tasks)

removeTask(0)
console.log("\n")
console.log(tasks)
