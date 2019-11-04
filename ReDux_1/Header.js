import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import style2 from './Style2';
import { connect } from 'react-redux';
class Header extends Component {
    render() {
        return (
            <View style={style2.header}>
                <View style={style2.leftHeader}>
                    <TouchableOpacity
                        style={style2.btnHeader}
                        onPress={() => { this.props.dispatch({ type: 'Up_Total' }) }}
                    />
                </View>
                <Text style={style2.txtHeader}>{this.props.myNumber1} </Text>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        myNumber1: state.number1,
    };
}
export default connect(mapStateToProps)(Header);