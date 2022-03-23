import * as C from './styles'
import countriespng from '../../assets/countriesMIN.png'
import bannercryptos from '../../assets/bannercryptos.png'
import gnews from '../../assets/gnews.png'

export const Projects = () => {
    return (
        <C.ProjectsArea>
            <div className='container'>
                <h1>Projetos</h1>
                <div className='projects--area'>
                    <a href='https://cryptoapp-reactjs.netlify.app/' target="_blank" rel="noreferrer" className='project--item'>
                        <img src={bannercryptos} alt="" />
                        <h3>CryptoApp</h3>
                        <p>
                            Veja as estatísticas e notícias das principais criptomoedas
                            do mercado.
                        </p>
                    </a>
                    <a href='https://gamers-news.netlify.app/' target="_blank"rel="noreferrer" className='project--item'>
                        <img src={gnews} alt="" />
                        <h3>The New York Times</h3>
                        <p>
                        Se informe através de uma das melhores fontes
                        de informação do mundo,
                        se não a melhor!
                        </p>
                    </a>
                    <a href='https://appcountries-api.netlify.app/' target="_blank" rel="noreferrer" className='project--item'>
                        <img src={countriespng} alt="" />
                        <h3>World in Data</h3>
                        <p>
                            Veja as principais informações de qualquer
                            país do mundo.
                        </p>
                    </a>
                    <a href='https://shoesecommerce.netlify.app/' target="_blank" rel="noreferrer" className='project--item'>
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/fhzpdnabrek50hvhftnl.jpg" alt="e-commerce" />
                        <h3>E-Commerce</h3>
                        <p>Sneakers E-Commerce, veja as fotos,
                            e adicione ao carrinho!
                        </p>
                    </a>
                    <a href='https://blog-landingpage.netlify.app/' target="_blank" rel="noreferrer" className='project--item'>
                        <img src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/wdor1bppurckam2nrhwn.jpg" alt="landing page" />
                        <h3>Landing Page</h3>
                        <p>Landing Page simples e responsiva.</p>
                    </a>
                </div>
            </div>
        </C.ProjectsArea>
    )
}