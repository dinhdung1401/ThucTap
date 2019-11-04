/**
 * @format
 */
import React, {Component} from 'react' ;
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    number1: 0,
    number2: 0,
    number3: 0,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'Up_Total':
            return {
                number1: state.number1 + 1,
                number2: state.number2 + 1,
                number3: state.number3 + 1,
            }
        case 'Up_body1_left':
            return {
                ...state,
                number2: state.number2 + 1,
            }
        case 'Up_body1_right':
            return {
                ...state,
                number3: state.number3 + 1,
            }
        case 'Up_body2_left':
            return {
                ...state,
                number2: state.number2 + 1,

            }
        case 'Up_body2_right':
            return {
                ...state,
                number3: state.number3 + 1,
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default class Redux extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => Redux);
