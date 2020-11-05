const searchForm = document.querySelector('form')
const search = document.querySelector('input')

const locationName = document.querySelector('.location')
const forecast = document.querySelector('.forecast')


searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationName.textContent = data.error
            }else{
                locationName.textContent = data.location
                forecast.textContent = data.forecast
            }
        })
    })
})