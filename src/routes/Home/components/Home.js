import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

export default class Home extends Component {

componentDidMount() {
	this.props.setName();
}

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Hello {this.props.name}</Text>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
  container: {
		flex:1,
    justifyContent: 'center',
    alignItems: 'center',
		backgroundColor: 'violet',
	},
	text: {
		fontFamily: 'Avenir',
		fontSize: 20,
		fontWeight: '500'
	}
});