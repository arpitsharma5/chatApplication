var express = require('express');
var app = express();

app.get('*',(req,res)=>{
  res.send('express response');
});

app.listen(3000);
console.log('app server running on 3000 port');
