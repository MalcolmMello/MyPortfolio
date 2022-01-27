import * as C from './styles'
import countriespng from '../../assets/countriesMIN.png'

export const Projects = () => {
    return (
        <C.ProjectsArea>
            <div className='container'>
                <h1>Projetos</h1>
                <div className='projects--area'>
                    <a href='https://appcountries-api.netlify.app/' target="_blank" className='project--item'>
                        <img src={countriespng} alt="" />
                        <h3>CountriesAPI</h3>
                        <p>Site para visualização de informações 
                            de países, possuí filtros por região e nome, 
                            segunda tela para ver mais informações e Theme Switcher
                            (modo escuro ou claro).
                        </p>
                    </a>
                    <a href='https://blog-landingpage.netlify.app/' target="_blank" className='project--item'>
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/wdor1bppurckam2nrhwn.jpg" alt="landing page" />
                        <h3>Landing Page</h3>
                        <p>Landing Page simples e responsiva.</p>
                    </a>
                    <a href='' className='project--item'>
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/fhzpdnabrek50hvhftnl.jpg" alt="e-commerce" />
                        <h3>E-Commerce</h3>
                        <p>Sneakers E-Commerce,
                        adicionar/remover/atualizar item do carrinho,
                        slideshow na tela principal e na tela inteira
                        ao clicar na imagem principal, design responsivo</p>
                    </a>
                    <a href='' className='project--item'>
                        <div className='fake--img'></div>
                        <h3>Travel Advisor</h3>
                        <p>
                        <strong>Em desenvolvimento...</strong> <br />
                        Aplicação para localizar hoteis,
                        restaurantes e pontos turísticos, mostrando
                        sua localização no mapa, em qualquer lugar do mundo. 
                        </p>
                    </a>
                    <a href='' className='project--item'>
                        <div className='fake--img'></div>
                        <h3>Crypto Currency</h3>
                        <p>
                        <strong>Em breve...</strong> <br />
                        Veja os dados e notícias das principais criptomoedas
                        do mercado.
                        </p>
                    </a>
                </div>
            </div>
        </C.ProjectsArea>
    )
}