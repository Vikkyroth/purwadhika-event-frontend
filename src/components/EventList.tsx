import { EVENTS_URL } from "@/constants";
import EventCard from './EventCard'

const fetchEvents = async () => {
  try {
    const res = await fetch(EVENTS_URL);
    const data = await res.json();
    const events = data.data;
    
    return events;
  } catch (err) {
    console.error(err);
  }
}

const EventList = async () => {
  const events = await fetchEvents();

  return (
    <section className='event-list py-5 px-3'>
      <div className='container'>
        <h2>Event List</h2>
        
        <div className="row">
          {events.map((event: any) => (
            <div key={event.id} className="col-xs-12 col-sm-6 col-md-4 col-xl-3 mt-5">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>   
    </section>
  )
}

export default EventList