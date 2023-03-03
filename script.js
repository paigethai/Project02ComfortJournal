// PSUEDO CODE  --> User Journal Entry / Input

// Create a file (firebase.js) to configure and export the Firebase object

// Import database object
import firebaseInfo from "./firebase.js";

import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Call getDatabase() and ref() to create a reference to the Firebase database
const database = getDatabase(firebaseInfo);
const dbRef = ref(database);

// save the references that we expect to interact with 
const promptRef = ref(database, '/prompts');
const userEntryRef = ref(database, '/userEntry');


// Use document.querySelector() to get our JS objects:
    // 1. One that points to the form that would hold the input text area
    const formElement = document.querySelector('.journalForm');

    // 4. One that points to the button for the user to submit their entry MIGHT NOT NEED THIS~!!!!!!!!!!!!!!!!
    const journalButton = document.querySelector('#journalButton');

    // 5. One that points to the ul will hold the the each li (journal entry)
    const journalUl = document.querySelector('.uploadedEntries');

// Add an eventListener() to the form to listen for 'submit'. On submit it should: 
formElement.addEventListener('submit', function(event){
    // Prevent the default refresh of the browser, using the preventDefault() method
    event.preventDefault();

    // ADD the date and apply the date constructor to get an obj and save to a variable
    const date = new Date();
    // select out the data that we will need to display on the page-parsed through and found this the plus 1 on the month is due to an array and thus january = 0 so we need to add 1
    const month = date.getUTCMonth() + 1; 
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    const newdate = year + "/" + month + "/" + day;


    // Retrieve the journal entry via document.querySelector('textarea') and store within a variable doing this within the scope of the event listener bcc it will be easier to call on 
    const textElement = document.getElementById('comment');
    console.log(textElement)

    const journalEntry = textElement.value;
    // cant figure out why its not reading the textElement as an object!!! why?
    
    // saving the date and journal entry into an object so that in the DB it is nested together as its important that the date and entry are associated
    const journalDateEntryObj = {
        userDate: newdate,
        userJournal: journalEntry
    }

    // Push the user's date entry and journal input to the external database using an if statement 
    if(journalDateEntryObj){
        // Save the user entry / value to the database
        push(userEntryRef, journalDateEntryObj);
        // Clear the input field to an empty string 
        textElement.value = '';
    }
});


// Call onValue() to get a snapshot of the database, and to get a new snapshot
onValue(userEntryRef, function(journalObject){
    // In the callback object - if statement - to check for data stored in the database to eventually append to our page
    if(journalObject.exists()){
        // Update realtime database from anytime change occurs on app 
        const entries = journalObject.val();
        // Clear the existing ul from the page using innerHTML
        journalUl.innerHTML = "";

        // Use the for loop that'll append the li children to ul....do i need property key here? refer to animals excersize on the why
        for(let key in entries){
            const headerValue = entries[key].userDate;
            const paragraphValue = entries[key].userJournal

            // add a li 
            // append the date as an h3
            // append the user input as a paragraph 
            const newListItem = document.createElement('li');
            newListItem.innerHTML = `
            <h3>${headerValue}</h3>
            <p>${paragraphValue}</p>`;

            // append li as child to ul
            journalUl.appendChild(newListItem);
        }
    }
})




// **********************************



// PSUEDO CODE --> Journal Prompts 

// Use doucment.querySelector() to get our JS objects: 
    // 1. One that points to the class name of "prompt-container" within the aside 

    // IMPORT DATA via importing JSON file 
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
