import {styled} from 'styled-components';
import {Link} from 'react-router';
const FooterLayout = styled.footer`
    background-color: #56021F;
    color: #F4CCE9;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    Link{
        color: #F4CCE9;
    }
    
    
`;
export default function Footer(){
    return (
        <FooterLayout>
            <p>All Rights Reserved to Nora Bockert <Link to='/contact'>Credits</Link>&copy;</p>
        </FooterLayout>
    )
}