import React, { Component } from 'react';

class DiceGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      face: null,
      nbEssais: 0,
      finJeu: false,
    };
  }

  handleClick = () => {
    let valAlea = Math.floor(Math.random() * 6 + 1);
    this.setState({
      face: valAlea,
      nbEssais: this.state.nbEssais + 1,
    });
    if (valAlea === this.props.faceGagnate) {
      this.setState({
        finJeu: true,
      });
    }
  };

  handleInit = () => {
    this.setState({
      face: null,
      nbEssais: 0,
      finJeu: false,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <img width={100} src="images/init.png" alt="Init" />
        <h1>Dice Game</h1>
        <h2>Face: {this.state.face}</h2>
        <img
          width={100}
          src={
            this.state.face === null
              ? `images/roll.jpg`
              : `images/face${this.state.face}.png`
          }
          alt={`Face ${this.state.face}`}
        />
        <h2>Number of tries: {this.state.nbEssais}</h2>
        {this.state.finJeu ? (
          <div>
            <h2>Congratulations! You won...</h2>
            <button
              className="btn btn-primary"
              onClick={this.handleInit}
            >
              Reset
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Play
          </button>
        )}
      </div>
    );
  }
}

export default DiceGame;
