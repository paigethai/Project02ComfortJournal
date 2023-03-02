// PSUEDO CODE  --> User Journal Entry / Input

// Create a file (firebase.js) to configure and export the Firebase object

// Import database object
import firebaseInfo from "./firebase.js";

import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const database = getDatabase(firebaseInfo);
const dbRef = ref(database);

// save the references that we expect to interact with 
const promptRef = ref(database, '/prompts')
const userEntryRef = ref(database, '/userEntry')

// Use document.querySelector() to get our JS objects:
    // 1. One that points to the form that would hold the input text area
    const formElement = document.querySelector('#journalForm');
    // 2. One that points to an input field where the user would input text that indicates time / date of their entry!!!!
    const textElement = document.querySelector('')
    // 3. One that points to the textarea where the user inputs their journal entry via text
    // 4. One that points to the button for the user to submit their entry
    // 5. One that points to the ul will hold the the each li (journal entry)

// Add an eventListener() to the form to listen for 'submit'. On submit it should: 
    // Prevent the default refresh of the browser, using the preventDefault() method
    // Retrieve the date entry from the input via document.querySelector('input') and store withiin a variable
    // Retrieve the journal entry from the input via document.querySelector('input') and store within a variable
    // Push the user's date entry and journal input to the external database using an if statement 
        // Save the user entry / value to the database 
    // Clear the input field to an empty string 


// Call getDatabase() and ref() to create a reference to the Firebase database

// Call onValue() to get a snapshot of the database, and to get a new snapshot
    // Update realtime database from anytime change occurs on app 
    // In the callback object - if statement - to check for data stored in the database to eventually append to our page
    // Clear the existing ul from the page using innerHTML
    // Use the for loop that'll append the li children to ul 



// **********************************



// PSUEDO CODE --> Journal Prompts 

// Use doucment.querySelector() to get our JS objects: 
    // 1. One that points to the class name of "prompt-container" within the aside 

    // IMPORT DATE via importing JSON file 
    // Add them manually directly into Firebase db  
        // Create a variable that'll hold an array of prompts (objects)
        // Create a function that'll add the prompt variable to the database 
        // Call the function to store the prompts in the database

// Using the onValue() method to pull in our data from firebase 
    // This will get the data that we just sent to the database, back to our code so we can work with it 

    // Use a callback function that'll give us direct access to the individual prompts within the prompt object

// Refer to the variable that the prompts are stored within and using a Math.floor() and Math.random(), randomly select a prompt (value) from the prompts array
    // Store the above within a variable --> randomPrompt

    // Refer to the variable from Step 1 and use the innerHTML property to add --> <p>${randomPrompt}</p>



    // QUESTIONS FOR MENTOR:
        // * will the page automatically refresh with the preventDefault() method and the Firebase --> will it hard refresh?
            // randomizer function will run on refresh

        // * how do we use the get() function properly with what we have?
            // this function is unnecessary ^ 

        // * for loop on line 29 thats within the onValue() 
