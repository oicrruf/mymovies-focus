import {
	CardStyleInterpolators,
	createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import Detail from '../components/screens/Detail';
import Home from '../components/screens/Home';
import Login from '../components/screens/Login';
import Search from '../components/screens/Search';
import Splash from '../components/atoms/Splash';

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerShown: false,
};

const homeScreenOptions = {
	headerLeft: () => null,
	title: '',
	headerTintColor: '#fff',
	headerTransparent: true,
};

const detailScreenOptions = {
	title: '',
	headerTintColor: '#fff',
	headerTransparent: true,
};

const screenOptionsStyleHeaderWhitTransition = {
	title: '',
	headerStyle: {
		backgroundColor: '#000',
	},
	headerTintColor: '#fff',
	headerTransparent: false,
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const SplashScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Splash" component={Splash} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={homeScreenOptions}
			/>
		</Stack.Navigator>
	);
};

export const LoginScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={homeScreenOptions}
			/>
			<Stack.Screen name="Splash" component={Splash} />
		</Stack.Navigator>
	);
};

export const HomeScreen = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={Home}
				options={homeScreenOptions}
			/>
			<Stack.Screen
				name="Login"
				component={Login}
				options={screenOptionStyle}
			/>
			<Stack.Screen
				name="DetailScreen"
				component={Detail}
				options={detailScreenOptions}
			/>
			<Stack.Screen
				name="SearchScreen"
				component={SearchScreen}
				options={screenOptionsStyleHeaderWhitTransition}
			/>
		</Stack.Navigator>
	);
};

export const DetailScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Detail"
				component={Detail}
				options={detailScreenOptions}
			/>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export const SearchScreen = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Search"
				component={Search}
				options={screenOptionsStyleHeaderWhitTransition}
			/>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={homeScreenOptions}
			/>
		</Stack.Navigator>
	);
};
