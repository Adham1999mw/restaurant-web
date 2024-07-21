import React, { useEffect, useState } from 'react';
import { getCurrentLocation } from '../services/locationService';
import { getNearbyRestaurants } from '../services/placesService';

const NearbyRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const position = await getCurrentLocation();
        const { latitude, longitude } = position.coords;

        console.log(latitude, longitude);
        setLocation({ latitude, longitude });
        const restaurants = await getNearbyRestaurants(latitude, longitude);
        setRestaurants(restaurants);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  useEffect(() => {
    console.log(restaurants);
  },[restaurants])

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 - Math.cos(dLat) / 2 + (Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * (1 - Math.cos(dLon))) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>
      <h1>Nearby Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => {
          const distance = location
            ? calculateDistance(location.latitude, location.longitude, restaurant.geometry.location.lat, restaurant.geometry.location.lng)
            : null;
          return (
            <li key={restaurant.place_id}>
              <div>
                <strong>{restaurant.name}</strong>
              </div>
              <div>{distance ? `${distance.toFixed(2)} km` : 'Calculating...'}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NearbyRestaurants;
