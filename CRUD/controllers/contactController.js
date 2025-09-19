const db = require('../config/db');

//CREATE : ADD A NEW CONTACT

const createContact = (req, res) => {
    const { name, email, phone } = req.body;

    if(!name || !email || !phone){
        return res.status(400).json({ error: 'Please provide name, email, and phone' });
    }

    const sql = 'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)';
    db.query(sql, [name, email, phone], (err, result) => {
        if(err){
            console.error('Error adding contact:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Contact added successfully', contactId: result.insertId });
    });
};

//READ : GET ALL CONTACTS
const getContacts = (req, res) => {
    const sql = 'SELECT * FROM contacts';
    db.query(sql, (err, results) => {
        if(err){
            console.error('Error fetching contacts:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
}

const getContactById = (req, res) => {
    const contactId = req.params.id;
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    db.query(sql, [contactId], (err, results) => {
        if(err){
            console.error('Error fetching contact:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if(results.length === 0){
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(results[0]);
    });
}
module.exports = { createContact, getContacts, getContactById };
