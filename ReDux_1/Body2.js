import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import style2 from './Style2';
import { connect } from 'react-redux';

class Body2 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style2.body}>
                    <View style={style2.inBody}>
                        <View style={style2.aroundBtn}>
                            <TouchableOpacity style={style2.btnBody1}
                                onPress={() => { this.props.dispatch({ type: 'Up_body2_left' }) }}
                            />
                            <TouchableOpacity style={style2.btnBody2}
                                onPress={() => { this.props.dispatch({ type: 'Up_body2_right' }) }}
                            />
                        </View>
                        <View style={style2.txtBody}>
                            <Text style={{ fontSize: 40 }}>{this.props.myNumber3}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        myNumber3: state.number3,
    };
}
export default connect(mapStateToProps)(Body2);