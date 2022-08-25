import { AiOutlinePlus as Plus, AiOutlineMinus as Minus } from "react-icons/ai";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { useState } from "react";

const MuiAccordion = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return ( 
        <>
        <div className="accordion">

            <Accordion className="accordionWrapper sideNavAcc" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={expanded ? <Minus /> : <Plus /> } 
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <p className="accordionTitle" sx={{ width: '33%', flexShrink: 0 }}>
                        {props.title}
                    </p>
                </AccordionSummary>
                <AccordionDetails className="accordionDeatails">
                    <ul>
                        {props.list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </AccordionDetails>
            </Accordion>

        </div>
        </>
    );
}

export default MuiAccordion;