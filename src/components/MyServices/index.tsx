import * as C from './styles'

export const Services = () => {
    return(
        <C.ServicesArea>
            <div className='container'>
                <h1>Serviços</h1>
                <div className='services--area'>
                    <div className='services--item'>
                    <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/5CC4C4/external-code-coding-kiranshastry-gradient-kiranshastry-4.png"/>
                        <h3>Criação de aplicações <br />
                            Web Front-End
                        </h3>
                    </div>
                    <div className='services--item'>
                    <img src="https://img.icons8.com/external-ddara-lineal-ddara/64/5CC4C4/external-api-fintech-ddara-lineal-ddara.png"/>
                        <h3>Consumo de <br />
                            API
                        </h3>
                    </div>
                    <div className='services--item'>
                    <img src="https://img.icons8.com/dotty/64/5CC4C4/smartphone-tablet.png"/>
                        <h3>Sites <br />
                            Responsivos
                        </h3>
                    </div>
                </div>
            </div>
        </C.ServicesArea>
    )
}