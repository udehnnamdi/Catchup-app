import React from 'react';
import CatchupList from './CatchupList';
import Catchup from '../models/catchup';



const Catchups:React.FC<{catchups:Catchup[]; onRemoveCatchup:(catchUpId:string)=>void}> = (props) => {
    
    
    
    return (
        <ul>
            {props.catchups.map(item=> (
            <CatchupList
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            description={item.description}
            onRemoveCatchup={props.onRemoveCatchup.bind(null, item.id)}
            />))}
        </ul>
    )
}

export default Catchups;