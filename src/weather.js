const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY ="ac855aaaae946b17c838e1026f2b3915";
const COORDS ="coords";

const getJSON = function(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      const status = xhr.status;
      if(status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };
  
  getJSON('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=ac855aaaae946b17c838e1026f2b3915&units=metric',
  function(err, data) {
    if(err !== null) {
      alert('예상치 못한 오류 발생.' + err);
    } else {
      weather.innerText = String(data.main.temp);
      city.innerText = data.name;
    }
  });
