import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Stopwatch extends Component
{
	state ={
			running : false,
			elapseTime : 0,
			previousTime : 0
		}

		componentDidMount = () => {
			this.interval = setInterval(() => this.onTick() , 100);
		}

		componentWillUnmount = () => {
			clearInterval(this.interval);
		}


		onStart = () => {
			let date = Date.now();
			this.setState({
				running : true,
				previousTime : date
			}) ;
		}

		onStop = () => {
			this.setState({
				running : false
			});
		}

			onReset = () => {
				let date = Date.now();
			this.setState({
				elapseTime : 0,
				previousTime : date
			});
		}

		onTick = () => {
			let date = Date.now();
			if (this.state.running) {
					this.setState({
						elapseTime : this.state.elapseTime + (date - this.state.previousTime),
						previousTime : date
					});
			}
		}

	render(){

		if (this.state.running) {
			this.stopWatchBtn = <button className="stop-btn" onClick ={this.onStop}>STOP</button>
		} else {
			this.stopWatchBtn = <button className="stop-btn" onClick ={this.onStart}>START</button>
		}

		let second = Math.floor(this.state.elapseTime / 1000);

		return(
			<div className="stopwatch">
          <p>STOPWATCH</p>
          <p><span>{second}</span></p>
           {this.stopWatchBtn}
          <button className="reset-btn" onClick={this.onReset}>RESET</button>
      </div>
			);
	}
}

Stopwatch.propTypes = {
	running : PropTypes.string,
	elapseTime : PropTypes.number,
	previousTime : PropTypes.number
}


export default Stopwatch;