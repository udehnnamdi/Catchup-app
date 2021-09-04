import React from 'react'
import CatchupDetails from '../components/CatchupDetails'
import Catchup from '../models/catchup'

const CatchupDetail:React.FC<{catchups:Catchup[]}> = (props) => {
    return (
        <ul>
        {props.catchups.map(item=> (
        <CatchupDetails
        key={item.id}
        image={item.image}
        title={item.title}
        location={item.location}
        description={item.description}
        />))}
    </ul>
    )
}

export default CatchupDetail
