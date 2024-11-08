const app = require('./src/app.js');
const {db} = require('./db/connection.js');
const port = 3000;

app.listen(port, () => {
    db.sync()
    console.log(`Server listening on port ${port}`)
});