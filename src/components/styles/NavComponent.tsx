import {Link} from 'react-router';
import {styled} from 'styled-components';

const Nav = styled.nav`
    width:30%;
    @media screen and (max-width: 750px) {
       
    width: 100%;
    }
`
const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #7D1C4A;
    text-align: center;
    list-style: none;
    padding-left: 0;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #7D1C4A;
        list-style: none;
        padding-left: 0;
    }
`;
const NavItem = styled(Link)`
    font-size: calc(2px + 2vw);
    width: 90%;
    background-color:#D17D98;
    padding: 2vh 0;
    margin: 5vh auto;
    color: #56021F;
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 1.5vw);
        background-color: #D17D98;
        color: #56021F;
        padding: 1% .5%;
        margin: 1% .5%;
    }
`;

export default function NavLayout(){
    return(
        <Nav>
            <NavList>
                <NavItem to='/'>Home</NavItem>
                <NavItem to='/projects'>Projects</NavItem>
                <NavItem to='/experience'>Experience</NavItem>
                <NavItem to='/skills'>Skills</NavItem>
                <NavItem to='/education'>Education</NavItem>
                <NavItem to='/awards'>Awards & Involvement</NavItem>
                <NavItem to='/contact'>Contact Me!</NavItem>
            </NavList>
        </Nav>

    )
}


