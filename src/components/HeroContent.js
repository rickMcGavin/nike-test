import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const HeroContent = () => {
	return (
		<div className={css(styles.heroContent, styles.heroContentSmall)}>
			<div className={css(styles.spanContainer)}>
				<span className={css(styles.span, styles.spanXSmall)}></span>
				<span className={css(styles.span, styles.spanXSmall)}></span>
			</div>
			<div className={css(styles.contentRow, styles.contentRowSmall, styles.contentRowXSmall)}>
					<div className={css(styles.contentColumn, styles.contentColumnXSmall)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>BLANDIT </h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>TINCIDUNT METUS</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
					<div className={css(styles.contentColumn, styles.contentColumnXSmall)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>METUS</h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>PELLENTESQUE</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
					<div className={css(styles.contentColumn, styles.contentColumnXSmall)}>
						<h3 className={css(styles.h3, styles.h3MarginBottomAdjust)}>BLANDIT</h3>
						<h3 className={css(styles.h3, styles.h3MarginTopAdjust)}>TINCIDUNT METUS</h3>
						<p className={css(styles.p)}>Proin eget tortor malesuada, dapibus mi pretium, semper diam. Donec in rutrum turpis. Duis eu faucibus est. Aliquam vitae nibh vestibulum, rhoncus augue eu, venenatis erat. Vivamus ipsum metus, sodales nec scelerisque faucibus, cursus in quam. Mauris nibh neque, euismod in malesuada sed, commodo et lacus. Maecenas gravida, lacus dictum eleifend facilisis, justo felis aliquam dui, nec sodales quam neque</p>
					</div>
			</div>
		</div>
	) 
}


const styles = StyleSheet.create ({
	heroContent: {
		backgroundColor: '#17171C',
		width: '100%',
		minHeight: '75vh',
		padding: '0 15.8%',
	},

	heroContentSmall: {
		'@media (max-width: 800px)': {
			padding: '0 7.9%'
		}
	},

	spanContainer: {
		display: 'flex',
		justifyContent: 'center',
	},

	span: {
		width: '33px',
		height: '3px',
		marginRight: '3px',
		marginTop: '70px',
		backgroundColor: '#202127'
	},

	spanXSmall: {
		'@media (max-width: 500px)': {
			marginTop: '35px'
		}
	},

	contentRow: {
		display: 'flex',
		paddingTop: '43px'
	},

	contentRowSmall: {
		'@media (max-width: 800px)': {
			paddingTop: '21.5px'
		}
	},

	contentRowXSmall: {
		'@media (max-width: 500px)': {
			flexWrap: 'wrap',
			paddingBottom: '20px'
		}
	},

	contentColumn: {
		width: '33%',
		marginRight: '10px',
		paddingRight: '5px'
	},

	contentColumnXSmall: {
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
});


export default HeroContent;