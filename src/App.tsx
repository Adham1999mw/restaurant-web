// src/App.tsx
import React from 'react';
import Layout from './components/Layout';
import NearbyRestaurants from './components/NearbyRestaurants';
import { ThemeProviderComponent } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProviderComponent>

      <Layout>
        <NearbyRestaurants />
      </Layout>

    </ThemeProviderComponent>
  );
};

export default App;
