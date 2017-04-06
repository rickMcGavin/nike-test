import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/images/logo.svg';



const Navbar = () => {
	return (
		<nav className={css(styles.nav)}>
			<span className={css(styles.brandSpan)}>
				<img className={css(styles.logo)} src={logo} alt="Nike Logo"/>
			</span>
			<ul className={css(styles.navLinks)}>
				<li >
					<a className={css(styles.navLink, styles.hover)} href="#">ABOUT</a>
				</li>
				<li>
					<a className={css(styles.navLink, styles.hover)} href="#">SERVICES</a>
				</li>
				<li >
					<a className={css(styles.navLink, styles.hover)} href="#">INVOLVEMENT</a>
				</li>
			</ul>
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
		backgroundColor: '#ADD965',
		width: '24.6%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center'
	},

	logo: {
		transform: 'scale(0.65)'
	},

	navLinks: {
		listStyle: 'none',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		margin: '0',
		marginLeft: '12.5%'
	},

	navLink: {
		color: '#FEFFFF',
		display: 'inline-block',
		marginRight: '15px',
		fontSize: '.75rem',
		textDecoration: 'none'
	},

	hover: {
		':hover': {
			borderBottom: '1px solid #FEFFFF'
		}
	}
});

export default Navbar;

// navbar height 70 px
// brand 24.6% of the width