import axios from 'axios';
import { Place, PlacesApiResponse } from '../models/placesTypes';

const GOOGLE_PLACES_API_KEY ='AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4';
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const getNearbyRestaurants = async (
  latitude: number,
  longitude: number
): Promise<Place[]> => {
  try {
    const response = await axios.get<PlacesApiResponse>(`${proxyurl}${BASE_URL}` , {
      params: {
        location: `${latitude},${longitude}`,
        radius: 10000,
        type: 'restaurant',
        key: GOOGLE_PLACES_API_KEY,
      },
    });
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error('Error fetching nearby restaurants:', error);
    throw error;
  }
};
