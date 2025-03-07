import {styled} from 'styled-components';
import {ReactNode} from 'react'
const MainDiv = styled.main`
    display: flex;
    flex-direction: column;
    flex:1;
    width:70%;
    background-color: #F4CCE9;
    p{
        margin: 0 1vw;
        font-size: calc(2px + 1.5vw);
        color: #56021F;
    }
    h1{
        text-align: center;
    }
    @media screen and (max-width: 1000px) {
        display: flex;
        flex:1;
        flex-direction: column;
        width: 100%;
        background-color: #F4CCE9;
        p{
            margin: 0 1vw;
            font-size: calc(2px + 1.5vw);
        }
        h1{
            text-align: center;
        }
    }
    @media screen and (max-width: 750px) {
        display: flex;
        flex:1;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background-color: #F4CCE9;
        p{
            margin: 2%;
            font-size: calc(2px + 3vw);
        }
        h1{
            text-align: center;
        }
    }
`;
interface Children {
    children: ReactNode;
}

export default function Main({children}:Children){
    return (
        <MainDiv>
            {children}
        </MainDiv>
    )
}