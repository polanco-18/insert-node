const dbConnection = require('../../config/dbConection');

module.exports= app =>{

    const connection  =dbConnection();

    app.get('/',(req,res)=>{
        connection.query('SELECT * FROM news',(err,result)=>{
            res.render('news/news',{
                news:result
            });
        });
    });
    app.post('/news',(req,res)=>{
        const{ title,news}=req.body;
        connection.query('INSERT INTO news SET ?',{
            title: title,
            news: news
        },(err,result)=>{
            res.redirect('/');
        });
    });
};