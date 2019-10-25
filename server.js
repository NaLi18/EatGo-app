const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist', 'EatGo-app')))

app.get('/eatgo/:uid', (req, res) => {
    const locat = req.params.uid
    var googlePLacesQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCFCDqcWZryyPAnPa8h_cJVAWemz-kOhYo&query="
    request.get( googlePLacesQueryUrl + "+restaurants+in+"+locat)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 