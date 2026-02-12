const readline = require('readline-sync');

let taskList = [];
let continuePrompt = true;

console.log("Welcome to your Task Manager!");

while (continuePrompt) {
   let newTaskPrompt = readline.question("Please type 'View' to view your list, 'Add' to add to the list, Or type 'Exit' to quit.");

   if (newTaskPrompt === 'Exit' || newTaskPrompt === 'exit'){
      continuePrompt = false;
      console.log("Have a great day!");
   }

   else if (newTaskPrompt === 'View' || newTaskPrompt === 'view'){
      console.log("Got it! Your current list is... ", taskList);

   }

   else if (newTaskPrompt === 'Add' || newTaskPrompt === 'add'){
      let newTask = readline.question('What task would you like to add?');
      taskList.push(newTask);
      console.log("Got it! Your current list is... ", taskList);

}
   else {
      
      console.log("I'm sorry! Please enter either 'View', 'Add', or 'Exit'");
   }
        
}
