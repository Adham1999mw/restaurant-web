import axios from 'axios';
import { Place, PlacesApiResponse } from '../modules/placesTypes';

const GOOGLE_PLACES_API_KEY ='AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4';
const BASE_URL = process.env.REACT_APP_API_URL;

console.log(process.env.REACT_APP_API_KEY , 'one');

export const getNearbyRestaurants = async (
  latitude: number,
  longitude: number
): Promise<Place[]> => {
  try {
    const response = await axios.get<PlacesApiResponse>(BASE_URL, {
      params: {
        location: `${latitude},${longitude}`,
        radius: 1500,
        type: 'restaurant',
        key: GOOGLE_PLACES_API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching nearby restaurants:', error);
    throw error;
  }
};
