import React, { Component } from 'react';

class Bio extends Component {
	render() {
            return (
		<div id="bio" class="content-wrapper">
		    <h3>About Me</h3>
		    <p id="bio-body">I am a second year numerical analysis PhD student in Cohort 2 of the <a href="https://www.aaps-cdt.ac.uk/" target="blank">Advanced Automotive Propulsion Systems Centre for Doctoral Training</a>. Under the supervision of Dr. Tristan Pryer, I am researching structure-preserving numerical methods for battery electrolyte models.{"\n\n"}I am passionate about outreach and improving accessibility to academia, and will be adding a list of useful resources I come across to this page - if you have any you wish to add, please feel free to get in contact!{"\n\n"}Outside of my studies I volunteer with the ReachSci initiative, and I release music under the name <a href="http://www.eskafell.com/" target="blank">Eskafell</a>. I also enjoy cooking, playing basketball, bouldering and generally keeping fit.{"\n\n"}My CV can be found <a href="">here</a> (coming soon).</p>
		</div>
            );
  	}
}

export default Bio;
