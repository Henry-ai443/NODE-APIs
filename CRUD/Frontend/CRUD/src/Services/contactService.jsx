const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//GET ALL contacts

export const getContacts = async () => {
    const response = await fetch(`${API_URL}/contacts`);
    if(!response.ok) {
        throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    return data;
}

//ADD new Contact
export const addContact = async (contact) => {
    const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
    if(!response.ok) {
        throw new Error('Failed to add contact');
    }
    const data = await response.json();
    return data;
}

//Update Contact
export const updateContact = async (id, contact) => {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
    });
    if(!response.ok) {
        throw new Error('Failed to update contact');
    }
    const data = await response.json();
    return data;
}

//Delete Contact
export const deleteContact = async (id) => {
    const response = await fetch(`${API_URL}/contacts/${id}`, {
        method: 'DELETE'
    });
    if(!response.ok) {
        throw new Error('Failed to delete contact');
    }
    return true;
}