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
	constructor(props) {
		super(props);

		this.state = {
			leftView: true,
			rightView: false,
			bottomView: false
		};
	}

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
						<div className={css(styles.circleContainer)}>
							<img className={css(styles.shoeImage)} src={leftView} alt="Nike Mercurial Superfly FG Left View Big"/>
							<div className={css(styles.spanContainer)}>
								<span className={css(styles.span)}></span>
								<span className={css(styles.span)}></span>
							</div>
						</div>
					</div>
				</div>
				<div className={css(styles.row)}>
					<div className={css(styles.contentColumn)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>BLANDIT </h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>TINCIDUNT METUS</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
					<div className={css(styles.contentColumn)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>METUS</h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>PELLENTESQUE</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
					<div className={css(styles.contentColumn)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>BLANDIT</h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>TINCIDUNT METUS</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
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
		backgroundSize: 'cover',
		backgroundColor: '#27292B',
		padding: '120px 18.5% 75px 18.5%'
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
		textAlign: 'center'
	},

	circleContainer: {
		backgroundImage: "url('https://raw.githubusercontent.com/rickMcGavin/nike-test/master/src/assets/images/circle-bg.png')",
		backgroundRepeat: 'no-repeat',
		backgroundSize: '475px',
		backgroundPosition: 'top',
	},

	shoeImage: {
		transform: 'scale(0.6)',
		position: 'relative',
		zIndex: '1',
		top: '-50px',
		left: '-20%'
	},

	spanContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		top: '-105px'
	},

	span: {
		width: '33px',
		height: '3px',
		marginRight: '3px',
		backgroundColor: '#FEFFFF'
	},

	contentColumn: {
		width: '33%',
		marginRight: '10px',
		paddingRight: '5px'
	},

	h3: {
		color: '#FEFFFF',
		fontWeight: '400'
	},

	h3MarginTopAdjust: {
		marginTop: '2px'
	},

	h3MarginBottomAdjust: {
		marginBottom: '2px'
	},

	p: {
		color: '#778899',
		fontSize: '0.625rem',
		lineHeight: '2'
	}


})

// column width 16.5%

export default Shoe;