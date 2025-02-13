// script.js
document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    if (!city) return;

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`)
        .then(response => response.json())
        .then(data => {
            if (!data.results || data.results.length === 0) {
                document.getElementById("weatherDisplay").textContent = "❓ Stadt nicht gefunden!";
                return;
            }
            const { latitude, longitude } = data.results[0];

            return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        })
        .then(response => response.json())
        .then(data => {
            if (!data || !data.current_weather) {
                document.getElementById("weatherDisplay").textContent = "❓ Keine Wetterdaten gefunden!";
                return;
            }

            const weatherCode = data.current_weather.weathercode;
            const temperature = data.current_weather.temperature;
            document.getElementById("weatherDisplay").textContent = getWeatherEmoji(weatherCode);
            document.getElementById("temperatureDisplay").textContent = `🌡️ ${temperature}°C`;
        })
        .catch(error => {
            console.error("Fehler:", error);
            document.getElementById("weatherDisplay").textContent = "⚠️ Fehler beim Abrufen der Daten";
        });
});

function getWeatherEmoji(code) {
    const emojiMap = {
        0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
        45: "🌫️", 48: "🌫️",
        51: "🌦️", 53: "🌦️", 55: "🌦️",
        61: "🌧️", 63: "🌧️", 65: "🌧️",
        80: "🌧️", 81: "🌧️", 82: "🌧️",
        95: "⛈️", 96: "⛈️", 99: "⛈️"
    };
    return emojiMap[code] || "❓";
}
