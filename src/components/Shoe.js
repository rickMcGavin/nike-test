import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
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

	renderLeftView() {
		this.setState({leftView: true})
		this.setState({rightView: false})
		this.setState({bottomView: false})
	}

	renderRightView() {
		this.setState({leftView: false})
		this.setState({rightView: true})
		this.setState({bottomView: false})
	}	

	renderBottomView() {
		this.setState({leftView: false})
		this.setState({rightView: false})
		this.setState({bottomView: true})
	}

	render() {
		return(
			<div className={css(styles.shoeSection, styles.shoeSectionSmall, styles.shoeSectionXSmall, styles.shoeSectionXXXSmall)}>
				<div className={css(styles.mobileHeader, styles.mobileHeaderXSmall)}>
					<h6 className={css(styles.noMargin, styles.header)}>NIKE</h6>
					<h5 className={css(styles.noMargin, styles.header)}>SUPERFLY FG</h5>
					</div>
				<div className={css(styles.row, styles.rowToColXSmall)}>
					<div className={css(styles.smallColumn, styles.smallColXSmall)}>
							<h6 className={css(styles.noMargin, styles.header, styles.noHeaderOnSmall)}>NIKE</h6>
							<h5 className={css(styles.noMargin, styles.header, styles.noHeaderOnSmall)}>SUPERFLY FG</h5>
						<div className={this.state.leftView ? css(styles.imageContainer, styles.imageContainerXSmall, styles.imageContainerXXXSmall, styles.border) : css(styles.imageContainer, styles.imageContainerXSmall, styles.imageContainerXXXSmall)}
								 onClick={() => this.renderLeftView()}>
							<img className={css(styles.image)} src={smallLeftView} alt="Nike Mercurial Superfly FG Left View"/>
						</div>
						<div className={this.state.rightView ? css(styles.imageContainer, styles.imageContainerXSmall, styles.imageContainerXXXSmall, styles.border) : css(styles.imageContainer, styles.imageContainerXSmall, styles.imageContainerXXXSmall)}
								 onClick={() => this.renderRightView()}>
							<img className={css(styles.image)} src={smallRightView} alt="Nike Mercurial Superfly FG Right View"/>
						</div>
						<div className={this.state.bottomView ? css(styles.imageContainer, styles.imageContainerXSmall, styles.imageContainerXXXSmall, styles.border) : css(styles.imageContainer, styles.imageContainerXSmall, styles.imageContainerXXXSmall)}
								 onClick={() => this.renderBottomView()}>
							<img className={css(styles.image)} src={smallBottomView} alt="Nike Mercurial Superfly FG Bottom View"/>
						</div>
					</div>
					<div className={css(styles.bigColumn, styles.bigColumnXSmall)}>
						<div className={css(styles.circleContainer, styles.circleContainerSmall, styles.circleContainerXSmall, styles.circleContainerXXXSmall)}>
						{(() => {
							if (this.state.leftView){
								return <div>
								<img className={css(styles.leftShoeImage, styles.leftShoeImageSmall, styles.leftShoeImageXSmall, styles.leftShoeImageXXSmall, styles.leftShoeImageXXXSmall)} src={leftView} alt="Nike Mercurial Superfly FG Left View Big"/>
									<div className={css(styles.leftViewSpanContainer, styles.leftViewSpanContainerXSmall)}>
										<span className={css(styles.span)}></span>
										<span className={css(styles.span)}></span>
									</div>
								</div>
								} else if (this.state.rightView) {
									return <div>
										<img className={css(styles.rightShoeImage, styles.rightShoeImageSmall, styles.rightShoeImageXSmall, styles.rightShoeImageXXSmall, styles.rightShoeImageXXXSmall)} src={rightView} alt="Nike Mercurial Superfly FG Left View Big"/>
										<div className={css(styles.rightViewSpanContainer, styles.rightViewSpanContainerXSmall)}>
											<span className={css(styles.span)}></span>
											<span className={css(styles.span)}></span>
										</div>
									</div>
								} else {
									return <div>
										<img className={css(styles.bottomShoeImage, styles.bottomShoeImageSmall, styles.bottomShoeImageXSmall, styles.bottomShoeImageXXSmall, styles.bottomShoeImageXXXSmall)} src={bottomView} alt="Nike Mercurial Superfly FG Left View Big"/>
										<div className={css(styles.bottomViewSpanContainer, styles.bottomViewSpanContainerXSmall)}>
											<span className={css(styles.span)}></span>
											<span className={css(styles.span)}></span>
										</div>
									</div>
								}
      				})()}
						</div>
					</div>
				</div>
				<div className={css(styles.row, styles.rowContentSmall)}>
					<div className={css(styles.contentColumn, styles.contentColumnSmall)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>BLANDIT </h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>TINCIDUNT METUS</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
					<div className={css(styles.contentColumn, styles.contentColumnSmall)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>METUS</h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>PELLENTESQUE</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
					<div className={css(styles.contentColumn, styles.contentColumnSmall)}>
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
		padding: '120px 15.8% 75px 15.8%'
	},

	shoeSectionSmall: {
		'@media (max-width: 800px)': {
			padding: '120px 7.9% 75px',
			backgroundImage: 'none'
		}
	},

	shoeSectionXSmall: {
		'@media (max-width: 500px)': {
			paddingTop: '40px'
		}
	},

	shoeSectionXXXSmall: {
		'@media (max-width: 350px)': {
			paddingRight: '3.95%',
			paddingLeft: '3.95%'
		}
	},

	header: {
		fontWeight: '400'
	},

	noHeaderOnSmall: {
		'@media (max-width: 500px)': {
			display: 'none'
		}
	},

	hidden: {
		display: 'none'
	},

	mobileHeader: {
		display: 'none'
	},

	mobileHeaderXSmall: {
		'@media (max-width: 500px)': {
			display: 'block',
			textAlign: 'center',
			color: '#FEFFFF',
			marginBottom: '15px',
			fontWeight: '400'
		}
	},

	row: {
		display: 'flex',
		width: '100%'
	},

	rowContentSmall: {
		'@media (max-width: 500px)': {
			flexWrap: 'wrap'
		}
	},

	rowToColXSmall: {
		'@media (max-width: 500px)': {
			flexDirection: 'column'
		}
	},

	smallColumn: {
		width: '16.5%',
		color: '#f2f2f2'
	},

	smallColXSmall: {
		'@media (max-width: 500px)': {
			display: 'flex',
		}
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

	imageContainerXSmall: {
		'@media (max-width: 500px)': {
			marginTop: '0',
			marginLeft: '15px',
			marginBottom: '15px',
		}
	},

	imageContainerXXXSmall: {
		'@media (max-width: 350px)': {
			marginLeft: '2.5px'
		}
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

	bigColumnXSmall: {
		'@media (max-width: 500px)': {
			width: '100%',
			height: '315px'
		}
	},

	circleContainer: {
		backgroundImage: "url('https://raw.githubusercontent.com/rickMcGavin/nike-test/master/src/assets/images/circle-bg.png')",
		backgroundRepeat: 'no-repeat',
		backgroundSize: '475px',
		backgroundPosition: 'top',
	},

	circleContainerSmall: {
		'@media (max-width: 800px)': {
			backgroundSize: '450px',
		}
	}, 

	circleContainerXSmall: {
		'@media (max-width: 500px)': {
			backgroundSize: '300px',
			backgroundPosition: 'top center'
		}
	},

	circleContainerXXXSmall: {
		'@media (max-width: 350px)': {
			backgroundSize: '275px'
		}
	},

	leftShoeImage: {
		transform: 'scale(0.6)',
		position: 'relative',
		zIndex: '1',
		top: '-50px',
		left: '-20%',
		transition: 'left 0.75s ease-in-out'
	},

	leftShoeImageSmall: {
		'@media (max-width: 800px)': {
			left: '-35%',
			transform: 'scale(0.5)'
		}
	}, 

	leftShoeImageXSmall: {
		'@media (max-width: 500px)': {
			transform: 'scale(0.3)',
			left: '-70%',
			top: '-125px'
		}
	},

	leftShoeImageXXSmall: {
		'@media (max-width: 400px)': {
			left: '-90%'
		}
	},

	leftShoeImageXXXSmall: {
		'@media (max-width: 350px)': {
			left: '-95%',
			top: '-150px'
		}
	},

	rightShoeImage: {
		transform: 'scale(0.6)',
		position: 'relative',
		zIndex: '1',
		top: '-25px',
		left: '10%',
		transition: 'left 0.75s ease-in-out'
	},

	rightShoeImageSmall: {
		'@media (max-width: 800px)': {
			transform: 'scale(0.5)',
			left: '-5%'
		}
	},

	rightShoeImageXSmall: {
		'@media (max-width: 500px)': {
			transform: 'scale(0.3)',
			left: '-45%',
			top: '-100px'
		}
	},

	rightShoeImageXXSmall: {
		'@media (max-width: 400px)': {
			left: '-58%'
		}
	},

	rightShoeImageXXXSmall: {
		'@media (max-width: 350px)': {
			left: '-75%'
		}
	},

	bottomShoeImage: {
		transform: 'scale(0.6)',
		position: 'relative',
		zIndex: '1',
		top: '70px',
		left: '-15%',
		marginBottom: '200px',
		transition: 'left 0.75s ease-in-out'
	},

	bottomShoeImageSmall: {
		'@media (max-width: 800px)': {
			transform: 'scale(0.5)',
			left: '-32.5%'
		}
	},

	bottomShoeImageXSmall: {
		'@media (max-width: 500px)': {
			transform: 'scale(0.3)',
			left: '-75%',
			top: '-15px'
		}
	},

	bottomShoeImageXXSmall: {
		'@media (max-width: 400px)': {
			left: '-90%'
		}
	},

	bottomShoeImageXXXSmall: {
		'@media (max-width: 350px)': {
			left: '-100%'
		}
	},

	leftViewSpanContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		top: '-105px'
	},

	leftViewSpanContainerXSmall: {
		'@media (max-width: 500px)': {
			top: '-280px'
		}
	},

	rightViewSpanContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		top: '-15px'
	},

	rightViewSpanContainerXSmall: {
		'@media (max-width: 500px)': {
			top: '-190px'
		}
	},

	bottomViewSpanContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		top: '-18px'
	},

	bottomViewSpanContainerXSmall: {
		'@media (max-width: 500px)': {
			top: '-192px'
		}
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

	contentColumnSmall: {
		'@media (max-width: 500px)': {
			width: '100%'
		}
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

export default Shoe;