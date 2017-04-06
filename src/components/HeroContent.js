import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const HeroContent = () => {
	return (
		<div className={css(styles.heroContent)}>
			<div className={css(styles.spanContainer)}>
				<span className={css(styles.span)}></span>
				<span className={css(styles.span)}></span>
			</div>
			<div className={css(styles.contentRow)}>
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


const styles = StyleSheet.create ({
	heroContent: {
		backgroundColor: '#17171C',
		width: '100%',
		minHeight: '75vh'
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

	contentRow: {
		display: 'flex',
		margin: '0 15.8%',
		paddingTop: '43px'
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
});


export default HeroContent;