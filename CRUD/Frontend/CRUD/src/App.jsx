import React, { useState, useEffect } from "react"
import { addContact, getContacts } from "./Services/contactService";
import {ContactForm} from "./Components/ContactForm";
import {ContactList} from "./Components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await getContacts();
      setContacts(res.data);
    }catch(error){
      console.error("Error fetching contacts:", error);
    }
  };

  const handelAdd = async (contact) => {
    try{
      await addContact(contact);
      fetchContacts(); // Refresh the contact list after adding a new contact

    }catch(error){
      console.error("Error adding contact:", error);
    }
  }

  const handleDelete = async (id) => {
    try{
      await deleteContact(id);
      fetchContacts(); // Refresh the contact list after deleting a contact
    }catch(error){
      console.error("Error deleting contact:", error);
    }
  }
  return (
    <div style={{padding:"20px"}}>
      <h1>Contact Manager</h1>
      <ContactForm onAdd={handelAdd}/>
      <h2>Contact List:</h2>
      <ContactList contacts={contacts} onDelete={handleDelete}/>
    </div>
  )
}

export default App
