// client-side js code

// Change background image
window.addEventListener('DOMContentLoaded', () => {
   let day = new Date();
   let time = day.getHours();
   console.log(time)

   // if time is past 7PM and before 5 AM
   if (time >= 19 || time <= 5) {
      document.querySelector('#weather-mode').classList.add('night');
   } else {
      document.querySelector('#weather-mode').classList.add('day');
   }

});


// Fetch Weather
const weatherForm = document.querySelector('form'),
      search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
   console.log(search.value)
   const location = search.value;

   fetch('http://localhost:3000/weather?address=' + location )
      .then((response) => {
         response.json().then((data) => {
            if (data.error) {
               const errorDisplay = document.querySelector('.forecast');
               errorDisplay.innerHTML = `
               <div class="container">
                  <div class="row">
                     <div class="alert">
                        <h4 class="summary-title"> ${data.error} </h4>
                     </div>
                  </div>
               </div>  
               `;
                console.log(data.error)
            } else {
               const summary = document.querySelector('.forecast');
               summary.innerHTML = `
                  <div class="container">
                     <div class="row">
                     <div class="summary">
                        <h2 class="temp">${data.forecast.temp}&#8451;</h2> 
                        <h4 class="sum">${data.forecast.sum}</h4> 
                        <h5 class="loc">${data.location}</h5> 
                     </div>
                     <div class="widget">
                        <span class="conditions">
                           <div class="row">
                           <div class="columns six">
                              <img src="../img/dew.png" alt="prespitation" class="svg-icon">
                           </div>
                           <div class="columns six">
                              <h2 class="title">${data.forecast.precipitation}</h2>
                              <p class="desc">Precipitation</p>
                           </div>
                           </div>
                        </span>
                        <span class="conditions">
                           <div class="row">
                           <div class="columns six">
                              <img src="../img/heavy-rain.svg" alt="humidity" class="svg-icon">
                           </div>
                           <div class="columns six">
                              <h2 class="title">${data.forecast.humidity}%</h2>
                              <p class="desc">Humidity</p>
                           </div>
                           </div>
                        </span>
                        <span class="conditions">
                           <div class="row">
                           <div class="columns six">
                              <img src="../img/wind.svg" alt="wind" class="svg-icon">
                           </div>
                           <div class="columns six">
                              <h2 class="title">${data.forecast.wind} <span>kph</span></h2>
                              <p class="desc">Wind</p>
                           </div>
                           </div>
                        </span>
                     </div>
                     </div>
                  </div>
               `;
               // console.log(data.forecast)
               console.log(data.location)
            }

         })
      })
   
   e.preventDefault();
});

