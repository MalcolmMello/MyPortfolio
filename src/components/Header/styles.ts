import styled from "styled-components";

export const HeaderArea = styled.header`
    .container {
        display: flex;
        width: 1024px;
        height: 90px;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        color: #FFF;

        ul {
            display: flex;
            list-style-type: none;

            li {
                margin-right: 50px;
                cursor: pointer;
                border-bottom: 2px solid transparent;
                padding: 10px 0px;
                transition: all ease 0.3s;
            }
            li:hover {
                border-bottom: 1px solid #5CC4C4
            }
        }
    }
`