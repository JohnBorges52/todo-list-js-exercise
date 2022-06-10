function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " ":" not " }been completed`)
    },
    markCompleted: function() {
      this.complete = true
    }
  };
  return task
}


// DRIVER CODE BELOW

const task1 = newTask("Walk the Dog", "Take bibico to walk in the street"); // task 0

const task2 = newTask("Fix the WashMachine", "Call the build maintenance to fix the thing"); //2

const tasks = [task1,task2];

task1.logState();
task1.markCompleted();
task1.logState();

