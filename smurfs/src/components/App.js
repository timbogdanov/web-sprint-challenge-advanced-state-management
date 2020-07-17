import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData, postData } from '../store/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.smurfData !== prevProps.smurfData) {
      this.props.fetchData();
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Smurf Town</h1>
        {this.props.smurfData &&
          this.props.smurfData.map((smurf) => (
            <div className='smurf' key={smurf.id}>
              <span>
                <b>Name: </b>
                {smurf.name}
              </span>
              <span>
                <b>Age: </b>
                {smurf.age}
              </span>
              <span>
                <b>Height: </b>
                {smurf.height}
              </span>
            </div>
          ))}

        <button
          onClick={() => {
            this.props.postData();
          }}
        >
          Post new smurf
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfData: state.smurfData,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData, postData })(App);
