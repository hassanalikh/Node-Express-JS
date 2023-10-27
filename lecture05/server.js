import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 8100;

import userRoutes from './routes/user/routes.js';
import productRoutes from './routes/product/routes.js';

app.use(bodyParser.json());




//app.METHOD(PATH, HANDLER)

//Respond with Hello World! on the homepage:
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);


/*
//Respond to POST request on the root route (/), the application’s home page:
app.post('/', (req, res) => {
    //get data from browser/client
  res.send('Got a POST request')
});

//Respond to a PUT request to the /user route:
app.put('/user', (req, res) => {
// recieve user id 
  res.send('Got a PUT request at /user')
})

//Respond to a DELETE request to the /user route:
app.delete('/user', (req, res) => {
    // recieve user id 
  res.send('Got a DELETE request at /user')
})
*/
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});