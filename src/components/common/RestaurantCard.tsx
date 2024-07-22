import React from 'react';
import { Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import AppText from './AppText';
import { Star, Restaurant as RestaurantIcon, LocationOn, SocialDistance } from '@mui/icons-material';

interface RestaurantCardProps {
  restaurant: any;
  distance: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, distance }) => {
  const imageUrl = restaurant?.photos && restaurant.photos.length > 0
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=450&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4`
    : 'https://via.placeholder.com/350';

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: 350  , backgroundSize:'cover'}} 
        image={imageUrl}
        alt={restaurant.name || 'Restaurant image'}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <AppText variant="h6" fontWeight="medium" fontSize="medium">
            {restaurant.name}
          </AppText>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <RestaurantIcon sx={{ marginRight: 1, width: 18 }} />
            <AppText variant="body2" fontWeight="medium" fontSize="small" color="text.secondary">
              {restaurant.types[1]}
            </AppText>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <LocationOn sx={{ marginRight: 1, width: 18 }} />
            <AppText variant="body2" fontWeight="medium" fontSize="small" color="text.secondary">
              {restaurant.vicinity}
            </AppText>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Star sx={{ marginRight: 1, width: 18 }} color={restaurant.rating >= 4 ? 'warning' : 'disabled'} />
            <AppText variant="body2" fontWeight="medium" fontSize="small" color="text.secondary">
              {restaurant.rating} / 5
            </AppText>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <SocialDistance sx={{ marginRight: 1, width: 18 }} />
            <AppText variant="body2" fontWeight="medium" fontSize="small" color="text.secondary">
              {distance.toFixed(2)} K.M
            </AppText>
          </Box>
        </CardContent>
        <Box sx={{ padding: 2, marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained">View</Button>
        </Box>
      </Box>
    </Card>
  );
};

export default RestaurantCard;
