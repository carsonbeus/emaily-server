const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ sah: 'dude' });
});

const PORT = process.env.PORT
app.listen(PORT)

