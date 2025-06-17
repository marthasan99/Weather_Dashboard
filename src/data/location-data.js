const data = [
  // Asia
  {
    location: "Tokyo",
    lat: 35.6762,
    lon: 139.6503,
  },
  {
    location: "Beijing",
    lat: 39.9042,
    lon: 116.4074,
  },
  {
    location: "Shanghai",
    lat: 31.2304,
    lon: 121.4737,
  },
  {
    location: "Seoul",
    lat: 37.5665,
    lon: 126.978,
  },
  {
    location: "Mumbai",
    lat: 19.076,
    lon: 72.8777,
  },
  {
    location: "Delhi",
    lat: 28.7041,
    lon: 77.1025,
  },
  {
    location: "Kolkata",
    lat: 22.5726,
    lon: 88.3639,
  },
  {
    location: "Bangalore",
    lat: 12.9716,
    lon: 77.5946,
  },
  {
    location: "Chennai",
    lat: 13.0827,
    lon: 80.2707,
  },
  {
    location: "Bangkok",
    lat: 13.7563,
    lon: 100.5018,
  },
  {
    location: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
  },
  {
    location: "Kuala Lumpur",
    lat: 3.139,
    lon: 101.6869,
  },
  {
    location: "Jakarta",
    lat: -6.2088,
    lon: 106.8456,
  },
  {
    location: "Manila",
    lat: 14.5995,
    lon: 120.9842,
  },
  {
    location: "Ho Chi Minh City",
    lat: 10.8231,
    lon: 106.6297,
  },
  {
    location: "Hanoi",
    lat: 21.0285,
    lon: 105.8542,
  },
  {
    location: "Dhaka",
    lat: 23.8103,
    lon: 90.4125,
  },

  // Bangladesh Districts
  // Dhaka Division
  {
    location: "Faridpur",
    lat: 23.607,
    lon: 89.8429,
  },
  {
    location: "Gazipur",
    lat: 23.9999,
    lon: 90.4203,
  },
  {
    location: "Gopalganj",
    lat: 23.005,
    lon: 89.8266,
  },
  {
    location: "Kishoreganj",
    lat: 24.4449,
    lon: 90.776,
  },
  {
    location: "Madaripur",
    lat: 23.1641,
    lon: 90.1896,
  },
  {
    location: "Manikganj",
    lat: 23.8644,
    lon: 90.0047,
  },
  {
    location: "Munshiganj",
    lat: 23.5422,
    lon: 90.5305,
  },
  {
    location: "Narayanganj",
    lat: 23.6238,
    lon: 90.499,
  },
  {
    location: "Narsingdi",
    lat: 23.9322,
    lon: 90.7151,
  },
  {
    location: "Rajbari",
    lat: 23.7574,
    lon: 89.6444,
  },
  {
    location: "Shariatpur",
    lat: 23.2423,
    lon: 90.4348,
  },
  {
    location: "Tangail",
    lat: 24.2513,
    lon: 89.9167,
  },

  // Chittagong Division
  {
    location: "Chittagong",
    lat: 22.3569,
    lon: 91.7832,
  },
  {
    location: "Bandarban",
    lat: 22.1953,
    lon: 92.2183,
  },
  {
    location: "Brahmanbaria",
    lat: 23.9571,
    lon: 91.1115,
  },
  {
    location: "Chandpur",
    lat: 23.2333,
    lon: 90.6712,
  },
  {
    location: "Comilla",
    lat: 23.4607,
    lon: 91.1809,
  },
  {
    location: "Cox's Bazar",
    lat: 21.4272,
    lon: 92.0058,
  },
  {
    location: "Feni",
    lat: 23.0159,
    lon: 91.3976,
  },
  {
    location: "Khagrachhari",
    lat: 23.1193,
    lon: 91.9847,
  },
  {
    location: "Lakshmipur",
    lat: 22.9447,
    lon: 90.8413,
  },
  {
    location: "Noakhali",
    lat: 22.8696,
    lon: 91.0995,
  },
  {
    location: "Rangamati",
    lat: 22.6533,
    lon: 92.1751,
  },

  // Rajshahi Division
  {
    location: "Rajshahi",
    lat: 24.3745,
    lon: 88.6042,
  },
  {
    location: "Bogra",
    lat: 24.8465,
    lon: 89.3773,
  },
  {
    location: "Joypurhat",
    lat: 25.0968,
    lon: 89.0227,
  },
  {
    location: "Naogaon",
    lat: 24.7936,
    lon: 88.9318,
  },
  {
    location: "Natore",
    lat: 24.4206,
    lon: 89.0,
  },
  {
    location: "Chapainawabganj",
    lat: 24.5965,
    lon: 88.2775,
  },
  {
    location: "Pabna",
    lat: 24.0064,
    lon: 89.2372,
  },
  {
    location: "Sirajganj",
    lat: 24.4533,
    lon: 89.7006,
  },

  // Khulna Division
  {
    location: "Khulna",
    lat: 22.8456,
    lon: 89.5403,
  },
  {
    location: "Bagerhat",
    lat: 22.6602,
    lon: 89.7895,
  },
  {
    location: "Chuadanga",
    lat: 23.6401,
    lon: 88.8212,
  },
  {
    location: "Jessore",
    lat: 23.1634,
    lon: 89.2182,
  },
  {
    location: "Jashore",
    lat: 23.1634,
    lon: 89.2182,
  },
  {
    location: "Jhenaidah",
    lat: 23.5448,
    lon: 89.1539,
  },
  {
    location: "Kushtia",
    lat: 23.9013,
    lon: 89.1206,
  },
  {
    location: "Magura",
    lat: 23.4855,
    lon: 89.4198,
  },
  {
    location: "Meherpur",
    lat: 23.7722,
    lon: 88.6318,
  },
  {
    location: "Narail",
    lat: 23.1725,
    lon: 89.5127,
  },
  {
    location: "Satkhira",
    lat: 22.7185,
    lon: 89.0705,
  },

  // Barisal Division
  {
    location: "Barisal",
    lat: 22.701,
    lon: 90.3535,
  },
  {
    location: "Barguna",
    lat: 22.1596,
    lon: 90.1116,
  },
  {
    location: "Bhola",
    lat: 22.6859,
    lon: 90.6482,
  },
  {
    location: "Jhalokati",
    lat: 22.6406,
    lon: 90.1987,
  },
  {
    location: "Patuakhali",
    lat: 22.3596,
    lon: 90.3298,
  },
  {
    location: "Pirojpur",
    lat: 22.5841,
    lon: 89.972,
  },

  // Sylhet Division
  {
    location: "Sylhet",
    lat: 24.8949,
    lon: 91.8687,
  },
  {
    location: "Habiganj",
    lat: 24.3745,
    lon: 91.4156,
  },
  {
    location: "Moulvibazar",
    lat: 24.4829,
    lon: 91.7774,
  },
  {
    location: "Sunamganj",
    lat: 25.0658,
    lon: 91.395,
  },

  // Rangpur Division
  {
    location: "Rangpur",
    lat: 25.7439,
    lon: 89.2752,
  },
  {
    location: "Dinajpur",
    lat: 25.6217,
    lon: 88.6354,
  },
  {
    location: "Gaibandha",
    lat: 25.3287,
    lon: 89.5282,
  },
  {
    location: "Kurigram",
    lat: 25.8054,
    lon: 89.6361,
  },
  {
    location: "Lalmonirhat",
    lat: 25.9923,
    lon: 89.2847,
  },
  {
    location: "Nilphamari",
    lat: 25.9319,
    lon: 88.856,
  },
  {
    location: "Panchagarh",
    lat: 26.3411,
    lon: 88.5541,
  },
  {
    location: "Thakurgaon",
    lat: 26.0336,
    lon: 88.4616,
  },

  // Mymensingh Division
  {
    location: "Mymensingh",
    lat: 24.7471,
    lon: 90.4203,
  },
  {
    location: "Jamalpur",
    lat: 24.9375,
    lon: 89.937,
  },
  {
    location: "Netrokona",
    lat: 24.8709,
    lon: 90.7298,
  },
  {
    location: "Sherpur",
    lat: 25.0204,
    lon: 90.0152,
  },
  {
    location: "Karachi",
    lat: 24.8607,
    lon: 67.0011,
  },
  {
    location: "Lahore",
    lat: 31.5204,
    lon: 74.3587,
  },
  {
    location: "Islamabad",
    lat: 33.7294,
    lon: 73.0931,
  },
  {
    location: "Colombo",
    lat: 6.9271,
    lon: 79.8612,
  },
  {
    location: "Kathmandu",
    lat: 27.7172,
    lon: 85.324,
  },
  {
    location: "Yangon",
    lat: 16.8661,
    lon: 96.1951,
  },
  {
    location: "Phnom Penh",
    lat: 11.5564,
    lon: 104.9282,
  },
  {
    location: "Vientiane",
    lat: 17.9757,
    lon: 102.6331,
  },

  // Europe
  {
    location: "London",
    lat: 51.5074,
    lon: -0.1278,
  },
  {
    location: "Paris",
    lat: 48.8566,
    lon: 2.3522,
  },
  {
    location: "Berlin",
    lat: 52.52,
    lon: 13.405,
  },
  {
    location: "Madrid",
    lat: 40.4168,
    lon: -3.7038,
  },
  {
    location: "Rome",
    lat: 41.9028,
    lon: 12.4964,
  },
  {
    location: "Amsterdam",
    lat: 52.3676,
    lon: 4.9041,
  },
  {
    location: "Vienna",
    lat: 48.2082,
    lon: 16.3738,
  },
  {
    location: "Prague",
    lat: 50.0755,
    lon: 14.4378,
  },
  {
    location: "Warsaw",
    lat: 52.2297,
    lon: 21.0122,
  },
  {
    location: "Budapest",
    lat: 47.4979,
    lon: 19.0402,
  },
  {
    location: "Stockholm",
    lat: 59.3293,
    lon: 18.0686,
  },
  {
    location: "Copenhagen",
    lat: 55.6761,
    lon: 12.5683,
  },
  {
    location: "Helsinki",
    lat: 60.1699,
    lon: 24.9384,
  },
  {
    location: "Oslo",
    lat: 59.9139,
    lon: 10.7522,
  },
  {
    location: "Dublin",
    lat: 53.3498,
    lon: -6.2603,
  },
  {
    location: "Brussels",
    lat: 50.8503,
    lon: 4.3517,
  },
  {
    location: "Zurich",
    lat: 47.3769,
    lon: 8.5417,
  },
  {
    location: "Geneva",
    lat: 46.2044,
    lon: 6.1432,
  },
  {
    location: "Barcelona",
    lat: 41.3851,
    lon: 2.1734,
  },
  {
    location: "Milan",
    lat: 45.4642,
    lon: 9.19,
  },
  {
    location: "Munich",
    lat: 48.1351,
    lon: 11.582,
  },
  {
    location: "Frankfurt",
    lat: 50.1109,
    lon: 8.6821,
  },
  {
    location: "Moscow",
    lat: 55.7558,
    lon: 37.6176,
  },
  {
    location: "Saint Petersburg",
    lat: 59.9311,
    lon: 30.3609,
  },
  {
    location: "Kiev",
    lat: 50.4501,
    lon: 30.5234,
  },
  {
    location: "Athens",
    lat: 37.9838,
    lon: 23.7275,
  },
  {
    location: "Istanbul",
    lat: 41.0082,
    lon: 28.9784,
  },
  {
    location: "Ankara",
    lat: 39.9334,
    lon: 32.8597,
  },

  // North America
  {
    location: "New York",
    lat: 40.7128,
    lon: -74.006,
  },
  {
    location: "Los Angeles",
    lat: 34.0522,
    lon: -118.2437,
  },
  {
    location: "Chicago",
    lat: 41.8781,
    lon: -87.6298,
  },
  {
    location: "Houston",
    lat: 29.7604,
    lon: -95.3698,
  },
  {
    location: "Phoenix",
    lat: 33.4484,
    lon: -112.074,
  },
  {
    location: "Philadelphia",
    lat: 39.9526,
    lon: -75.1652,
  },
  {
    location: "San Antonio",
    lat: 29.4241,
    lon: -98.4936,
  },
  {
    location: "San Diego",
    lat: 32.7157,
    lon: -117.1611,
  },
  {
    location: "Dallas",
    lat: 32.7767,
    lon: -96.797,
  },
  {
    location: "San Francisco",
    lat: 37.7749,
    lon: -122.4194,
  },
  {
    location: "Seattle",
    lat: 47.6062,
    lon: -122.3321,
  },
  {
    location: "Boston",
    lat: 42.3601,
    lon: -71.0589,
  },
  {
    location: "Miami",
    lat: 25.7617,
    lon: -80.1918,
  },
  {
    location: "Las Vegas",
    lat: 36.1699,
    lon: -115.1398,
  },
  {
    location: "Washington DC",
    lat: 38.9072,
    lon: -77.0369,
  },
  {
    location: "Toronto",
    lat: 43.6532,
    lon: -79.3832,
  },
  {
    location: "Montreal",
    lat: 45.5017,
    lon: -73.5673,
  },
  {
    location: "Vancouver",
    lat: 49.2827,
    lon: -123.1207,
  },
  {
    location: "Calgary",
    lat: 51.0447,
    lon: -114.0719,
  },
  {
    location: "Ottawa",
    lat: 45.4215,
    lon: -75.6972,
  },
  {
    location: "Mexico City",
    lat: 19.4326,
    lon: -99.1332,
  },
  {
    location: "Guadalajara",
    lat: 20.6597,
    lon: -103.3496,
  },
  {
    location: "Monterrey",
    lat: 25.6866,
    lon: -100.3161,
  },

  // South America
  {
    location: "São Paulo",
    lat: -23.5505,
    lon: -46.6333,
  },
  {
    location: "Rio de Janeiro",
    lat: -22.9068,
    lon: -43.1729,
  },
  {
    location: "Buenos Aires",
    lat: -34.6118,
    lon: -58.396,
  },
  {
    location: "Lima",
    lat: -12.0464,
    lon: -77.0428,
  },
  {
    location: "Bogotá",
    lat: 4.711,
    lon: -74.0721,
  },
  {
    location: "Santiago",
    lat: -33.4489,
    lon: -70.6693,
  },
  {
    location: "Caracas",
    lat: 10.4806,
    lon: -66.9036,
  },
  {
    location: "Quito",
    lat: -0.1807,
    lon: -78.4678,
  },
  {
    location: "La Paz",
    lat: -16.5,
    lon: -68.1193,
  },
  {
    location: "Montevideo",
    lat: -34.9011,
    lon: -56.1645,
  },
  {
    location: "Asunción",
    lat: -25.2637,
    lon: -57.5759,
  },
  {
    location: "Georgetown",
    lat: 6.8013,
    lon: -58.1551,
  },
  {
    location: "Paramaribo",
    lat: 5.852,
    lon: -55.2038,
  },
  {
    location: "Brasília",
    lat: -15.8267,
    lon: -47.9218,
  },

  // Africa
  {
    location: "Cairo",
    lat: 30.0444,
    lon: 31.2357,
  },
  {
    location: "Lagos",
    lat: 6.5244,
    lon: 3.3792,
  },
  {
    location: "Kinshasa",
    lat: -4.4419,
    lon: 15.2663,
  },
  {
    location: "Johannesburg",
    lat: -26.2041,
    lon: 28.0473,
  },
  {
    location: "Cape Town",
    lat: -33.9249,
    lon: 18.4241,
  },
  {
    location: "Durban",
    lat: -29.8587,
    lon: 31.0218,
  },
  {
    location: "Casablanca",
    lat: 33.5731,
    lon: -7.5898,
  },
  {
    location: "Algiers",
    lat: 36.7538,
    lon: 3.0588,
  },
  {
    location: "Tunis",
    lat: 36.8065,
    lon: 10.1815,
  },
  {
    location: "Accra",
    lat: 5.6037,
    lon: -0.187,
  },
  {
    location: "Abuja",
    lat: 9.0765,
    lon: 7.3986,
  },
  {
    location: "Nairobi",
    lat: -1.2921,
    lon: 36.8219,
  },
  {
    location: "Addis Ababa",
    lat: 9.145,
    lon: 40.4897,
  },
  {
    location: "Dar es Salaam",
    lat: -6.7924,
    lon: 39.2083,
  },
  {
    location: "Kampala",
    lat: 0.3476,
    lon: 32.5825,
  },
  {
    location: "Kigali",
    lat: -1.9441,
    lon: 30.0619,
  },
  {
    location: "Lusaka",
    lat: -15.3875,
    lon: 28.3228,
  },
  {
    location: "Harare",
    lat: -17.8252,
    lon: 31.0335,
  },
  {
    location: "Maputo",
    lat: -25.9692,
    lon: 32.5732,
  },
  {
    location: "Luanda",
    lat: -8.839,
    lon: 13.2894,
  },

  // Oceania
  {
    location: "Sydney",
    lat: -33.8688,
    lon: 151.2093,
  },
  {
    location: "Melbourne",
    lat: -37.8136,
    lon: 144.9631,
  },
  {
    location: "Brisbane",
    lat: -27.4698,
    lon: 153.0251,
  },
  {
    location: "Perth",
    lat: -31.9505,
    lon: 115.8605,
  },
  {
    location: "Adelaide",
    lat: -34.9285,
    lon: 138.6007,
  },
  {
    location: "Canberra",
    lat: -35.2809,
    lon: 149.13,
  },
  {
    location: "Auckland",
    lat: -36.8485,
    lon: 174.7633,
  },
  {
    location: "Wellington",
    lat: -41.2865,
    lon: 174.7762,
  },
  {
    location: "Christchurch",
    lat: -43.5321,
    lon: 172.6362,
  },
  {
    location: "Suva",
    lat: -18.1248,
    lon: 178.4501,
  },
  {
    location: "Port Moresby",
    lat: -9.4438,
    lon: 147.1803,
  },

  // Middle East
  {
    location: "Dubai",
    lat: 25.2048,
    lon: 55.2708,
  },
  {
    location: "Abu Dhabi",
    lat: 24.2539,
    lon: 54.3773,
  },
  {
    location: "Riyadh",
    lat: 24.7136,
    lon: 46.6753,
  },
  {
    location: "Jeddah",
    lat: 21.4858,
    lon: 39.1925,
  },
  {
    location: "Doha",
    lat: 25.2854,
    lon: 51.531,
  },
  {
    location: "Kuwait City",
    lat: 29.3759,
    lon: 47.9774,
  },
  {
    location: "Manama",
    lat: 26.0667,
    lon: 50.5577,
  },
  {
    location: "Muscat",
    lat: 23.5859,
    lon: 58.4059,
  },
  {
    location: "Tehran",
    lat: 35.6892,
    lon: 51.389,
  },
  {
    location: "Baghdad",
    lat: 33.3152,
    lon: 44.3661,
  },
  {
    location: "Damascus",
    lat: 33.5138,
    lon: 36.2765,
  },
  {
    location: "Beirut",
    lat: 33.8938,
    lon: 35.5018,
  },
  {
    location: "Amman",
    lat: 31.9454,
    lon: 35.9284,
  },
  {
    location: "Jerusalem",
    lat: 31.7683,
    lon: 35.2137,
  },
  {
    location: "Tel Aviv",
    lat: 32.0853,
    lon: 34.7818,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(name) {
  if (!name) {
    return null;
  }
  const filteredLocations = data.filter(
    (location) => location.location.toLowerCase() === name.toLowerCase()
  );
  if (filteredLocations.length > 0) {
    return filteredLocations[0];
  } else {
    const defaultLocation = {
      location: "Unknown",
      lat: 0,
      lon: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
