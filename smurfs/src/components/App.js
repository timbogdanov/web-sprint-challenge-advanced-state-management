import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData, postData } from '../store/actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='App'>
        <h1>Smurf Town</h1>
        <form>
          <input
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.onChange}
          />
          <input
            placeholder='Height'
            name='height'
            value={this.state.height}
            onChange={this.onChange}
          />
        </form>

        <button
          onClick={() => {
            this.props.postData(this.state);
          }}
        >
          Post new smurf
        </button>

        {this.props.isLoading && <p>Loading smurfs...</p>}
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

        {this.props.error && <p>{this.props.error}</p>}
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
