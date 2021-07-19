import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home.js";
import Tabs from "./Navigation//Tabs.js";

import Restaurant from "./screens/Restaurant.js";
import OrderDelivery from "./screens/OrderDelivery.js";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={"Home"}
			>
				<Stack.Screen name='Tabs' component={Tabs} />
				<Stack.Screen name='Restaurant' component={Restaurant} />
				<Stack.Screen name='OrderDelivery' component={OrderDelivery} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
