const express = require('express');
const cors = require('cors');
const app = express();
app.use( cors() );
app.use( express.json() )
app.use('/mobile/clientes', require('./routes/clientes'));
app.listen(3000, ()=>{
    console.log("Server corriendo en puerto",3000)
})