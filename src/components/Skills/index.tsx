import * as C from './styles'

export const Skills = () => {
    return (
        <C.SkillsArea>
            <div className='container'>
                <div className='title--area'>
                    <h1>Skills</h1>
                </div>
                <div className='img--area'>
                    <img src="https://img.icons8.com/office/100/000000/react.png"/>
                    <img src="https://img.icons8.com/color/100/000000/typescript.png"/>
                    <img src="https://img.icons8.com/color/100/000000/javascript--v1.png"/>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/80/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png"/>
                    <img src="https://img.icons8.com/color/100/000000/css3.png"/>
                </div>
            </div>
        </C.SkillsArea>
    )
}