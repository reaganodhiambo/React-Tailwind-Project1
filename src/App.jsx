import { faS } from '@fortawesome/free-solid-svg-icons';
import Clients from './components/TemplateOne/Clients';
import Features from './components/TemplateOne/Features';
import Footer from './components/TemplateOne/Footer';
import Hero from './components/TemplateOne/Hero';
import Nav from './components/TemplateOne/Nav';
import Newsletter from './components/TemplateOne/Newsletter';
import Services from './components/TemplateOne/Services';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css'
library.add(faS)
function App() {

	return (
		<>
			<Nav />
			<Hero />
			<Clients />
			<Features />
			<Services />
			<Newsletter />
			<Footer/>
		</>
	);

}

export default App
