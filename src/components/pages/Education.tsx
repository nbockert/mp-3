import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx';

const School= styled.div`
    text-align: center;
    margin: 5vh auto;
    color: #56021F;
    h2{
        font-size: calc(20px + 1.5vw);
        font-weight: 800;
    }
    h3{
        font-size: calc(18px + 1vw);
        font-style: italic;
    }
`;
export default function Education() {
    return (
        <Layout title="Education">
            <School>
                <h2>Boston University</h2>
                <h3>BA in Computer Science</h3>
                <small>September 2021 - May 2025</small>
            </School>
            <School>
                <h2>MICDS</h2>
                <h3>Highschool</h3>
                <small>August 2017 - May 2021</small>
            </School>
            <School>
                <h2>Swiss Semester</h2>
                <h3>Study Abroad</h3>
                <small>September 2018 - December 2018</small>
            </School>
            <School>
                <h2>Forsyth</h2>
                <h3>Elementry School</h3>
                <small>August 2008 - May 2015</small>
            </School>
            <School>
                <h2>Purina Day School</h2>
                <h3>Kindergarten</h3>
                <small>March 2003 - July 2008</small>
            </School>
        </Layout>
    )
}