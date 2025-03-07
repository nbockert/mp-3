import {styled} from 'styled-components';
import Layout from '../styles/Layout.tsx';
import {useState} from 'react';

const ProjectDiv  = styled.div`
    padding: 1vh 1vw;
    text-align: center;
    h2{
        font-size: calc(2px + 1.5vw);
        color:#7D1C4A;
    }
`;
const ProjectTitle = styled.h1`
    text-align: center;
    color: #7D1C4A;
    font-size: calc(3px + 3vw);
`;
const Divider = styled.hr`
    width: 80%;
    margin: 1vw auto;
`;
const InputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5vh 1vw;
    align-items: center;
    justify-content: center;
`
const StyledInput = styled.input`
    width: 70%;
    padding: 1vh 1vw;
    font-size: calc(2px + 1.5vw);
    border: 1px inset #56021F;
    color: #D17D98;
    text-align: center;
    ::placeholder {
        color: #872341;
        font-style: italic;
    }
`;
const ButtonDiv = styled.div`
        display: flex;
        flex-direction: row;
        margin: 5vh auto;
        align-items: center;
        justify-content: center;
    
`;
const StyledButton = styled.button`
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background-color: #7D1C4A;
    color: #F4CCE9;
    font-size: calc(1px + 1.3vw);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    margin: 1vh 1vw;
    &:hover{
        background-color: #D17D98;
    }
`;
const Output=styled.div<{isNegative: boolean}>`
    text-align: center;
    font-size: calc(3px + 3vw);
    color: ${(props)=>props.isNegative ? '#921A40' : '#09122C'};
`;

export default function Projects() {
   const [num1, setNum1] = useState<string>("");
   const [num2, setNum2] = useState<string>("");
   const [results, setResults] = useState<number|string>("");
   const addition = ()=>setResults(Number(num1)+Number(num2));
   const subtraction = ()=>setResults(Number(num1)-Number(num2));
   const multiplication = ()=>setResults(Number(num1)*Number(num2));
   const division = ()=>setResults(Number(num1)/Number(num2));
   let total = 1;
   for (let i=0;i<Number(num2);i++){
       total*=Number(num1);
   }
   const power = () =>setResults(total);
    const clearInput = () => {
        setNum1("");
        setNum2("");
        setResults("");
    };

    return (
        <Layout title="Projects">
            <ProjectDiv>
                <ProjectTitle>Wander</ProjectTitle>
                <Divider />
                <ProjectTitle>Journey Web Application</ProjectTitle>
                <Divider />
                <ProjectTitle>Calculator</ProjectTitle>
                <InputsDiv>
                    <label>
                        <h2>1st Number</h2>
                        {/*<br/>*/}
                    <StyledInput
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="Enter a number"
                    />
                    </label>
                    <br/>
                    <label>
                        <h2>2nd Number</h2>
                    <StyledInput
                        type="text"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Enter a number"
                    />
                    </label>
                </InputsDiv>
                <ButtonDiv>
                    <StyledButton onClick={addition}>+</StyledButton>
                    <StyledButton onClick={subtraction}>-</StyledButton>
                    <StyledButton onClick={multiplication}>*</StyledButton>
                    <StyledButton onClick={division}>/</StyledButton>
                    <StyledButton onClick={power}>**</StyledButton>
                    <StyledButton onClick={clearInput}>Clear</StyledButton>
                </ButtonDiv>
                <Output isNegative={Number(results)<0}>{results !== "" ? `Result: ${results}` : ""}</Output>

            </ProjectDiv>
            

        </Layout>
    )
}