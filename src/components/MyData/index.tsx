import * as C from './styles'
import meuportifolioimg from '../../assets/meuportifolioimg.png'
import pdf from '../../files/MyResume.pdf'
import { Link } from 'react-router-dom'

export const MyData = () => {
    return (
        <C.MyName>
            <div className='container'>
                <div className='data--area'>
                    <p className='frontend--title'>DESENVOLVEDOR FRONT-END</p>
                    <h1>
                        Malcolm Lima 
                    </h1>
                    <p>Sou desenvolvedor Front-End, esse é meu <br />
                    portfólio, espero que goste e seja bem-vindo! <br />
                    Meu currículo:
                    </p>
                    <div className='button--area'>
                    <a href={pdf} target="_blank" download>BAIXAR CURRÍCULO</a>

                    </div>
                </div>
                <div className='img--area'>
                    <img src={meuportifolioimg} alt="myportfolio" />
                </div>
            </div>
        </C.MyName>
    )
}