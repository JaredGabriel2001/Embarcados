document.addEventListener('DOMContentLoaded', function() {
    // Função para obter a previsão do tempo
    function getWeather() {
        // Use uma API de previsão do tempo (por exemplo, OpenWeatherMap, WeatherAPI, etc.)
        // Substitua 'SUA_CHAVE_API' pelo seu próprio token de API
        const apiKey = '89e9ca08c35200d6946883e25a04cb99';
        const cidade = 'Cascavel';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherDiv = document.getElementById('weather');
                weatherDiv.innerHTML = `Clima em ${cidade}-PR: ${data.weather[0].description}, ${data.main.temp}°C, Umidade: ${data.main.humidity}%`;
            })
            .catch(error => console.error('Erro ao obter dados do clima:', error));
    }

    // Função para obter o horário atual
    function getTime() {
        const timeDiv = document.getElementById('time');
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        if(hours<10){
            timeDiv.innerHTML = `Horário atual: 0${hours}:${minutes}:${seconds}`;
        }
        if(minutes<10){
            timeDiv.innerHTML = `Horário atual: ${hours}:0${minutes}:${seconds}`;
        }
        if(seconds<10){
            timeDiv.innerHTML = `Horário atual: ${hours}:${minutes}:0${seconds}`;
        }
        else{
            timeDiv.innerHTML = `Horário atual: ${hours}:${minutes}:${seconds}`;
        }
    }

    // Chama as funções
    getWeather();
    getTime();

    // Atualiza o horário a cada segundo
    setInterval(getTime, 1000);
});
