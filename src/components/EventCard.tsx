import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  event: {
    id: number
    name: string
    slug: string
    image: string | StaticImport
    description: string
  }
}

const EventCard = ({ event }: Props) => {
  return (
    <div className="card">
      <div className='d-block position-relative w-100' style={{ height: '12rem' }}>
        <Image src={event.image} fill className="card-img-top" alt={event.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.description}</p>
        <Link href={`/events/${event.slug}`} className="btn btn-dark">Buy Ticket</Link>
      </div>
    </div>
  )
}

export default EventCard