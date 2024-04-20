import EventCard from './EventCard'
import events from '@/data/events.json'

const EventList = () => {
  return (
    <section className='event-list py-5 px-3'>
      <div className='container'>
        <h2>Event List</h2>
        
        <div className="row">
          {events.map(event => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mt-5">
              <EventCard key={event.id} event={event} />
            </div>
          ))}
        </div>
      </div>   
    </section>
  )
}

export default EventList