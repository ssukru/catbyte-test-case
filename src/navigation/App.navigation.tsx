import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNavigationType } from "../types/Navigation";
import { CreateUser, Home, UserDetail } from "../screens";

const NavStack = createNativeStackNavigator<AppNavigationType>();

const AppNavigation = () => {
  return (
    <NavStack.Navigator screenOptions={{ headerShown: false }}>
      <NavStack.Screen name="HomeScreen" component={Home} />
      <NavStack.Screen name="UserDetailScreen" component={UserDetail} />
      <NavStack.Screen name="CreateUserScreen" component={CreateUser} />
    </NavStack.Navigator>
  );
};

export default AppNavigation;
