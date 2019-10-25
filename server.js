const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist', 'EatGo-app')))

const googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCFCDqcWZryyPAnPa8h_cJVAWemz-kOhYo&query=restaurants+in+Albany"


app.get('/api/eatgo', (req, res) => {
    //const location = req.Config.place;
    request.get(googlePLacesQueryUrl)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 