import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Shoe extends Component {
	render() {
		return(
			<div className={css(styles.shoeSection)}>

			</div>
		)
	}
}

const styles = StyleSheet.create ({
	shoeSection: {
		minHeight: '100vh',
		width: '100%',
		backgroundImage: "url('https://raw.githubusercontent.com/rickMcGavin/nike-test/master/src/assets/images/content-2-bg.png')",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: '#27292B'
	}
})

export default Shoe;