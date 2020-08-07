import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color:var(--white);
    flex:1; 
    /*pesquisar O QUE É FLEX */
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault(props){
    return(
        // <React.Fragment><React.Fragment/>
        <>
            <Menu/>
            {props.children}
            <Footer/>
        </>
    );
}

export default PageDefault;