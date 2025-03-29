import './maincomp.css';
import React from 'react';

interface MainCompProps {

    children ?: React.ReactNode;
};


const MainComp:React.FC<MainCompProps> = (Props) => {

   
    return(
        <>
            <div className="maincompdiv">
                {Props.children}
            </div>
        </>
    )
}

export default MainComp