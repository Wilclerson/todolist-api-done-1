import React from 'react';
import '../src/App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


function Item(props) {

    const handleDelete = () => {
        if (props.onDelete) {
            props.onDelete();
        }
    };

    return (
        <li className="list-group-item group listItem">
            <span>{props.text}</span> 
            <i class="fa fa-trash trash-icon" onClick={handleDelete}></i>
        </li>
    )
}

export default Item;