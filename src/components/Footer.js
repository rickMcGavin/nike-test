import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import logo from '../assets/images/logo.svg';

const Footer = () => {
	return (
		<div className={css(styles.footer, styles.footerXSmall)}>
			<div className={css(styles.row, styles.spaceBetween, styles.rowXSmall)}>
				<div className={css(styles.row, styles.innerRowXSmall, styles.spaceBetween)}>
					<div className={css(styles.column, styles.columnXSmall)}>
						<h5 className={css(styles.h5)}>WEB DESIGN STUDIO TUTORIALS</h5>
						<ul className={css(styles.ul)}>
							<li>Design a creative Blog</li>
							<li>Design a iPad Website</li>
							<li>Single Page sales portfolio</li>
							<li>Flat product website in Photoshop</li>
							<li>Design a creative Blog</li>
							<li>Design a iPad Website</li>
							<li>Single Page sales portfolio</li>
						</ul>
					</div>
					<div className={css(styles.column, styles.columnXSmall)}>
						<h5 className={css(styles.h5)}>STEP BY STEP WEB DESIGN TUTORIALS</h5>
						<ul className={css(styles.ul)}>
							<li>Design a creative Blog</li>
							<li>Design a iPad Website</li>
							<li>Single Page Sales portfolio</li>
							<li>Flat product website in Photoshop</li>
							<li>Design a creative Blog</li>
						</ul>
					</div>
				</div>
				<div className={css(styles.row, styles.innerRowXSmall, styles.spaceBetween)}>
					<div className={css(styles.column, styles.columnXSmall)}>
						<h5 className={css(styles.h5)}>DESIGNERS</h5>
						<ul className={css(styles.ul)}>
							<li>Blaz Robar</li>
							<li>Nick Toranto</li>
							<li>Joisp Kelava</li>
						</ul>
					</div>
					<div className={css(styles.column, styles.columnXSmallAlign, styles.columnXXSmallAlign, styles.columnXXXSmallAlign)}>
						<h5 className={css(styles.h5)}>BLAZROBAR.COM</h5>
						<ul className={css(styles.ul)}>
							<li>About</li>
							<li>Web Design Video Tutorials</li>
							<li>Sign up</li>
							<li>Sign in</li>
							<li>Contact</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={css(styles.row, styles.center)}>
				<div>
					<img className={css(styles.logo)} src={logo} alt="NIKE Logo"/>
					<p className={css(styles.p)}>Copyright NIKE 2015</p>
				</div>
			</div>
		</div>
	)
}

const styles = StyleSheet.create({
	footer: {
		minHeight: '50vh',
		backgroundColor: '#FFFEFF',
		padding: '50px 15.8% 0 15.8%',
	},

	footerXSmall: {
		'@media (max-width: 800px)': {
			padding: '7.9%'
		}
	},

	row: {
		display: 'flex',
	},

	rowXSmall: {
		'@media (max-width: 500px)': {
			flexWrap: 'wrap'
		}
	},

	innerRowXSmall: {
		'@media (max-width: 500px)': {
			width: '100%',
			marginTop: '15px'
		}
	},

	spaceBetween: {
		justifyContent: 'space-between'
	},

	center: {
		justifyContent: 'center'
	},

	h5: {
		fontSize: '0.5625rem',
		color: '#7D7D88',
		marginBottom: '0'
	},

	column: {
		marginRight: '35px'
	},

	columnXSmall: {
		'@media (max-width: 500px)': {
			marginRight: '15px'
		}
	},

	columnXSmallAlign: {
		'@media (max-width: 500px)': {
			marginRight: '14%'
		}
	},

	columnXXSmallAlign: {
		'@media (max-width: 400px)': {
			marginRight: '8%'
		}
	},

	columnXXXSmallAlign: {
		'@media (max-width: 350px)': {
			marginRight: '0'
		}
	},

	ul: {
		color: '#7D7D88',
		listStyle: 'none',
		padding: '0',
		fontSize: '0.6875rem',
		lineHeight: '2',
	},

	logo: {
		transform: 'scale(0.39)',
		marginTop: '15px'
	},

	p: {
		margin: '-10px 0 10px 0',
		textAlign: 'center',
		fontSize: '0.5625rem'
	}

});

// #BABFC2' 70px between logo and bottom

export default Footer;