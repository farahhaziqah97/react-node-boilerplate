import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div>
				<Map
					google={this.props.google}
					center={{lat: 3.1569, lng: 101.7123}}
					height='300px'
					zoom={15}
					/>
			</div>
		);
	}
}

export default Home;