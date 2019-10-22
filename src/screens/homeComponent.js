import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';

const HomeScreen = props => {
	return (
		<React.Fragment>
		<Text>You are at Home</Text>
		<Button title="Go to Jane's profile" onPress={() => props.navigation.navigate('Component')} />
		</React.Fragment>
	)
};

export default HomeScreen;
