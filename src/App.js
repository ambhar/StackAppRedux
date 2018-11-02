import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { Header } from './components/common'

const App = () => {
    return (
        //provider can only have one child
        <Provider store={createStore(reducers)}> 
            <View>
                <Header headerText="Book Wishlst" />
            </View>
        </Provider>
    );
};

export default App ;