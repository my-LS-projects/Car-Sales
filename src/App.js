import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { carReducer } from './reducers/carReducer'
import { connect } from 'react-redux'

// actions
import { buyItem, removeFeature } from './actions/carActions'

const App = ({ state, buyItem , removeFeature }) => { // if you never add your function here, you will never use the one connected to redux, only vanilla javascript

  const removeItem = item => {
    // dispatch an action here to remove an item
    removeFeature(item)
  };

  const addItem = item => {
    // dipsatch an action here to add an item
    buyItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeItem={removeItem}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addItem={addItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(
  mapStateToProps,
  { buyItem , removeFeature }
)(App)