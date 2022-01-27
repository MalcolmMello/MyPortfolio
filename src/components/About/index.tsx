import * as C from './styles'
import mypic from '../../assets/mypic.png'

export const About = () => {

    return (
        <C.AboutItem>
            <div className='container'>
                <div className='pic--area'>
                    <div className='pic--item'>
                        <img className='perfil--img' src={mypic} alt="" />
                        <h2>Malcolm Lima</h2>
                        <div className='social--media'>
                            <a href='https://www.linkedin.com/in/malcolm-de-mello-a8208a224/' target="_blank">
                                <img src="https://img.icons8.com/ios-glyphs/30/5CC4C4/linkedin.png"/>
                            </a>
                            <a href='https://github.com/MalcolmMello' target="_blank">
                                <img src="https://img.icons8.com/ios-glyphs/30/5CC4C4/github.png"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UC4WpfhVSFKAyLlBvFGWOnQg" target="_blank">
                                <img src="https://img.icons8.com/ios-glyphs/30/5CC4C4/youtube-play.png"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='about--area'>
                    <h1>Sobre</h1>
                    <div className='about--item'>
                        <h3>Conheça um pouco sobre mim</h3>
                        <p>
                            Meu nome é Malcolm Lima, e sou desenvolvedor Front-End. Tenho experiência de 
                            cerca de 7 meses, e posso dizer que domino ReactJS, Javascript, Typescript, HTML5 e CSS3.
                            Desenvolvi aplicações onde utilizei consumo de API, Design responsivo, HTML semântico, Rotas
                            (diversas páginas), e funcionalidades como Axios, Styled-Components, React-Router, ContextAPI, Hooks,
                            LocalStorage, Versionamento de Código, States e Eventos.
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