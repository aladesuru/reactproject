import React from 'react';

const About = () => {
	return(
		<div className="about">
			<h2> About Application</h2>
			<p>
				Score Application is use to track total number of player, total number of point , able to add new player.<br />
				Also has a stopwatch to take turns. Player can be deleted by clicking cross button before the individual player.<br />
				You can also add a player by typing player's name in the textbox and click on add-player button to add player to list.
			</p>
			<p>
				Player's score can be increase by clicking the PLUS button, and MINUS button to reduced player's score
			</p>
			<p>
				You can interact with  stopwatch functionality by clicking START button to start and STOP button to pause , also
				RESET button to refresh the stopwatch. 
			</p>
		</div>
		);
}

export default About;