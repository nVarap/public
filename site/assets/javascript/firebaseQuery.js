// contact.js
import { db, collection, addDoc } from './firebaseSetup.js';

async function addContactInfo(name, email, message) {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            message: message,
            timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('my-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        
        addContactInfo(name, email, message);

        // Optionally, clear the form fields
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.message.value = '';
    });
});
