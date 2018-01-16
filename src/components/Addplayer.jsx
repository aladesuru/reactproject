import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component{
  state = {
    name: " ",
  }

  nameChange = (e) => {
    this.setState ({
      name: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.add(this.state.name);
    this.setState({ name: " "});
  }

  render(){
    return (
      <div className="AddPlayerForm">
        <form>
          <input type="text" value={ this.state.name } placeholder="Enter Player"  onChange = { this.nameChange }/>
          <input type="submit" name="submit" value ="Add Player" onClick = { this.onSubmit } />
        </form>
    </div>
    );
  }
}

AddPlayer.propsTypes = {
  add: PropTypes.func.isRequired,
}

export default AddPlayer;
