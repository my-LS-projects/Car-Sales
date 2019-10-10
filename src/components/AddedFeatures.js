import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions/carActions'
 
import AddedFeature from './AddedFeature';

export const AddedFeatures = props => {
  return (
    <div className="content">
      {console.log("ADDED FEATURES:" , props.car.features)}
      <h6>Added features:</h6>
      {props.car.features ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeatures)