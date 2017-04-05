import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/images/logo.svg';



const Navbar = () => {
	return (
		<nav className={css(styles.nav)}>
			<span className={css(styles.brandSpan)}>
				<img className={css(styles.logo)} src={logo} alt="Nike Logo"/>
			</span>
		</nav>
	)
}

const styles = StyleSheet.create ({

	nav: {
		width: '100%',
		height: '70px',
		backgroundColor: '#28292B',
		display: 'flex'
	},

	brandSpan: {
		backgroundColor: '#97C64B',
		width: '24.6%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center'
	},

	logo: {
		transform: 'scale(0.65)'
	}
});

export default Navbar;

// navbar height 70 px
// brand 24.6% of the width