import styled,{createGlobalStyle} from "styled-components"
import bgImage from "./images/bg.jpg"


export const GlobalStyle = createGlobalStyle`

    // html{
    //     height:100%;
    // }

    body{
        background-image:url(${bgImage});
        // background-size: cover;
        // margin: 0;
        // padding:0 20px;
        // display:flex;
        // justify-content: ceneter;
    }

    // *{
    //     box-sizing:border-box;
    // }

`;