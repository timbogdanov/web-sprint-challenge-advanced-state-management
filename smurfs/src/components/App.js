import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData, postData } from '../store/actions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      ageValue: '',
      heightValue: '',
    };
  }

  componentDidMount() {
    this.props.fetchData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.smurfData !== prevProps.smurfData) {
  //     this.props.fetchData();
  //   }
  // }

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
            name='nameValue'
            value={this.state.nameValue}
            onChange={this.onChange}
          />
          <input
            placeholder='Age'
            name='ageValue'
            value={this.state.ageValue}
            onChange={this.onChange}
          />
          <input
            placeholder='Height'
            name='heightValue'
            value={this.state.heightValue}
            onChange={this.onChange}
          />
        </form>

        <button
          onClick={() => {
            this.props.postData(
              this.state.nameValue,
              this.state.ageValue,
              this.state.heightValue
            );
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
