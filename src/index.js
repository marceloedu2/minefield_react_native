
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import params from './params'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciando Mines!</Text>
        <Text style={styles.instuctions}>
          Tamanho da grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alingItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
