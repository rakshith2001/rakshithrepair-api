const wrongURLHandler = (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if (req.accepts('json')){
        res.json({message: 'Page not found'});
    }else{
        res.type('txt').send('page not found');
    }
}

module.exports = wrongURLHandler;