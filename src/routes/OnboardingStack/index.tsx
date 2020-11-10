import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../../pages/Onboarding';
import Welcome from '../../pages/Welcome';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import RegisterSuccessful from '../../pages/RegisterSuccessful';

const { Navigator, Screen } = createStackNavigator();

export default function OnboardingStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="RegisterSuccessful" component={RegisterSuccessful} />
      </Navigator>
    </NavigationContainer>
  );
}
