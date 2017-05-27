/**
 * Created by quangprolathe on 05/27/2017.
 */
let express = require('express');
let app = express();
app.listen(3000);
app.set('view engine','ejs');
app.set('views', './views');
app.get('/',(req,res) => res.render('home'));