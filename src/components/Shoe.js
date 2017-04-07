import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Shoe extends Component {
	render() {
		return(
			<div className={css(styles.shoeSection)}>
				<div className={css(styles.row)}>
					<div>
						
					</div>
					<div>
						
					</div>
					<span></span>
					<span></span>
				</div>
			</div>
		)
	}
}

const styles = StyleSheet.create ({
	shoeSection: {
		minHeight: '100vh',
		width: '100%',
		backgroundImage: "url('https://raw.githubusercontent.com/rickMcGavin/nike-test/master/src/assets/images/content-2-bg.png')",
		backgroundPosition: 'right',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundColor: '#27292B',
		padding: '0 18.5%'
	},

	row: {
		// display: 'flex',
		backgroundColor: 'skyblue',
		width: '100%'
	}
})

export default Shoe;