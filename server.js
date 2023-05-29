const express = require('express');
const app = express();

app.use((req, res) => res.status(404).json({ message: '404 not found...' }));

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});
