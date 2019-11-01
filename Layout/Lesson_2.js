import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import style2 from './Style2';

export class Header extends Component {
    render() {
        return (
            <View style={style2.header}>
                <View style={style2.leftHeader}>
                    <TouchableOpacity
                        style={style2.btnHeader}
                        onPress={() => { this.props.onClickAddHeader() }}
                    />
                </View>
                <Text style={style2.txtHeader}> {this.props.data.number1} </Text>
            </View>
        )
    }
}

export class Body1 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style2.body}>
                    <View style={style2.inBody}>
                        <View style={style2.aroundBtn}>
                            <TouchableOpacity style={style2.btnBody1}
                            onPress={() => { this.props.onClickAddBody1() }}
                            />
                            <TouchableOpacity style={style2.btnBody2}
                                onPress={() => { this.props.onClickAddBody2() }}
                            />
                        </View>
                        <View style={style2.txtBody}>
                            <Text style={{ fontSize: 40 }}>{this.props.data.number2}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
export class Body2 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style2.body}>
                    <View style={style2.inBody}>
                        <View style={ style2.aroundBtn }>
                            <TouchableOpacity style={style2.btnBody1}
                                onPress={() => { this.props.onClickAddBody2() }}
                            />
                            <TouchableOpacity style={style2.btnBody2}
                                onPress={() => { this.props.onClickAddBody1() }}
                            />
                        </View>
                        <View style={style2.txtBody}>
                            <Text style={{ fontSize: 40 }}>{this.props.data.number3}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


export default class Lesson_2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 2,
            number2: 3,
            number3: 4,
        }
    }
    onClickAddHeader = () => {
        let a=this.state.number1 + 1;
        let b=this.state.number2 + 1;
        let c=this.state.number3 + 1 ;   
        this.setState({
            number1: a,
            number2 :b ,
            number3 :c ,        })
     }
     onClickAddBody1=()=> {
         let b = this.state.number2 + 1;  
         this.setState({number2:b})
     }
    onClickAddBody2=()=>{
        let c=this.state.number3 +1 ;
        this.setState({ number3: c })
    }
    render() {
        return (
            <View style={style2.container}>
                <Header data={this.state} onClickAddHeader={this.onClickAddHeader} />
                <View style={{flex:1,flexDirection:'row'}}>
                    <Body1 data={this.state} onClickAddBody1={this.onClickAddBody1} onClickAddBody2 ={this.onClickAddBody2}/>
                    <Body2 data={this.state} onClickAddBody1={this.onClickAddBody1} onClickAddBody2={this.onClickAddBody2 }/>
                </View>
            </View>
        )
    }
}
