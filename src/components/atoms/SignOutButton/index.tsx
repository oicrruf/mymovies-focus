import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {singOut} from '../../../utils';
import styles from './styles';

interface Props {
	navigation: any;
}

const SignOutButton: React.FC<Props> = props => {
	const {navigation} = props;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				singOut().then(result => {
					result === null && navigation.navigate('Login');
				});
			}}>
			<Icon
				name="logout"
				color="#fff"
				containerStyle={styles.buttonLogout}
				tvParallaxProperties={undefined}
			/>
		</TouchableWithoutFeedback>
	);
};

export default SignOutButton;
