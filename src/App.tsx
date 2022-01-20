import { Header } from './components/Header'
import { MyData } from './components/MyData'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/MyProjects'
import { Services } from './components/MyServices'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
	return (
		<>
			<Header />
			<main>
				<MyData />
				<About />
				<Skills />
				<Projects />
				<Services />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
