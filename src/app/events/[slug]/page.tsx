import EventDetail from '@/components/EventDetail'

type Props = {
  params: {
    slug: string
  }
}

const EventPage = ({ params: { slug } }: Props) => {
  return (
    <>
      <EventDetail slug={slug} />
    </>
  )
}

export default EventPage