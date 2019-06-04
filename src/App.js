import React from 'react';


import {Provider} from 'react-redux'
import { createStore} from 'redux'
import combined from "./reducer";
import HomeContainer from './container/HomeContainer'


const store = createStore(combined)


function App() {
    return (
        <Provider store={store}>
            <HomeContainer/>
        </Provider>

    );
}

export default App;