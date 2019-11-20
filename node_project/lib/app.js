
const express = require('express');
const app = module.exports = express();


app.get('/', (req, res) => {
    res.send('hi')
})


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Press Ctrl+C to quit. App Mode: ${global.APP_MODE}`);
});