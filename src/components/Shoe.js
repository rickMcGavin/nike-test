import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Shoe extends Component {
	render() {
		return(
			<div className={css(styles.shoeSection)}>
				<div className={css(styles.row)}>
					<div className={css(styles.smallColumn)}>
						<h6 className={css(styles.noMargin)}>NIKE</h6>
						<h5 className={css(styles.noMargin)}>SUPERFLY FG</h5>
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
		padding: '120px 18.5% 0 18.5%'
	},

	row: {
		display: 'flex',
		width: '100%'
	},

	smallColumn: {
		width: '16.5%',
		color: '#f2f2f2'
	},

	noMargin: {
		margin: '0'
	}
})

// column width 16.5%

export default Shoe;