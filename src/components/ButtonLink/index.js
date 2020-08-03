//MODO OLDSCHOOL
import React from 'react';

function ButtonLink(props){
    //props=>{className: "configs passadas", }
    return(
        //ou header para um projeto maior
        <a href={props.href} className={props.className}>            
            {props.children}
        </a>
        
    );
}

export default ButtonLink;