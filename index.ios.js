/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import Goal from './components/Goal'
import { ImagePickerManager } from 'NativeModules'

const Gooooooooooooooal = React.createClass({
  getInitialState() {
    return {
      goals: [{
        name: 'Create components',
        checklist: [
          'goal component',
          'check component',
          'new goal component'
        ]
      }]
    }
  },
  showImagePicker () {
    ImagePickerManager.showImagePicker({}, (response) => {
      console.log(response)
      this.setState({uri: response.uri})
    })
  },
  render() {
    let goals = []
    for (let i = 0; i < this.state.goals.length; i++) {
      goals.push(<Goal name={this.state.goals[i].name} key={this.state.goals[i].name} />)
    }
    console.log(this.state.uri)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to GOOOOOOOOOOOOOOAL!
        </Text>
        <Image
          style={styles.image}
          source={{uri: this.state.uri}}
          />
        <TouchableHighlight onPress={this.showImagePicker}>
          <Text>Open Image Picker!</Text>
        </TouchableHighlight>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'red',
  }
});

AppRegistry.registerComponent('Gooooooooooooooal', () => Gooooooooooooooal);
