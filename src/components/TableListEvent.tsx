import React from 'react'
import events from '@/data/events.json'

const TableListEvent = () => {
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Slug</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  {events.map((event, index) => (
            <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{event.name}</td>
            <td>{event.slug}</td>
            <td>{event.description}</td>
          </tr>
          ))}
    
  </tbody>
</table>
  )
}

export default TableListEvent