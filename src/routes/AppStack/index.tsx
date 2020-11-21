import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../../pages/Onboarding';
import Welcome from '../../pages/Welcome';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import RegisterSuccessful from '../../pages/RegisterSuccessful';
import ChooseDate from '../../pages/ChooseDate';
import AppTabs from '../AppTabs';
import EditProfile from '../../pages/EditProfile';
import Exit from '../../pages/Exit';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Login" component={Login} />
        <Screen name="Register" component={Register} />
        <Screen name="RegisterSuccessful" component={RegisterSuccessful} />
        <Screen name="ChooseDate" component={ChooseDate} />
        <Screen name="AppTabs" component={AppTabs} />
        <Screen name="EditProfile" component={EditProfile} />
        <Screen name="Exit" component={Exit} />
      </Navigator>
    </NavigationContainer>
  );
}
