import express from 'express'
import path from 'path';
const __dirname = path.resolve()

const app = express()
const port = process.env.port || 3000
app.get('/weather/cityName', (req, res)=>{
    let weatherData ={
        karachi:{
            tempInC: 30,
            humdaity: 45,
            low: 21,
        },
        lahore:{
            tempInC: 35,
            humdaity: 49,
            low: 19,
        }
    }
    let userInputCity = req.params.cityName.toLowerCase();
    let weatherDataForRespond = weatherData[userInputCity];

    if(weatherDataForRespond){
        res.send(weatherDataForRespond);
    }else{
        res.status(404).send(`Weahter for ${req.params.cityName} is not Avialable `)
    }
})

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

