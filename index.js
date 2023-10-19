const express = require('express');

const port = 8000;
const app = express();

app.listen(port,function(err){
if(err){
    console.log('Error in the server ', err );
}else{
    console.log('server is up and ready to use at port ' , port );
}
})