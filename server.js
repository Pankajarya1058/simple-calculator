const express = require('express');
const path = require('path');
const Calculator = require('./calculator'); // Import your calculator class (make sure calculator.js is in the same directory)

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port if available, otherwise default to 3000

const calculator = new Calculator();

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the root path ("/") to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Calculator API routes
app.get('/add/:a/:b', (req, res) => {
  try {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input. Please provide numbers.");
    }

    const result = calculator.add(a, b);
    res.send(`Result of ${a} + ${b} = ${result}`);
  } catch (error) {
    res.status(500).send("An error occurred."); // More generic error message for the server
    console.error("Server error:", error); // Log the error on the server for debugging
  }
});

app.get('/subtract/:a/:b', (req, res) => {
  try {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input. Please provide numbers.");
    }
    const result = calculator.subtract(a, b);
    res.send(`Result of ${a} - ${b} = ${result}`);
  } catch (error) {
      res.status(500).send("An error occurred.");
      console.error("Server error:", error);
  }
});

app.get('/multiply/:a/:b', (req, res) => {
  try {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input. Please provide numbers.");
    }
    const result = calculator.multiply(a, b);
    res.send(`Result of ${a} * ${b} = ${result}`);
  } catch (error) {
    res.status(500).send("An error occurred.");
    console.error("Server error:", error);
  }
});

app.get('/divide/:a/:b', (req, res) => {
  try {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input. Please provide numbers.");
    }
    const result = calculator.divide(a, b);
    res.send(`Result of ${a} / ${b} = ${result}`);
  } catch (error) {
    res.status(500).send("An error occurred.");
    console.error("Server error:", error);
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
