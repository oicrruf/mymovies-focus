import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

interface Props {
	navigation: any;
}

const SearchButton: React.FC<Props> = props => {
	const {navigation} = props;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				navigation.navigate('SearchScreen');
			}}>
			<Icon
				name="search"
				color="#fff"
				containerStyle={styles.buttonSearchStyle}
				tvParallaxProperties={undefined}
			/>
		</TouchableWithoutFeedback>
	);
};

export default SearchButton;