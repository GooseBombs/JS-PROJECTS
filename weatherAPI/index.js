const form = document.getElementById("form")
const input = document.getElementById("input")
const city = document.getElementById("city")
const temp = document.getElementById("temp")
const stat = document.getElementById("stat")
const minMax = document.getElementById("min-max")

const apiURL = "https://api.openweathermap.org/data/2.5/"
const apiKEY = "00a4d13c0dca3ecedb4e6f32a3c3c355"

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    getWheather(input.value);
})
const getWheather = (cityName) => {
    let query = `${apiURL}weather?q=${cityName}&appid=${apiKEY}&units=metric&lang=EN`
    console.log(query)
    fetch(query).then(response => {
        return response.json()
    }).then(shoWheather)
}
const shoWheather = (result) =>{
    let stValue = result.weather[0].description
    const stringValue = [stValue.toString()]
    city.innerText=`${result.name}, ${result.sys.country}`
    temp.innerText=`${Math.round(result.main.temp)}°C`
    stat.innerText=`${stringValue}`
    
    minMax.innerText=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`

} 
