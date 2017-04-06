import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const ShoeContent = () => {
	return (
		<div className={css(styles.shoeContentSection)}>
			<h4 className={css(styles.h4)}>DOWNLOAD & WATCH ALL TUTORIALS ON YOUR DEVICE</h4>
			<h4 className={css(styles.h4)}>DESKTOP COMPUTER, IPHONE, IPAD OR APPLE DEVICE</h4>
			<p className={css(styles.p)}>Sed facilisis quis sapien et facilisis. Maecenas rutrum augue ut nisl hendrerit facilisis. Donec sagittis sit amet odio id adipiscing. Fusce porttitor fermentum nibh. Aenean malesuada velit lectus, vel ullamcorper et.</p>
			<p className={css(styles.p)}>Proin et tortor at justo vulputate tincidunt sed justo. Vivamus scelerisque arcu at pretium pellentesque.</p>
			<a className={css(styles.a)}href="#">JOIN</a>
		</div>
	)
}

const styles = StyleSheet.create ({
	shoeContentSection: {
		padding: '0 15.8%',
		minHeight: '45vh',
		backgroundColor: '#ADD965',
		paddingTop: '25px',
		color: '#FEFFFF'
	},

	h4: {
		fontSize: '0.875rem',
	},

	p: {
		fontSize: '0.625rem',
		fontWeight: '400'
	},

	a: {
		color: '#ADD965',
		backgroundColor: '#FEFFFF',
		padding: '10px 46px',
		borderRadius: '5px',
		fontSize: '0.75rem',
		textDecoration: 'none'
	}
});

export default ShoeContent;

// 15.8% margin/padding