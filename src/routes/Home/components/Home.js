import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Container } from 'native-base'

import MapContainer from './MapContainer'

export default class Home extends Component {

	componentDidMount() {
		this.props.setName();
	}

	render() {
		const region = {
			latitude: 21.027763,
			longitude: 105.834160,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		}

		return(
			<Container style={styles.container}>
				<MapContainer region={region}/>
			</Container>
			
		);
	}
}

const styles = StyleSheet.create({
  container: {
		flex:1,
    justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'Avenir',
		fontSize: 20,
		fontWeight: '500'
	}
});