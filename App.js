import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';

import TextNumber from 'react-native-num-textinput'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value1: null,
      value2: null,
      operator: null,
      result: 0
    }

  }

  result = () => {

    const s = this.state.value1 + " " + this.state.operator + " " + this.state.value2

    this.setState({
      result: eval(s)
    })

  }

  cancel = () => {

    this.setState({
      value1: null,
      value2: null,
      operator: null,
      result: 0
    })

  }


  render() {
    return (
      <View style={styles.container}>

        <View>
          <Text>{JSON.stringify(this.state)}</Text>
        </View>


        <View>
          <Text>Inserisci 2 numeri e seleziona un operatore matematico</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>

          <TextNumber style={{ padding: 20, width: 100 }} value={this.state.value1} placeholder="valore 1..." onChangeText={(value1) => this.setState({ value1 })} />


          <Picker
            mode="dialog"
            style={{ width: 100 }}
            selectedValue={this.state.operator}
            onValueChange={(itemValue, itemIndex) => this.setState({ operator: itemValue })}>
            <Picker.Item label="operatore" value="" />
            <Picker.Item label="+" value="+" />
            <Picker.Item label="-" value="-" />
            <Picker.Item label="*" value="*" />
            <Picker.Item label="/" value="/" />
          </Picker>

          <TextNumber style={{ padding: 20, width: 100 }} value={this.state.value2} placeholder="valore 2..." onChangeText={(value2) => this.setState({ value2 })} />


        </View>


        <View style={{ flexDirection: 'row' }}>


          <Button
            disabled={!(this.state.value1 != null && this.state.value2 != null && this.state.operator != null)}
            onPress={this.result}
            title="="></Button>
          <Button onPress={this.cancel} title="C"></Button>


        </View>


        <Text>Result is {this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
