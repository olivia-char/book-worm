// import React, { Component } from 'react';
// import RadioButtons from 'react-native-radio-buttons';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableWithoutFeedback,
// } from 'react-native';
//
// export default class RadioBtn extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const options = [
//       "Option 1",
//       "Option 2"
//     ];
//     // setSelectedOption(selectedOption) => {
//     //   this.setState ({
//     //     selectedOption
//     //   });
//     // }
//     // renderOption(option, selected,onSelect, index) => {
//     //   const style = selected ? {fontWeight: 'bold'} : {};
//     // }
//       return(
//         <TouchableWithoutFeedback onPress={onSelect} key={index}>
//           <Text sytle{style}>{option}</Text>
//         </TouchableWithoutFeedback>
//       );
//     }
//     renderContainer(optionNodes) => {
//       return <View>{optionNodes}</View>;
//     }
//     return (
//       <View style={{margin: 20}}>
//       <RadioButtons
//         options={ options }
//         onSelection={ setSelectedOption.bind(this) }
//         selectedOption={this.state.selectedOption }
//         renderOption={ renderOption }
//         renderContainer={ renderContainer }
//       />
//       <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
//       </View>);
//   }
// }
