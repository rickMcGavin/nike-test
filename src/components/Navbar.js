import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from '../assets/images/logo.svg';



class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {iconClicked: false};
	}

	handleIconClick() {
		this.state.iconClicked ? this.setState({iconClicked: false}) : this.setState({iconClicked: true});
	}


	render() {
		return(
			<nav className={this.state.iconClicked ? 
				css(styles.nav, styles.extendNav)
				:
				css(styles.nav)}>
				<span className={css(styles.brandSpan)}>
					<img className={css(styles.logo, styles.smallLogo)} src={logo} alt="Nike Logo"/>
				</span>
				<ul className={this.state.iconClicked ? 
					css(styles.navLinks, styles.smallNavLinks)
					:
					css(styles.navLinks, styles.noDisplay)}>
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
				<div className={css(styles.row)}>
					<div onClick={() => this.handleIconClick()} 
							 className={css(styles.hamburgerMedium, styles.hamburgerSmall)}>
						<div className={this.state.iconClicked ? 
							css(styles.menuLine, styles.menuLineOne) 
							: 
							css(styles.menuLine)}></div>
						<div className={this.state.iconClicked ? 
							css(styles.menuLineTwo) 
							: 
							css(styles.menuLine)}></div>
						<div className={this.state.iconClicked ? 
							css(styles.menuLine, styles.menuLineThree) 
							: 
							css(styles.menuLine)}></div>
					</div>
				</div>
			</nav>
		)
	}
}

const styles = StyleSheet.create ({

	nav: {
		width: '100%',
		height: '70px',
		backgroundColor: '#28292B',
		display: 'flex',
		transition: 'height 0.1s ease-in-out'
	},

	extendNav: {
		height: '170px'
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

	smallLogo: {
	
		'@media (max-width: 580px)': {
			transform: 'scale(0.5)'
		},	

		'@media (max-width: 375px)': {
			transform: 'scale(0.39)'
		}
	},

	navLinks: {
		listStyle: 'none',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		margin: '0',
		marginLeft: '12.5%',
	},

	smallNavLinks: {
		'@media (max-width: 500px)': {
			flexDirection: 'column',
			minHeight: '100%',
			marginTop: '5%',
			lineHeight: '2.5',
			transition: 'all 0.3s ease-out'
		}
	},

	noDisplay: {
		'@media (max-width: 500px)': {
			transform: 'translateY(-100%)',
			opacity: '0',
			flexDirection: 'column'
		}
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
	},

	row: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		paddingRight: '20px',
		paddingTop: '19px',
		width: '100%'
	},

	hamburgerMedium: {
		display: 'none'
	},

	hamburgerSmall: {
	'@media (max-width: 500px)': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			width: '30px',
			height: '30px',
		}
	},

	menuLine: {
		'@media (max-width: 500px)': {
			width: '28px',
			height: '3px',
			backgroundColor: '#FEFFFF',
			transition: 'all 0.3s ease-out'
		}
	},

	menuLineOne: {
		'@media (max-width: 500px)': {
			transformOrigin: '0 0',
			transform: 'rotate(45deg)',
			backgroundColor: '#ADD965',
		}
	},

	menuLineTwo: {
		'@media (max-width: 500px)': {
			transform: 'scaleX(0)',
			opacity: '0',
		}
	},

	menuLineThree: {
		'@media (max-width: 500px)': {
			transformOrigin: '0 100%',
			transform: 'rotate(-45deg)',
			backgroundColor: '#ADD965',
		}
	},
});

export default Navbar;