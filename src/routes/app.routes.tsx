import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//  screens
import SearchScreen from '../screens/searchScreen/container';
import PokemonScreen from '../screens/pokemonScreen/container';
import {AppStackParamList} from './types';

const App = createNativeStackNavigator<AppStackParamList>();

const AppRoutes: React.FC = () => (
  <App.Navigator initialRouteName="SearchScreen">
    <App.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <App.Screen
      name="PokemonScreen"
      component={PokemonScreen}
      options={{
        headerShown: false,
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
