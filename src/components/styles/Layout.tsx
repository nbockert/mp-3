import Header from "./Header.tsx";
import NavComponent from "./NavComponent.tsx";
import FooterComponent from "./FooterComponent.tsx";
import Main from "./MainComponent.tsx"
import { ReactNode } from "react";
import { styled } from "styled-components";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    background-color: #7D1C4A;
    @media screen and (max-width: 1000px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        position: relative;
        background-color: #7D1C4A;
        
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        
        flex-direction: column;
    }


`;
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        width: 80vw;
        height: 100vh;
        margin: 0 auto;
    }
`;
interface LayoutProps {
    title: string;
    children: ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
    return (
        <PageWrapper>
            <Header title={title} />
            <Container>
            <NavComponent />
            <Main>{children}</Main>
            </Container>
            <FooterComponent />
        </PageWrapper>
    );
}
