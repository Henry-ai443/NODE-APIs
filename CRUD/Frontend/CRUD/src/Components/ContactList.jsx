import React from "react";

function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <ul>
        {contacts.map((c) => (
            <li key={c.id}>
                <strong>{c.name}</strong> - {c.email} - {c.phone}
                <button onClick={() => onEdit(c)}>Edit</button>
                <button onClick={() => onDelete(c.id)}>Delete</button>
            </li>
        ))}
    </ul>
  );
}

export { ContactList };