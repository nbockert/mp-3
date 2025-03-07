import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx';
import {Link} from 'react-router';
const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Social = styled.div`
    margin: 5vh auto;
     color: #56021F;
    h3{
        font-size: calc(18px + 1vw);   
    }
    p{
        font-size: calc(12px + 1vw);
    }
`;
export default function Contact() {
    return (
        <Layout title="Contact">
            <ContactDiv>
                <Social>
                    <h3>Phone:</h3>
                    <p>314-809-0463</p>
                </Social>
                <Social>
                    <h3>Email:</h3>
                    <ul>
                        <li>Personal: nora1.bockert@gmail.com</li>
                        <li>School: nbockert@bu.edu</li>
                        <li>Work: nora@tensorstax.com, bockertn@wwt.com</li>
                    </ul>
                </Social>
                <Social>
                    <h3>LinkedIn:</h3>
                    <Link to="https://www.linkedin.com/in/nora-bockert-706073242" target="_blank">LinkdIn</Link>
                </Social>
                <Social>
                    <h3>GitHub:</h3>
                    <Link to="https://github.com/nbockert">GitHub</Link>
                </Social>
            </ContactDiv>
        </Layout>
    );
}