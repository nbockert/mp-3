import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx';

const Award= styled.div`
    text-align: center;
    margin: 5vh auto;
    color: #56021F;
    h1{
        font-size: calc(20px + 1.5vw);
    }
    h2{
        font-size: calc(10px + 1.5vw);
        font-style: italic;
    }
    
`;
export default function Awards() {
    return(
        <Layout title="Awards & Involvement">
            <Award>
                <h1><b>Boston University Deans List</b></h1>
            </Award>
            <Award>
                <h1><b>Hello World Podcast</b></h1>
                <h2>Podcast</h2>
                <small>I created a podcast where I discuss the existence of  aliens using statistics and historical evidence (Spotify).</small>
            </Award>
            <Award>
                <h1><b>4th/15th Place in CTFd</b></h1>
                <h2>Cybersecurity Competition</h2>
                <small>World Wide Technologies CTF is a company-wide cybersecurity competition. Challenges included binary and web exploitation and cryptography. </small>
            </Award>
            <Award>
                <h1><b>Boston Hacks</b></h1>
                <h2>Hackathon</h2>
                <small>A 24-hour hackathon where we created a breathing app using Python</small>
            </Award>
            <Award>
                <h1><b>Sustainable Ocean's Alliance EBoard</b></h1>
                <h2>Club</h2>
                <small>As a part of the EBoard, I organized trash clean-ups around Boston and helped run the social media page.</small>
            </Award>
            
        </Layout>
    )
}