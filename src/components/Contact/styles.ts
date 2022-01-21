import styled from "styled-components";

export const ContactArea = styled.section`
    padding: 80px 0px;
    .container {
        width: 1024px;
        margin: auto;
        h1, p {
            color: #FFF;
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
        }
        .first--p {
            margin-bottom: 30px;
        }

        .contact--area {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 30px;

            .contact--item {
                display: flex;
                align-items: center;
                a, p {
                    color: #FFF;
                    margin-left: 10px;
                    text-decoration: none;
                }

                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 0px 10px;
        }
    }

    @media(max-width: 768px) {
        .container {
            font-size: 14px
        }
    }

    @media(max-width: 480px) {
        padding: 15px 0px;
        .container {
            font-size: 12px;
        }
    }

    @media(max-width: 360px) {
        .container {
            font-size: 10px
        }
    }
`