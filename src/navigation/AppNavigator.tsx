import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#006837",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: (props) =>
            props.canGoBack ? (
              <Ionicons
                name="arrow-back"
                size={24}
                color="#fff"
                style={{ marginLeft: 10 }}
                onPress={props.onPress}
              />
            ) : null,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "School Supplies",
            headerRight: () => (
              <Ionicons
                name="school-outline"
                size={24}
                color="#fff"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Shopping Cart",
            headerRight: () => (
              <Ionicons
                name="cart-outline"
                size={24}
                color="#fff"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            title: "Checkout",
            headerRight: () => (
              <Ionicons
                name="card-outline"
                size={24}
                color="#fff"
                style={{ marginRight: 15 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
