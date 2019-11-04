import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Body1 from './Body1';
import Body2 from './Body2';
import style2 from './Style2';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style2.container}>
        <View style={{ flex: 1, borderWidth: 2, borderRadius: 10, backgroundColor: '#FBF2EF',}}>
          <Header />
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20,}}>
            <Body1 />
            <Body2 />
          </View>
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    myNumber1: state.number1,
    myNumber2: state.number2,
    myNumber3: state.number3,
  };
}
export default connect(mapStateToProps)(App);