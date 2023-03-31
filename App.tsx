import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, Button, StyleSheet, Text, View, Image, Pressable, Alert} from 'react-native';

const img = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={stylesFlex.container}>
        <View style={{flex: 1, backgroundColor: '#fff'}}/>
        <View style={[stylesFlex.container, stylesFlex.color]}>
          <Text style={stylesFlex.text}>Hi</Text>
          <Button
              onPress={() => {}}
              title="Learn More"
              color="#fff"
              accessibilityLabel="Learn more about this purple button"
          />
          <Image
              style={styles.img}
              source={img}
          />
          <ActivityIndicator size={'large'} color={'red'}/>
          <Pressable hitSlop={30} onPress={() => {
            Alert.alert('titile')
            }
          }>
            <Text>presss</Text>
          </Pressable>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9393ea',
  },
  img: {
    width: 50,
    height: 50
  }
});
const stylesFlex = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  color: {
    backgroundColor: '#3f3f3f'
  },
  text: {
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  }
});
