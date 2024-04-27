import React from 'react'
import { EVENTS_URL } from "@/constants";

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

const TableListEvent = async () => {
  const events = await fetchEvents();

  return (
    <>
    <button className="btn btn-primary me-md-2" type="button">Add</button>
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

export default TableListEvent