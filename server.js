const app = require('./server/config/mongoose.js')
app.listen(8000, () => console.log('listening on port 8000'));
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

