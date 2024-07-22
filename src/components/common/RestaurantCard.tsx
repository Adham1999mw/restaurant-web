// src/components/RestaurantCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Box, Button } from '@mui/material';
import AppText from './AppText';
// import { Restaurant } from '../../modules/restaurants';
import { Star, Restaurant as RestaurantIcon, LocationOn, SocialDistance } from '@mui/icons-material';

interface RestaurantCardProps {
  restaurant: any;
  distance: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, distance }) => {
  const imageUrl = restaurant?.photos && restaurant.photos.length > 0
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=150&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyDRkLrHX81OD3BQoVtk-hR1tRpUH0iluR4`
    : 'https://via.placeholder.com/150';


  return (
    <Card sx={{ display: 'flex', marginBlock: 2 }}>
      <CardMedia
        component="img"
        sx={{ minWidth:180 , width: 180 }}
        image={imageUrl}
        alt={restaurant.name || 'Restaurant image'}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <AppText 
            variant="h6" 
            fontWeight="medium" 
            fontSize="medium"
            sx={{ 
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {restaurant.name}
          </AppText>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <RestaurantIcon sx={{ marginRight: 1, width: 18 }} />
            <AppText 
              variant="body2" 
              fontWeight="medium" 
              fontSize="small" 
              color="text.secondary"
              sx={{ 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {restaurant.types[1]}
            </AppText>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <LocationOn sx={{ marginRight: 1, width: 18 }} />
            <AppText 
              variant="body2" 
              fontWeight="medium" 
              fontSize="small" 
              color="text.secondary"
              sx={{ 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {restaurant.vicinity}
            </AppText>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <Star sx={{ marginRight: 1, width: 18 }} color={restaurant.rating >= 4 ? 'warning' : 'disabled'} />
            <AppText 
              variant="body2" 
              fontWeight="medium" 
              fontSize="small" 
              color="text.secondary"
              sx={{ 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {restaurant.rating} / 5
            </AppText>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <SocialDistance sx={{ marginRight: 1, width: 18 }} />
            <AppText 
              variant="body2" 
              fontWeight="medium" 
              fontSize="small" 
              color="text.secondary" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {distance.toFixed(2)} K.M
            </AppText>
          </Box>
        </CardContent>
        <Box sx={{ padding: 2, marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained">
            View
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default RestaurantCard;
