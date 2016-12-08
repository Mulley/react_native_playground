/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

class Dog_Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : ' ';
    let terrier_picture = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Terrier_mixed-breed_dog.jpg/220px-Terrier_mixed-breed_dog.jpg'
    };
    return (
      <View style={styles.component_containter}>
        <Text>{display}</Text>
        <Image source={terrier_picture} style={{width: 100, height: 100}} />
      </View>
    )
  }
}

class Dog_Saying extends Component{
  render(){
     let terrier_picture = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Terrier_mixed-breed_dog.jpg/220px-Terrier_mixed-breed_dog.jpg'
    };
    return (
      <View style={styles.component_containter}>
        <Text>{this.props.saying}!</Text>
        <Image source={terrier_picture} style={{width: 100, height: 100}} />
      </View>
    );
  }
}

export default class test_init extends Component {
  constructor(props){
    super(props);
    this.state={text_from_input: ' '};
  }
  render() {
    return (
      <View style={styles.component_containter}>
        <TextInput 
          style={{height: 50, width: 250}}
          placeholder="rofl"
          onChangeText={(text_from_input) => this.setState({text_from_input})}
        />
        <View style={styles.container}>
          <Dog_Blink text={this.state.text_from_input}/>
          <Dog_Saying saying='Elizabeth'/>
          <Dog_Saying saying='Bark'/>
        </View>
        <View style={styles.container}>
          <Dog_Saying saying='Cecilia'/>
          <Dog_Blink text={this.state.text_from_input}/>
          <Dog_Saying saying='Bark'/>
        </View>
        <View style={styles.container}>
          <Dog_Saying saying='Brian'/>
          <Dog_Saying saying='Bark'/>
          <Dog_Blink text={this.state.text_from_input}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666666',
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
  component_containter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888888',
  },
});

AppRegistry.registerComponent('test_init', () => test_init);
