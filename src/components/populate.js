import React from 'react'
import './listitems.css'

function Listitems(props) {
    const items = props.item
    const listItems = items.map((item) => {
        return (<div className="list" key="item-key">
            <li>{item}</li>
        </div>)
    })
    return (
        <div>
            <p>
                {listItems}
            </p>
        </div>
    )
}

export default Listitems
