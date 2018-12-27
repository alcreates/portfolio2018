const express = require('express');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '/../build')));


app.get('*', (req, res) => {
    const index = path.join(__dirname, '/../build/index.html');
  res.sendFile(index);
});




app.listen(PORT, ()=> {
    console.log(`Listening on PORT : ${PORT}`)
})