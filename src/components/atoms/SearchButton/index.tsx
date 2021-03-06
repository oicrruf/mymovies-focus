import React, {FC} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {color} from '../../../styles';
import styles from './styles';

interface Props {
	navigation: any;
}

const SearchButton: FC<Props> = props => {
	const {navigation} = props;
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				navigation.navigate('SearchScreen');
			}}>
			<Icon
				name="search"
				color={color.white[0]}
				containerStyle={styles.buttonSearchStyle}
				tvParallaxProperties={undefined}
			/>
		</TouchableWithoutFeedback>
	);
};

export default SearchButton;
