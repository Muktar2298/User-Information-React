import React from 'react';

// --react-fontawesome import --//react
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

// --user style import --//
import './User.css';

const User = (props) => {
    const {name,username,img,phone} = props.user;
    return (
        <div className='user-container'>
            <img src={img} alt=""/>
            <h3>Name: {name}</h3>
            <button> <FontAwesomeIcon icon={faUserPlus} /></button>

        </div>
    );
};

export default User;