const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Добавьте эту строку

const app = express();
const PORT = process.env.PORT || 3000;

// Используйте cors middleware
app.use(cors()); // Добавьте эту строку

// Middleware to parse JSON bodies
app.use(express.json());

// Define the data file path
const dataFilePath = path.join(__dirname, 'data.json');

const categoriesFilePath = path.join(__dirname, 'categories.json');

// Helper function to read data from the file
function readData() {
    if (!fs.existsSync(dataFilePath)) {
        return [];
    }
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
}

function readCategories() {
    if (!fs.existsSync(categoriesFilePath)) {
        return [];
    }
    const data = fs.readFileSync(categoriesFilePath, 'utf8');
    return JSON.parse(data);
}

// Helper function to write data to the file
function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

function writeCategories(data) {
    fs.writeFileSync(categoriesFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// GET /data - Retrieve all data
app.get('/data', (req, res) => {
    const data = readData();
    res.json(data);
});

// POST /data - Add new data
app.post('/data', (req, res) => {
    const newData = req.body;
    const data = readData();
    data.push(newData);
    writeData(data);
    res.status(201).json(newData);
});

// PUT /data/:id - Update data by ID
app.put('/data/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const data = readData();
    const index = data.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Data not found' });
    }
    data[index] = { ...data[index], ...updatedData };
    writeData(data);
    res.json(data[index]);
});

// DELETE /data/:id - Delete data by ID
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const data = readData();
    const index = data.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Data not found' });
    }
    data.splice(index, 1);
    writeData(data);
    res.status(204).send();
});

// GET /data - Retrieve all data
app.get('/cat', (req, res) => {
    const data = readCategories();
    res.json(data);
});

// POST /data - Add new data
app.post('/cat', (req, res) => {
    const newData = req.body;
    const data = readCategories();
    data.push(newData);
    writeCategories(data);
    res.status(201).json(newData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});