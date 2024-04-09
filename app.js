const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();
app.use( cors() );
app.use( express.json() )
app.use('/mobile/clientes', require('./routes/clientes'));
app.listen(port, ()=>{
    console.log("Server corriendo en puerto",port)
})