require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class Footer extends React.Component {
	
	render(){
		return (
			<div className="footer-wrapper">
				<div className="likes">Likes {this.props.likes}</div>
				<div className="comments">Comments {this.props.comments}</div>
				<div className="sharings">Sharings {this.props.sharings}</div>
			</div>
		);
	}
}

export default Footer;
