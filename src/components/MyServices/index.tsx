import * as C from './styles'

export const Services = () => {
    return(
        <C.ServicesArea>
            <div className='container'>
                <h1>Serviços</h1>
                <div className='services--area'>
                    <div className='services--item'>
                        <h3>Criação de aplicações <br />
                            Web Front-End
                        </h3>
                    </div>
                    <div className='services--item'>
                        <h3>UI <br />
                            Designer
                        </h3>
                    </div>
                    <div className='services--item'>
                        <h3>Sites <br />
                            Responsivos
                        </h3>
                    </div>
                </div>
            </div>
        </C.ServicesArea>
    )
}