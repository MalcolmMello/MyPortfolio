import * as C from './styles'

export const Skills = () => {
    return (
        <C.SkillsArea>
            <div className='container'>
                <div className='title--area'>
                    <h1>Skills</h1>
                </div>
                <div className='img--area'>
                    <img src="https://img.icons8.com/ios-glyphs/100/5CC4C4/react.png" alt='Imagem da Biblioteca React'/>
                    <img src="https://img.icons8.com/ios-filled/100/5CC4C4/typescript.png" alt='Imagem da Tecnologia Typescript'/>
                    <img src="https://img.icons8.com/ios-filled/100/5CC4C4/javascript.png" alt='Imagem da Tecnologia Javascript'/>
                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/80/5CC4C4/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-bold-tal-revivo.png" alt='Imagem da Linguagem de Marcação HTML5'/>
                    <img src="https://img.icons8.com/ios-filled/100/5CC4C4/css3.png" alt='Imagem do estilizador CSS'/>
                </div>
            </div>
        </C.SkillsArea>
    )
}