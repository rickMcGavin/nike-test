import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import smallLeftView from '../assets/images/left-view.png';
import smallRightView from '../assets/images/right-view.png';
import smallBottomView from '../assets/images/bottom-view.png';
import circle from '../assets/images/circle-bg.png';
import leftView from '../assets/images/big-left.png';
import rightView from '../assets/images/big-right.png';
import bottomView from '../assets/images/big-bottom.png';

class Shoe extends Component {
	render() {
		return(
			<div className={css(styles.shoeSection)}>
				<div className={css(styles.row)}>
					<div className={css(styles.smallColumn)}>
						<h6 className={css(styles.noMargin)}>NIKE</h6>
						<h5 className={css(styles.noMargin)}>SUPERFLY FG</h5>
						<div className={css(styles.imageContainer, styles.border)}>
							<img className={css(styles.image)} src={smallLeftView} alt="Nike Mercurial Superfly FG Left View"/>
						</div>
						<div className={css(styles.imageContainer)}>
							<img className={css(styles.image)} src={smallRightView} alt="Nike Mercurial Superfly FG Right View"/>
						</div>
						<div className={css(styles.imageContainer)}>
							<img className={css(styles.image)} src={smallBottomView} alt="Nike Mercurial Superfly FG Bottom View"/>
						</div>
					</div>
					<div className={css(styles.bigColumn)}>
						<img className={css(styles.circleImage)} src={circle} alt="Green Circle Background"/>
						<img className={css(styles.shoeImage)} src={leftView} alt="Nike Mercurial Superfly FG Left View Big"/>
						<div className={css(styles.spanContainer)}>
							<span className={css(styles.span)}></span>
							<span className={css(styles.span)}></span>
						</div>
					</div>
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
	},

	imageContainer: {
		height: '60px',
		width: '95px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '30px',
		cursor: 'pointer'
	},

	border: {
		border: 'solid 1px #ADD965',
	},

	image: {
		transform: 'scale(0.75)'
	},

	bigColumn: {
		width: '83.5%',
		maxHeight: '673.344px',
		textAlign: 'center'
	},

	minWidth: {
		width: 'fit-content'
	},

	circleImage: {
		transform: 'scale(0.8)',
		position: 'absolute'

	},

	shoeImage: {
		transform: 'scale(0.6)',
		position: 'relative',
		zIndex: '1',
		top: '5%',
		right: '25%'
	},

	spanContainer: {
		display: 'flex',
		justifyContent: 'center',
		paddingRight: '5%'
	},

	span: {
		width: '33px',
		height: '3px',
		marginRight: '3px',
		backgroundColor: '#FEFFFF'
	}


})

// column width 16.5%

export default Shoe;