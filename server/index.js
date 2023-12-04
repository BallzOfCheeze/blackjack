const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/api/', routes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});