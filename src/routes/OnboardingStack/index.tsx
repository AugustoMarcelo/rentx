import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../../pages/Onboarding';
import Welcome from '../../pages/Welcome';

const { Navigator, Screen } = createStackNavigator();

export default function OnboardingStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="Welcome" component={Welcome} />
      </Navigator>
    </NavigationContainer>
  );
}
