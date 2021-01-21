import React from "react";

export default class PokeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { surprise: false };
  }

  render() {
    return (
      <div>
        <img
          src={this.props.sprites.front_default}
          onMouseOver={(e) => {
            e.currentTarget.src = this.props.sprites.front_shiny;
            this.setState({ surprise: true });
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = this.props.sprites.front_default;
          }}
          onClick={() => {
            window.location.href = this.props.video;
          }}
          alt=""
        />
        {this.state.surprise ? <h1>It is {this.props.name}.</h1> : null}
      </div>
    );
  }
}
