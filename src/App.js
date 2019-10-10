import React from 'react';
import { connect } from 'react-redux'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
 
import { buyItem } from './actions/carActions'


const App = () => {
  
  const addItem = item => {
    // dipsatch an action here to add an item
    console.log('ADD ITEM: ', item)
    buyItem(item)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={addItem}/>
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state // same as state : state
  }
}

export default connect(
  { buyItem }
)(App)