const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extrended: false}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req,res) =>{
    res.json({
        messgae: 'Hello World'
    });
});

app.use((req,res) =>{
    res.status(404).end();
});