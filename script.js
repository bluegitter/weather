const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const weatherData = [
  { day: 'Monday', temperature: '25°C', condition: 'Sunny' },
  { day: 'Tuesday', temperature: '22°C', condition: 'Rainy' },
  { day: 'Wednesday', temperature: '20°C', condition: 'Cloudy' },
  { day: 'Thursday', temperature: '28°C', condition: 'Fog' },
  { day: 'Friday', temperature: '26°C', condition: 'Rain and Snow' },
  { day: 'Saturday', temperature: '23°C', condition: 'Partly Cloudy' },
  { day: 'Sunday', temperature: '24°C', condition: 'Snow' },
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


function startCardAnimations(index) {
  if (index >= weatherData.length) {
    return;
  }

  const card = weatherContainer.children[index];
  card.style.animation = 'flipAnimation 1s forwards';

  setTimeout(() => {
    startCardAnimations(index + 1);
  }, 750);
}

startCardAnimations(0);

function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return '☀️';
    case 'rainy':
      return '🌧️';
    case 'cloudy':
      return '☁️';
    case 'partly cloudy':
      return '🌤️';
    case 'thunderstorm':
      return '🌩️';
    case 'snow':
      return '❄️';
    case 'fog':
      return '🌫️';
    case 'hurricane':
      return '🌀';
    case 'rain and snow':
      return '🌨️';
    default:
      return '❓';
  }
}
