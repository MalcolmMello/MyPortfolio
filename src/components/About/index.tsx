import * as C from './styles'
import mypic from '../../assets/mypic.png'

export const About = () => {

    return (
        <C.AboutItem>
            <div className='container'>
                <div className='pic--area'>
                    <div className='pic--item'>
                        <img className='perfil--img' src={mypic} alt="Imagem de Perfil" />
                        <h2>Malcolm Lima</h2>
                        <div className='social--media'>
                            <a href='https://www.linkedin.com/in/malcolm-de-mello-a8208a224/' target="_blank" rel="noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/30/5CC4C4/linkedin.png" alt='Imagem da Rede Social Linkedin'/>
                            </a>
                            <a href='https://github.com/MalcolmMello' target="_blank" rel="noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/30/5CC4C4/github.png" alt='Imagem da Rede Social GitHub'/>
                            </a>
                            <a href="https://www.youtube.com/channel/UC4WpfhVSFKAyLlBvFGWOnQg" target="_blank" rel="noreferrer">
                                <img src="https://img.icons8.com/ios-glyphs/30/5CC4C4/youtube-play.png" alt='Imagem da Rede Social Youtube'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='about--area'>
                    <h1>Sobre</h1>
                    <div className='about--item'>
                        <h3>Conheça um pouco sobre mim</h3>
                        <p>
                            Meu nome é Malcolm Lima, e sou desenvolvedor Front-End. REACTJS, TYPESCRIPT, JAVASCRIPT, HTML5 e CSS3 e GIT/GITHUB, 
                            são as tecnologias que utilizo no momento. Conhecimento básico em NodeJS e Banco de dados.
                            Tenho experiência em consumo de API, Design responsivo, ES6, SPA, Styled-Components (Grid e Flexbox), Redux, Context API,
                            React-Router, Hooks do React, Design Responsivo e conhecimento básico em testes com Jest.
                            Você pode ver mais sobre meus projetos na seção Projetos abaixo, e nas minhas redes (
                                LinkedIn, GitHub e YouTube
                            ).
                        </p>
                    </div>
                </div>
            </div>
        </C.AboutItem>
    )
}