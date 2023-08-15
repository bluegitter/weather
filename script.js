const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const weatherData = [
  { day: 'Monday', temperature: '25°C', condition: 'Sunny' },
  { day: 'Tuesday', temperature: '22°C', condition: 'Rainy' },
  { day: 'Wednesday', temperature: '20°C', condition: 'Cloudy' },
  { day: 'Thursday', temperature: '28°C', condition: 'Sunny' },
  { day: 'Friday', temperature: '26°C', condition: 'Rainy' },
  { day: 'Saturday', temperature: '23°C', condition: 'Cloudy' },
  { day: 'Sunday', temperature: '24°C', condition: 'Sunny' },
];

const weatherContainer = document.querySelector('.weather-container');

weatherData.forEach((data) => {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  card.innerHTML = `
    <h3>${data.day}</h3>
    <div class="weather-icon">${getWeatherIcon(data.condition)}</div>
    <p>${data.temperature}</p>
  `;

  let timeoutId;

  card.addEventListener('mouseenter', () => {
    timeoutId = setTimeout(() => {
      card.style.animation = 'flipAnimation 1s forwards';
    }, 500);
  });

  card.addEventListener('mouseleave', () => {
    clearTimeout(timeoutId);
    card.style.animation = '';
  });

  weatherContainer.appendChild(card);
});

function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return '☀️';
    case 'rainy':
      return '🌧️';
    case 'cloudy':
      return '☁️';
    default:
      return '❓';
  }
}
