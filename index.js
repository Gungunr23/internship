import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import {postSignUpForm} from './src/controllers/signUpformcontroller.js';
import { postPortfolioForm } from './src/controllers/myPortfolioController.js';
import { myPortfolioData } from './src/controllers/myPortfolioData.js';
import multer from 'multer';
const app = express();
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        const filename=Date.now()+''+file.originalname
        cb(null,filename);

    }
});
const upload=multer({storage:storage});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static(path.resolve('src', 'static','css')));
app.use('/static', express.static(path.resolve('src', 'static', 'css')));


app.set("view engine", "ejs");
app.set('views', path.resolve('src', 'views'));
app.set('layout', 'homeLayout');

app.get("/", (req, res) => {
    res.render('home', {
        cssFile: 'style',
        portfolioData: myPortfolioData
    });
});
app.get('/portfolio-form', (req, res) => {
    res.render('portfolioForm', {
        cssFile: 'portfolioform'
    });
});


    
app.get('/contact', (req, res) => {
    res.render('contact', {cssFile:'contact'});
});
app.get('/signup', (req, res) => {
    res.render('signup', {cssFile : 'contact'});

});
app.post('/portfolio-form', postPortfolioForm);

app.post('/signup',postSignUpForm);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})