import { faS } from '@fortawesome/free-solid-svg-icons';
import Clients from './components/Clients';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css'
library.add(faS)
function App() {

	return (
		<>
			<Nav />
			<Hero/>
			<Clients />
			<Features />
			<Services />
			<Newsletter />
			<Footer/>
		</>
	);

}

export default App
