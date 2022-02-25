import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Splash: React.FC = () => {
	return (
		<View style={styles.box}>
			<LottieView
				style={styles.animation}
				source={require('../../../assets/splash.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		backgroundColor: '#000',
	},
	animation: {
		width: '40%',
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
	},
});

export default Splash;