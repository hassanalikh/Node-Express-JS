import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

// Parse JSON bodies for this app
app.use(express.json());
app.use(express.static('public'))

//HTTP METHODS (get -> Fetch, post -> Add, put -> Update, delete -> Remove)


app.get('/' , (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/about' , (req, res) => {
    res.send("<h1>About Us PAGE</h1>");
});


app.get('/contact' , (req, res) => {
    res.send("<h1>Contact US PAGE</h1>");
});


app.get('/profile' , (req, res) => {
    res.send("<h1>Profile PAGE</h1>");
});

app.get("/service", (req, res)=>{
    res.send("<h1>Services PAGE</h1>");
});

app.post("/save", (req, res)=>{
    let formdata = req.dataaa;
    // formdata save into database
    res.send("success");
    res.send("fail")
});





app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`)
});




