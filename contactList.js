
const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

function displayContacts(list) {
    console.log("contactlist:");
    list.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} / ${contact.phone} / ${contact.email}`);
    });
    console.log(""); 
}


function addContact(name, phone, email) {
    contactList.push({ name, phone, email });
    console.log(`${name} add.`);
}


function displayFirstAndLastContacts() {
    if (contactList.length === 0) {
        console.log("Contactlist is empty.");
        return;
    }

    console.log("Firstcantact:");
    console.log(`${contactList[0].name} / ${contactList[0].phone} / ${contactList[0].email}`);
    console.log("Lastcontact:");
    console.log(`${contactList[contactList.length - 1].name} / ${contactList[contactList.length - 1].phone} / ${contactList[contactList.length - 1].email}`);
    console.log(""); 
}


displayContacts(contactList);


addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");

displayContacts(contactList);

displayFirstAndLastContacts();