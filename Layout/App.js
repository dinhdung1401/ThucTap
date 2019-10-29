
import React, { Component } from 'react';
import { FlatList, View, Text, Alert, Image, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Styles';
export default class LayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [{ id: 0, number: 7 }],
      sumTotal: 0,
      update: true,
      txtY: 0,
    };
  }

  updateId() {
    this.removeItem = this.removeItem.bind(this);
    var newArr = this.state.arr;
    for (let i in newArr) {
      newArr[i].id = i;
    }
    this.setState(() => ({
      arr: newArr
    }));
  }
  totalSum() {
    this.render = this.render.bind(this);
    var sum = 0;
    for (let i = 0; i < this.state.arr.length; i++) {
      sum += this.state.arr[i].number;
    }
    this.setState(() => ({ sumTotal: sum, update: false }));
  }

  _onPressButtonGreen = (y) => {
    var newArr = this.state.arr;
    newArr[y].number = Number(this.state.txtY) + newArr[y].number;
    this.setState(() => ({ arr: newArr, update: true, txtY: 0 }));
    this.myTextInput.clear();
  }

  _onPressButtonBlue = (index) => {
    var newArr = this.state.arr;
    var id = newArr.length;
    var number = this.radom();
    newArr.splice(index, 0, { id: id, number: Number(number) });
    this.setState(() => ({ arr: newArr, update: true }));
  }

  radom() {
    this._onPressButtonBlue = this._onPressButtonBlue.bind(this);
    var number = Math.floor(Math.random() * 100);
    return number.toFixed();
  }

  removeItems(index) {
    this._onPressButtonRed = this._onPressButtonRed.bind(this);
    var newArr = this.state.arr;
    newArr.splice(index, 1);
    this.setState(() => ({ arr: newArr, update: true }))
  }

  _onPressButtonRed = (y) => {
    if (this.state.arr.length > 1) {
      this.removeItems(y);
    }
    else {
      Alert.alert('het phan tu de ban xoa roi');
    }
  }

  render() {
    if (this.state.update) {
      this.totalSum();
    }
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <View style={{ marginRight: 20 }}>
            <Image
              style={Styles.img}
              source={require('./image/1.jpg')}
            />
          </View>
          <View >
            <Text style={Styles.size}>Họ và Tên :</Text>
            <Text style={Styles.size}> Mssv:</Text>
          </View>
        </View>
        <View style={{ marginBottom: 10, flexDirection: 'row' }}>
          <View style={{ borderRadius: 10, borderWidth: 1, flex: 1 }}>
            <TextInput style={Styles.txtInput}
              autoFocus={true}
              placeholder="Y :"
              ref={ref => {
                this.myTextInput = ref;
              }}
              onChangeText={(txtY) => {
                this.setState({
                  txtY,
                });
              }}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Text style={{ fontSize: 35 }}>Total:</Text>
            <Text style={{ fontSize: 35 }}>{this.state.sumTotal}</Text>
          </View>
        </View>
        <View style={Styles.flatList}>
          <FlatList
            data={this.state.arr}
            renderItem={({ item, index }) => (
              <View style={Styles.items}>
                <View style={{ flex: 1 }}>
                  <Text style={Styles.size}>{item.number}</Text>
                </View>
                <View style={Styles.btn}>
                  <TouchableOpacity
                    style={Styles.btnBlue}
                    onPress={() => { this._onPressButtonBlue(index) }}
                  />
                  <TouchableOpacity
                    style={Styles.btnGreen}
                    onPress={() => { this._onPressButtonGreen(index) }}
                  />
                  <TouchableOpacity
                    style={Styles.btnRed}
                    onPress={() => { this._onPressButtonRed(index) }}
                  />
                </View>
              </View>
            )
            }
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}