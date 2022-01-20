import styled from "styled-components";

export const ServicesArea = styled.section`
    padding: 80px 0px;
    .container {
        width: 1024px;
        margin: auto;
        h1 {
            color: #FFF;
            text-align: center;
        }

        .services--area {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;

            .services--item {
                    display: flex;
                    height: 240px;
                    width: 350px;
                    margin: auto;
                    align-items: flex-end;
                    background-color: #2b3443;
                    color: #FFF;
                    border-bottom: 3px solid #5CC4C4;
                    padding: 0px 10px;
                    
                    img {
                        height: 150px;
                        width: 100%
                    }
                }
            }
        }
    }
`