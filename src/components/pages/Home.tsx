import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx';
const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
    margin: 1vh 1vw;
   
   
    
    @media screen and (max-width: 750px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 1vh auto;
        
        
    }
    
`;
export default function Home() {
    const Content = styled.div`
        align-self: center;
        width: 60%;
        text-align: left;
        margin-right: 2vh;
      
        @media screen and (max-width: 750px) {
            align-self: center;
            width: 100%;
            margin-right: 2vh;
          
        }
    `;
    const ImageDiv = styled.div`
        width: 40%;
        margin: 1vh 1vw;
        img{
            max-width: 100%;
        }
        @media screen and (max-width: 750px) {
            align-self: center;
            width: 40%;
            margin: 1vh 1vw;
            img{
                max-width: 100%;
            }
        }
    `
    return (

        <Layout title="Home">
        <StyledDiv>
            <ImageDiv>
            <img src="src/assets/IMG_3596.JPG" alt=""/>
            </ImageDiv>
            <Content>
                <p>
                    My name is Nora Lily Bockert, and I am a senior at Boston University working towards my BA in Computer Science. I have developed web and mobile applications and have studied UI/UX design. My interests are in cloud and distributed systems as well as database systems. I hope you enjoy my web page!
                </p>
            </Content>
        </StyledDiv>
        </Layout>
    )
}