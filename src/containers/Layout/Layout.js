import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Header from '../../components/UI/Header/Header';
import Footer from '../../components/UI/Footer/Footer'
//import BackDrop from '../../components/UI/BackDrop/BackDrop'

class Layout extends Component {
	render() {
		return (
			<Aux>
				<Header />

				<Footer />
			</Aux>
		)
	}
}

export default Layout;
