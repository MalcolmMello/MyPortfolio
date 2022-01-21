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

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            .img--area {
                width: 100%;
                justify-content: space-between
            }
        }
    }
    @media(max-width: 645px) {
        padding: 15px 0px;
        .container {
            .img--area {
                grid-template-columns: 1fr;
                grid-gap: 40px;
                img {
                    height: 80px;
                    width: 80px
                }
            }
        }
    }
`