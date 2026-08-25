import {EventEmitter} from 'node:events'

const sayHi = (name) => {
    console.log(`${name} logged in`);
};
 
const task = new EventEmitter();
task.once("greet", () => {
    console.log("System started")
})


task.on("greet", sayHi);
task.on("greet", (name) => {
    console.log(`${name} starts working`)
});

task.once("greet", (name) => {
  console.log(`System stopped working  ${name}`);
});
task.emit("greet", "Rahul Singh");

task.emit("greet", "Manish");
