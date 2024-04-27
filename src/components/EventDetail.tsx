import { EVENTS_URL } from "@/constants";
import Image from 'next/image'
import Link from 'next/link'

const fetchEventBySlug = async (slug: string) => {
  try {
    const res = await fetch(`${EVENTS_URL}/slug/${slug}`);
    const data = await res.json();
    const event = data.data;

    return event;
  } catch (err) {
    console.error(err);
  }
}

type Props = {
  slug: string
}

const EventDetail = async ({ slug }: Props) => {
  const event = await fetchEventBySlug(slug);

  if (!event) {
    return (
      <section className='event-detail py-5 px-5'>
        <div className='container'>
          <h1>Event Not Found</h1>
          <Link href={`/events`} className="btn btn-dark mt-4">Back to Events</Link>
        </div>
      </section>
    )
  }

  return (
    <section className='event-detail py-5 px-5'>
      <div className='container'>
        <div className='d-block position-relative w-100' style={{ height: '25rem' }}>
          <Image src={event.image} fill className="card-img-top object-fit-cover" alt={event.name} />
        </div>

        <h1 className='mt-5'>{event.name}</h1>

        <p className='mt-4'>{event.description}</p>

        <Link href={`/events/${event.slug}`} className="btn btn-dark mt-4">Buy Ticket</Link>
      </div>
    </section>
  )
}

export default EventDetail