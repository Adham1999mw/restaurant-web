// src/components/NearbyRestaurants.tsx
import React, { useEffect, useState } from 'react';
import { getCurrentLocation } from '../services/locationService';
import { getNearbyRestaurants } from '../services/placesService';
import { Position, Restaurant, Location } from '../modules/restaurants';
import { Grid } from '@mui/material';
import RestaurantCard from './common/RestaurantCard';
import AppText from './common/AppText';

const NearbyRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const position: Position = await getCurrentLocation();
        const { latitude, longitude } = position.coords;

        setLocation({ latitude, longitude });
        const restaurants = await getNearbyRestaurants(latitude, longitude);
        setRestaurants(restaurants);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
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

  if (!location) {
    return <div>Location not available</div>;
  }

  return (
    <Grid marginBlock={2}>
      <AppText fontWeight="large" fontSize="large" color="text.primary">
        Nearby Restaurants
      </AppText>
      <Grid container spacing={2} marginBlock={1}>
        {restaurants.map((restaurant, index) => {
          const distance = calculateDistance(
            location.latitude,
            location.longitude,
            restaurant.geometry.location.lat,
            restaurant.geometry.location.lng
          );

          return (
            <Grid item xs={12} md={4} sm={6} key={index}>
              <RestaurantCard
                restaurant={restaurant}
                distance={distance}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default NearbyRestaurants;
