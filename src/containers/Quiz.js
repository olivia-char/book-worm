import React, { Component } from 'react';
import InfoSlider from '../components/InfoSlider';

import {
  StyleSheet,
  Text,
  View,
  Picker,
  Slider,
  ScrollView,
  SegmentedControlIOS,
} from 'react-native';

const Item = Picker.Item;

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:"Java"
    }
  }
  render() {
    return(
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titlePage}>
            What Should You Read?
          </Text>
          <Text style={styles.instructions}>
            a short quiz to find your reading personality
          </Text>
          <View style={{width: 400, height: 350, backgroundColor:'steelblue'}}>
            <Text style={styles.question}>
              How many pages does your book have (on average)?
            </Text>
            <InfoSlider
              style={styles.slider}
              maximumValue={1000}
              minimumValue={1}
              step={1}
            />
          </View>
          <View style={{width: 400, height: 350, backgroundColor:'purple'}}>
            <Text style={styles.question}>
              How many books do you read a month?
            </Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}>
              <Item label="1 - 2" value="easy" />
              <Item label="2 - 3" value="medium"/>
              <Item label="3 - 4" value="hard"/>
              <Item label="5 +" value="expert"/>
            </Picker>
          </View>
          <View style={{width:400, height: 350, backgroundColor:'skyblue'}}>
            <Text style={styles.question}>
              What are your top 3 favorite reading genres?
            </Text>
            <SegmentedControlIOS
              style={{padding: 20, marginTop: 10}}
              tintColor= "purple"
              values={['Fantasy', 'Mystery', 'Romance', 'Non-Fiction']}
            />
            <SegmentedControlIOS
              style={{padding:20}}
              tintColor= "purple"
              values={['Thriller', 'Sci/Fi', 'Drama', 'Historical']}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'oldlace',
  },
  titlePage: {
    marginTop: 20,
    fontSize: 30,
    color: 'steelblue',
  },
  instructions: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  question: {
    marginTop: 30,
    fontSize: 20,
    alignSelf: 'center',
    alignItems: 'center',
    width: 300,
  },
  picker: {
    width: 200,
  },
});
