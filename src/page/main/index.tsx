import * as C from './styles'
import { MyData } from '../../components/MyData'
import { About } from '../../components/About'
import { Skills } from '../../components/Skills'
import { Projects } from '../../components/MyProjects'
import { Services } from '../../components/MyServices'
import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'
import { useRef, useState } from 'react'

export const Main = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const aboutSection = useRef<HTMLDivElement | null>(null)
    const skillsSection= useRef<HTMLDivElement | null>(null)
    const projectsSection = useRef<HTMLDivElement | null>(null)
    const servicesSection = useRef<HTMLDivElement | null>(null)
    const contactSection = useRef<HTMLDivElement | null>(null)

    
    const goToAbout = () => {
        window.scrollTo({
            top: aboutSection.current?.offsetTop,
            behavior: 'smooth'
        })
        setIsOpen(false)
    }

    const goToSkills = () => {
        window.scrollTo({
            top: skillsSection.current?.offsetTop,
            behavior: 'smooth'
        })
        setIsOpen(false)
    }

    const goToProjects = () => {
        window.scrollTo({
            top: projectsSection.current?.offsetTop,
            behavior: 'smooth'
        })
        setIsOpen(false)
    }

    const goToServices = () => {
        window.scrollTo({
            top: servicesSection.current?.offsetTop,
            behavior: 'smooth'
        })
        setIsOpen(false)
    }

    const goToContacts = () => {
        window.scrollTo({
            top: contactSection.current?.offsetTop,
            behavior: 'smooth'
        })
        setIsOpen(false)
    }

    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <C.MainContent isOpen={isOpen}>
			<header>
                <div className='container-header'>
                    <h1>Malcolm Lima</h1>
                    <nav>
                        <ul className='nav--list'>
                            <li onClick={goToAbout}>Sobre mim</li>
                            <li onClick={goToSkills}>Skills</li>
                            <li onClick={goToProjects}>Projetos</li>
                            <li onClick={goToServices}>Servi??os</li>
                            <li onClick={goToContacts}>Contato</li>
                        </ul>
                    </nav>
                </div>
                <div className='open--menu' onClick={handleOpenMenu}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
            </header>
			<main>
                <div>
                    <MyData />
                </div>
                <div ref={aboutSection}>
                    <About />
                </div>
                <div ref={skillsSection}>
                    <Skills />
                </div>
                <div ref={projectsSection}>
				    <Projects />
                </div>
                <div ref={servicesSection}>
                    <Services />    
                </div>
                <div ref={contactSection}>
                    <Contact />
                </div>
			</main>
			<Footer />
		</C.MainContent>
    )
}