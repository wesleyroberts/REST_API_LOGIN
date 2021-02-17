const mongoose =require ('mongoose')

mongoose.connect('mongodb://localhost:27018/baselogin', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});
mongoose.Promise = global.Promise

module.exports = mongoose