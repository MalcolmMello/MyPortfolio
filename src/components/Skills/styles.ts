import styled from "styled-components";

export const SkillsArea = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0px;
    .container {
        .title--area {
            display: flex;
            justify-content: center;
            color: #FFF;
            margin-bottom: 10px
        }
       .img--area {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            justify-content: center;
            align-items: center;
            width: 1024px;
            margin: auto;

            img {
                margin: auto
            }
       }
    }
`