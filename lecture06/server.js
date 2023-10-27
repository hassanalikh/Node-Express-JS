import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 5100;
const data = fs.readFileSync('./data/movies.json' ,"utf8");
let movies = JSON.parse(data);

//Middlewares
app.use(express.json());

// HTTP METHODS
app.get('/api/v1/movies', (req,res)=>{
    res.status(200).json(
        {
            status: "success", 
            count: movies.length,
            data:{
                movies: movies
            } 
        }
    );
});

app.get('/api/v1/movies/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const index = movies.findIndex(movie => movie.id === id);
    const movie = movies[index];

    // console.log("index=>", index);
    res.status(200).json(
        {
            status: "success", 
            data:{
                movie
            } 
        }
    );
});


app.post('/api/v1/movies', (req,res)=>{

    //console.log(req.body);

    let lastIndex = movies.length - 1;
    let newId = movies[lastIndex].id + 1;
    let newMovie = Object.assign({id: newId} , req.body);
    // console.log(lastIndex, newId)
    movies.push(newMovie);

    res.status(201).json({
        status: "success",
        movies:{
            movie:newMovie
        }
    });




});
app.put('/api/v1/movies/:id', (req,res)=>{
    res.send("update api");
});
app.delete('/api/v1/movies/:id', (req,res)=>{
    
    const id = parseInt(req.params.id);
    const index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      movies.splice(index, 1);
      res.send(`Movie with id ${id} has been deleted.`);
    } else {
      res.status(404).send('Movie not found');
    }
});


app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})