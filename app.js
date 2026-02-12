const readline = require('readline-sync');

let taskList = [];
let continuePrompt = true;


 // Introduction
console.log("Welcome to your Task Manager!");  

//Main Loop
while (continuePrompt) {
   let newTaskPrompt = readline.question("Please type 'View' to view your list, 'Add' to add to the list, Or type 'Exit' to quit.");

//To break loop if user inputs exit.
   if (newTaskPrompt === 'Exit' || newTaskPrompt === 'exit'){
      continuePrompt = false;
      console.log("Have a great day!");
   }

//To view a numbered list if user inputs view.
   else if (newTaskPrompt === 'View' || newTaskPrompt === 'view'){
      console.log("Got it! Your current list is... ");
      taskList.forEach((task,index) => {
         console.log(index + ": " + task);});
//To mark a task as complete and remove from the list.
      let userInput = readline.question("Enter number of task to mark as completed.");
      taskList.splice(Number(userInput), 1);
      console.log("Task completed! Your list is now: ", taskList);
      
//To choose to complete another task or go back to main menu
      let userChoice = readline.question("Please type 'Return' to return to the Main Menu, or 'Complete' to mark another task as complete.");
//Takes user back to Main Menu      
      if (userChoice === 'Return' || userChoice === 'return'){
         continue;
      }

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
