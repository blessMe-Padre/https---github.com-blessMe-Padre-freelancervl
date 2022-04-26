fetch('https://api.openweathermap.org/data/2.5/weather?q=Vladivostok,Ru&appid=c7b93658ce3f57848c36f2acf59dae7f')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        // console.log(data);
        document.querySelector('.weather__city-name').textContent = data.name;

        // api возвращает температуру в фарингейтах, поэтому нужно перевести в цельции (-273 и округлить с помощью Math.round)
        document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';

        // получаем описание облачности
        document.querySelector('.weather__cloud').textContent = data.weather[0]
        ['description'];

        // получаем картинку облачности
        document.querySelector('.weather__cloud-img').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

        // получаем влажность воздуха
        document.querySelector('.weather__humidity').innerHTML = `Влажность ${data.main.humidity}%`;

        // получаем скорость ветра
        document.querySelector('.weather__wind').textContent = `Cкорость ветра ${data.wind.speed} м/с`;

    })
    .catch(function () {

    });