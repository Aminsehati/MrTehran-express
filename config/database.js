const mongoose = require('mongoose')
// mongodb+srv://root:PJkIxEoQEJBENLnf@mrtehran.xc53v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
module.exports = () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD }@mrtehran.xc53v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}