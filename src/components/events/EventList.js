import React from 'react';
import classes from './EventList.module.css';
import EventItem from './EventItem.js';

function EventList(props) {
  return (
    <ul className={classes.list}>
        {props.data.map((data) => (
        <EventItem 
        key={data.id} 
        id={data.id} 
        image={data.image}
        title={data.title}
        address={data.address}
        description={data.description} 
        />
        ))}
    </ul>
  )
}

export default EventList