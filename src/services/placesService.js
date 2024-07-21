import axios from 'axios';

const GOOGLE_PLACES_API_KEY = 'AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4';
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

export const getNearbyRestaurants = async (latitude, longitude) => {
  const response = await axios.get(BASE_URL, {
    params: {
      location: `${latitude},${longitude}`,
      radius: 1500, // Search within 1.5 km radius
      type: 'restaurant',
      key: GOOGLE_PLACES_API_KEY,
    },
    headers: {
        'Content-Type': 'application/json',
        origin:'*'
      },
  });
  return response.data.results;
};
