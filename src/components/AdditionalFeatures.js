import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux'
import { buyItem } from '../actions'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {console.log("AF PROPS: ",props)}
      {props.store ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store
  }
}

export default connect(
  mapStateToProps,
  { buyItem }
)(AdditionalFeatures)

