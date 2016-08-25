// import React, { Component } from 'react';
//
// import {
//   StyleSheet,
//   Text,
//   View,
//   Picker,
//   TouchableWithoutFeedback,
// } from 'react-native';
//
// export default class DataPicker extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//       return (
//         <Picker
//           style={styles.picker}
//           selectedValue={this.state.selected1}
//           onValueChange={this.onValueChange.bind(this, 'selected1')}>
//           <Item label="hello" value="key0" />
//           <Item label="world" value="key1" />
//         </Picker>
//       );
//     },
//
//     changeMode() => {
//       const newMode = this.state.mode === Picker.MODE_DIALOG
//           ? Picker.MODE_DROPDOWN
//           : Picker.MODE_DIALOG;
//       this.setState({mode: newMode});
//     },
//
//     onValueChange(key: string, value: string) => {
//       const newState = {};
//       newState[key] = value;
//       this.setState(newState);
//     },
//   });
//
//   const styles = StyleSheet.create({
//     picker: {
//       width: 100,
//     },
//   });
