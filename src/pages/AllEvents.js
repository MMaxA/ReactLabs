import React from 'react'
import EventList from '../components/events/EventList.js';

const DATA = [
  {
    id: '1',
    title: 'First Event',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Classical_spectacular10.jpg/1280px-Classical_spectacular10.jpg',
    eventadress: 'Mira 19',
    description: 'Some text for the first event.'
  },
  {
    id: '2',
    title: 'Second Event',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Bernardo_Strozzi_Kontsert.jpg',
    eventadress: 'Mira 19',
    description: 'Some text for the second event.'
  }
]

function AllEvents() {
  return (
    <section>
      <h1>Upcoming Events</h1>
        <EventList data={DATA} />
    </section>
  )
}

export default AllEvents


