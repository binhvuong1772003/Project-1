import express from 'express'
const app = express()
const hostname = 'localhost'
const port = 8712
app.get('/',function(req,res) {
    res.send('<h1> Chào mừng bạn đến với trang web của Bình </h1>')
}
);
app.listen(port,hostname,() =>
{
    console.log('Bình nè')
})