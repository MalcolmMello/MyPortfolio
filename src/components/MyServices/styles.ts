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
                    flex-direction: column; 
                    height: 240px;
                    width: 350px;
                    margin: auto;
                    justify-content: space-between;
                    background-color: #2b3443;
                    color: #FFF;
                    border-bottom: 3px solid #5CC4C4;
                    padding: 10px 10px;
                    transition: all ease 0.3s;
                    
                    img {
                        height: 64px;
                        width: 64px;
                    }
                }
            }
        }
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 0px 10px;
            .services--area {
                .services--item {
                    width: 100%
                }
            }
        }
    }

    @media(max-width: 768px) {
        .services--area {
            .services--item {
                h3 {
                    font-size: 16px
                }
            }
        }
    }

    @media(max-width: 480px) {
        padding: 15px 0px;
        .container {
            .services--area {
                grid-template-columns: 1fr;
            }
        }
    }
`