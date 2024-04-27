import { EVENTS_URL } from "@/constants";
import Link from "next/link";

const fetchEvents = async () => {
  try {
    const res = await fetch(EVENTS_URL, {
      cache: 'no-store' 
    });
    const data = await res.json();
    const events = data.data;
    
    return events;
  } catch (err) {
    console.error(err);
  }
}

const EventsAdminPage = async () => {
  const events = await fetchEvents();

  return (
    <>
    <h1 className="mb-5">Events</h1>
    <Link href="/admin/events/create" className="btn btn-primary me-md-2 mb-3" type="button">Add</Link>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Slug</th>
      <th scope="col">Description</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {events.map((event: any, index: number) => (
            <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{event.name}</td>
            <td>{event.slug}</td>
            <td>{event.description}</td>
            <td>
            <button className="btn btn-primary me-md-2" type="button">Edit</button>
            <button className="btn btn-danger" type="button">Delete</button>
            </td>
          </tr>
          ))}
  </tbody>
</table>
</>
  )
}

export default EventsAdminPage