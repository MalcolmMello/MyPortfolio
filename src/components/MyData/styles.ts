import styled from "styled-components";

export const MyName = styled.section`
    display: flex;
    align-items: center;
    padding: 80px 0px;

    .container {
        display: flex;
        width: 1024px;
        margin: auto;
        justify-content: space-between;
        .img--area {
            img {
                width: 300px;
                height: 300px;
            }
    }

    .data--area {
        h1 {
            color: #FFF;
        }
        p {
            color: #FFF
        }
        .frontend--title {
            color: #5CC4C4;
        }
    }
    
    .button--area {
        margin-top: 30px;

        a {
            height: 42px;
            font-size: 17px;
            padding: 10px 20px;
            color: #5CC4C4;
            border: 2px solid #5CC4C4;
            background: none;
            cursor: pointer;
            margin-right: 15px;
            text-decoration: none
        }
    }
`