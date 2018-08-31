import { StyleSheet, Dimensions } from 'react-native'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: Dimensions.get('window').width,  
    height: 667 
  }
}

export default styles