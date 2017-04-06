import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/images/logo_green.svg';
import bgImage from '../assets/images/content-1-bg.png';

const Hero = () => {
	return (
		<div className={css(styles.hero)}>
			<div className={css(styles.heroContainer)}>
				<img className={css(styles.logoGreen)} src={logo} alt="Nike Logo Green"/>
				<h1 className={css(styles.mainHeroHeader)}>MERCURIAL SUPERFLY</h1>
				<h2 className={css(styles.subHeroHeader)}>It's time to destroy defenses.</h2>
			</div>
		</div>
	)
}



const styles = StyleSheet.create ({

	hero: {
		width: '100%',
		minHeight: '100vh',
		backgroundColor: '#16171A',
		backgroundImage: "url('https://raw.githubusercontent.com/rickMcGavin/nike-test/master/src/assets/images/content-1-bg.png')",
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},

	heroContainer: {
		textAlign: 'center'
	},

	logoGreen: {
		transform: 'scale(0.65)',
	},

	mainHeroHeader: {
		color: '#ADD965',
		fontSize: '3.75rem',
		marginBottom: '10px'
	},

	subHeroHeader: {
		color: '#FEFFFF',
		fontWeight: '300',
		fontSize: '2.25rem',
		marginTop: '10px'
	}
});

export default Hero;