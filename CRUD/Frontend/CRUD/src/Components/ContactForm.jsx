import React, { useState } from "react";

function ContactForm({onAdd}){
    const [contact, setContact] = useState({name: '', email: '', phone: ''});

    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!contact.name || !contact.email || !contact.phone){
            return;
        }
        onAdd(contact);
        setContact({name: '', email: '', phone: ''});// Clear form after submission
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
            <input type="text" name="phone" value={contact.phone} onChange={handleChange} placeholder="Phone" required />
            <button type="submit">Add Contact</button>
        </form>
    )
}
export {ContactForm};