// Climate Background Images Mapping
// This file maps each weather condition to its corresponding background image

const climateBackgrounds = {
  // Thunderstorm Group (2xx) - Exact OpenWeatherMap descriptions
  "thunderstorm with light rain":
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&q=80",
  "thunderstorm with rain":
    "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1920&q=80",
  "thunderstorm with heavy rain":
    "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&q=80",
  "light thunderstorm":
    "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80",
  thunderstorm:
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1920&q=80",
  "heavy thunderstorm":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  "ragged thunderstorm":
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1920&q=80",
  "thunderstorm with light drizzle":
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&q=80",
  "thunderstorm with drizzle":
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80",
  "thunderstorm with heavy drizzle":
    "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80",

  // Drizzle Group (3xx) - Exact OpenWeatherMap descriptions
  "light intensity drizzle":
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1920&q=80",
  drizzle:
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&q=80",
  "heavy intensity drizzle":
    "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=1920&q=80",
  "light intensity drizzle rain":
    "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1920&q=80",
  "drizzle rain":
    "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=1920&q=80",
  "heavy intensity drizzle rain":
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1920&q=80",
  "shower rain and drizzle":
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80",
  "heavy shower rain and drizzle":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "shower drizzle":
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=1920&q=80",

  // Rain Group (5xx) - Exact OpenWeatherMap descriptions
  "light rain":
    "https://images.unsplash.com/photo-1415604934674-561df9abf539?w=1920&q=80",
  "moderate rain":
    "https://images.unsplash.com/photo-1508556919487-845f191276ab?w=1920&q=80",
  "heavy intensity rain":
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=1920&q=80",
  "very heavy rain":
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1920&q=80",
  "extreme rain":
    "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=1920&q=80",
  "freezing rain":
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=1920&q=80",
  "light intensity shower rain":
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80",
  "shower rain":
    "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&q=80",
  "heavy intensity shower rain":
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1920&q=80",
  "ragged shower rain":
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=1920&q=80",

  // Snow Group (6xx) - Exact OpenWeatherMap descriptions
  "light snow":
    "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?w=1920&q=80",
  snow: "https://images.unsplash.com/photo-1420809014629-2598e1c3c182?w=1920&q=80",
  "heavy snow":
    "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=1920&q=80",
  sleet:
    "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=1920&q=80",
  "light shower sleet":
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80",
  "shower sleet":
    "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1920&q=80",
  "light rain and snow":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  "rain and snow":
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80",
  "light shower snow":
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=1920&q=80",
  "shower snow":
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&q=80",
  "heavy shower snow":
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?w=1920&q=80",

  // Atmosphere Group (7xx) - Exact OpenWeatherMap descriptions
  mist: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  smoke:
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80",
  haze: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "sand/dust whirls":
    "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80",
  fog: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=80",
  sand: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&q=80",
  dust: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=1920&q=80",
  "volcanic ash":
    "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=1920&q=80",
  squalls:
    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1920&q=80",
  tornado:
    "https://images.unsplash.com/photo-1574675608185-5e1b78a2d46b?w=1920&q=80",

  // Clear Group (800) - Exact OpenWeatherMap descriptions
  "clear sky":
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",

  // Clouds Group (80x) - Exact OpenWeatherMap descriptions
  "few clouds: 11-25%":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "scattered clouds: 25-50%":
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80",
  "broken clouds: 51-84%":
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=80",
  "overcast clouds: 85-100%":
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80",

  // Additional common variations (sometimes API returns simplified versions)
  "few clouds":
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "scattered clouds":
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920&q=80",
  "broken clouds":
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1920&q=80",
  "overcast clouds":
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80",
};

// Fallback backgrounds for main weather groups
const fallbackBackgrounds = {
  Thunderstorm:
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1920&q=80",
  Drizzle:
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&q=80",
  Rain: "https://images.unsplash.com/photo-1508556919487-845f191276ab?w=1920&q=80",
  Snow: "https://images.unsplash.com/photo-1420809014629-2598e1c3c182?w=1920&q=80",
  Atmosphere:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80",
  Clear:
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
  Clouds:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
};

// Default background if no match is found
const defaultBackground =
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80";

/**
 * Get background image for weather condition
 * @param {string} description - Weather description from API
 * @param {string} main - Main weather group from API
 * @returns {string} - Background image path
 */
export const getClimateBackground = (description, main) => {
  // First try exact description match
  if (climateBackgrounds[description?.toLowerCase()]) {
    return climateBackgrounds[description.toLowerCase()];
  }

  // Then try main weather group fallback
  if (fallbackBackgrounds[main]) {
    return fallbackBackgrounds[main];
  }

  // Return default background
  return defaultBackground;
};

export { climateBackgrounds, fallbackBackgrounds };
export default climateBackgrounds;
