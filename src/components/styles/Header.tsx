import {styled} from 'styled-components';

const HeaderDiv=styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #56021F;
    color: #F4CCE9;
    font-size: 1vw;
    text-align: left;
    @media screen and (max-width: 750px) {
        align-items: center;
    }
`;
interface HeaderProps {
    title?: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <HeaderDiv>
            <h1>{title}</h1>
        </HeaderDiv>
    );
}

