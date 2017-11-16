require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

class Post extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return (
			<div className="postWrapper">
				<Header author="Przemek" userphoto="https://www.atomix.com.au/media/2015/06/atomix_user31.png" date={this.props.postDate}/>
				<Content contentheader={this.props.postHeader} contenttext={this.props.postParagraph} contentphoto={this.props.postPhoto}/>
				<Footer/>
			</div>
		);
	}
}

export default Post;