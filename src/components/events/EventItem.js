import React from 'react';
import classes from './EventItem.module.css';

function EventItem(props) {
  return (
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.eventadress}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button>Favorites +</button>
        </div>
    </li>
  )
}

export default EventItem
