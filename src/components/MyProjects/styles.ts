import styled from "styled-components";

export const ProjectsArea = styled.section`
    padding: 80px 0px;
    .container {
        width: 1024px;
        margin: auto;
        h1 {
            color: #FFF;
            text-align: center
        }

        .projects--area {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10px;

            .project--item {
                height: 336px;
                width: 100%;
                margin: auto;
                color: #FFF;
                background-color: #2b3443;
                padding: 10px 10px;
                border-radius: 5px;
                text-decoration: none;
                border-bottom: 1px solid #5CC4C4;
                transition: all ease 0.3s;
                
                img, .fake--img {
                    height: 150px;
                    width: 100%;
                    object-fit: cover;
                }
                .fake--img {
                    background-color: #202733
                } 
                p {
                    font-weight: 300;
                    color: #fff
                }
            }
            .project--item:hover {
                box-shadow: 0px 0px 1em #5CC4C4;
                border: none;
            }
        }
    }
`