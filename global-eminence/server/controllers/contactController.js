const Contact = require('../models/Contact');

// ✅ Public route — anyone can submit contact form
exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'All required fields must be filled' });
        }

        const contact = await Contact.create({ name, email, phone, message });
        res.status(201).json({ success: true, data: contact });
    } catch (err) {
        console.error('Error creating contact:', err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// ✅ Protected route — only admin can view all messages
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: contacts });
    } catch (err) {
        console.error('Error fetching contacts:', err.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
