import * as C from './styles'

export const Contact = () => {
    return(
        <C.ContactArea>
            <div className='container'>
                <h1>Contato</h1>
                <p className='first--p'>Minhas informações para entrar em contato comigo. Será um prazer atendê-lo.
                </p>
                <div className='contact--area'>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/material-outlined/24/5CC4C4/whatsapp--v1.png"/>
                        <p>{`(11) 97535-4237`}</p>
                    </div>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/ios-filled/24/5CC4C4/email-open.png"/>
                        <a href='mailto:malcolmmellolima@gmail.com' target="_blank">malcolmmellolima@gmail.com</a>
                    </div>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/material-outlined/24/5CC4C4/github.png"/>
                        <a href='https://github.com/MalcolmMello' target="_blank">MalcolmMello</a>
                    </div>
                    <div className='contact--item'>
                        <img src="https://img.icons8.com/ios-glyphs/24/5CC4C4/linkedin.png"/>
                        <a href='https://www.linkedin.com/in/malcolm-de-mello-a8208a224/' target="_blank">MalcolmMello</a>
                    </div>
                </div>
            </div>
        </C.ContactArea>
    )
}