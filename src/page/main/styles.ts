import styled from "styled-components";

export const MainContent = styled.div<{isOpen: boolean}>`
    
    .container-header {
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
    header {
        display: flex;
        align-items: center;
        .open--menu {
            display: none;
            cursor: pointer;
            font-size: 30px;
        }
    
        .line1, .line2, .line3{
            width: 32px;
            height: 2px;
            background-color: #FFF;
            transition: all ease 0.2s;
            margin: 8px;
        }
    }
    

    @media(max-width: 1024px) {
        .container-header {
            width: 100%;
            padding: 0px 10px
        }
    }

    @media(max-width: 768px) {
        .container-header {
            h1 {
                font-size: 24px;
            }
        }
    }

    @media(max-width: 645px) {
        
        .container-header {
            .nav--list {
                position: absolute;
                width: ${props => props.isOpen ? '100vw' : '0px'};
                right: 0px;
                top: 90px;
                height: calc(100vh - 90px);
                background-color: #2b3443;
                margin: auto;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                transition: all ease 0.3s;
                padding: 0px;

                li {
                    display: ${props => props.isOpen ? 'block' : 'none'};
                    margin: 0px;
                }
            }
        }
        header {
            .open--menu {
                display: block;
            }
        
            .line1 {
                transform: ${props => props.isOpen ? 'rotate(-45deg) translate(-8px, 8px)' : ''}
            }
        
            .line2 {
                opacity: ${props => props.isOpen ? '0' : ''}
            }
        
            .line3 {
                transform: ${props => props.isOpen ? 'rotate(45deg) translate(-5px, -7px)' : ''}
            }
        }
    }
`