import React from 'react'
import './listitems.css'

function Listitems(props) {
    let deleteEvent = props.deleteButton
    let items = props.item
    
    let newitems = items.map((item)=>{
        return(<div className="view" key={item.key}>
            <div className="list" >
                {item.text}
            </div>
            <span onClick={() => deleteEvent(item.key)}>{React.createElement('button', { className: 'del'}, 'X')}</span>
        </div>)
                
    })
    return (
        <div>
            {newitems}
        </div>
    )
}


export default Listitems
