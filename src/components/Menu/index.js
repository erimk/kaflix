import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
//import ButtonLink from '../ButtonLink';
import Button from '../Button/Button';
function Menu(){
    return(
        //ou header para um projeto maior
        //mover bloco no visual studio code Alt+arrows
        <>
        <nav className="Menu">
            <img className="Logo " src={Logo} alt="Logo kaflix" />
            {/* <ButtonLink className="ButtonLink" href="/">Novo vídeo</ButtonLink> */}
            <Button as="a" className="ButtonLink" href="/">Novo vídeo</Button>
        
        </nav>
        
        </>
        
    );
}

export default Menu;