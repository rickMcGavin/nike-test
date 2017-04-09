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
							<li><a className={css(styles.a, styles.hover)} href="#">Design a creative Blog</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Design a iPad Website</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Single Page sales portfolio</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Flat product website in Photoshop</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Design a creative Blog</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Design a iPad Website</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Single Page sales portfolio</a></li>
						</ul>
					</div>
					<div className={css(styles.column, styles.columnXSmall)}>
						<h5 className={css(styles.h5)}>STEP BY STEP WEB DESIGN TUTORIALS</h5>
						<ul className={css(styles.ul)}>
							<li><a className={css(styles.a, styles.hover)} href="#">Design a creative Blog</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Design a iPad Website</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Single Page Sales portfolio</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Flat product website in Photoshop</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Design a creative Blog</a></li>
						</ul>
					</div>
				</div>
				<div className={css(styles.row, styles.innerRowXSmall, styles.spaceBetween)}>
					<div className={css(styles.column, styles.columnXSmall)}>
						<h5 className={css(styles.h5)}>DESIGNERS</h5>
						<ul className={css(styles.ul)}>
							<li><a className={css(styles.a, styles.hover)} href="#">Blaz Robar</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Nick Toranto</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Joisp Kelava</a></li>
						</ul>
					</div>
					<div className={css(styles.column, styles.columnXSmallAlign, styles.columnXXSmallAlign, styles.columnXXXSmallAlign)}>
						<h5 className={css(styles.h5)}>BLAZROBAR.COM</h5>
						<ul className={css(styles.ul)}>
							<li><a className={css(styles.a, styles.hover)} href="#">About</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Web Design Video Tutorials</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Sign up</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Sign in</a></li>
							<li><a className={css(styles.a, styles.hover)} href="#">Contact</a></li>
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
	},

	a: {
		textDecoration: 'none',
		color: '#7D7D88'
	},

	hover: {
		':hover': {
			borderBottom: '1px solid #7D7D88'
		}
	}

});

// #BABFC2' 70px between logo and bottom

export default Footer;