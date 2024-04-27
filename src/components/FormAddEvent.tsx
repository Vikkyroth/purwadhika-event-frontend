"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from 'next/navigation'
import Required from "./Required";

const createEvent = async (eventData: any) => {
  try {
    const res = await fetch('http://localhost:8000/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(eventData)
    });
    const data = await res.json();
    const events = data.data;
    
    return events;
  } catch (err) {
    console.error(err);
  }
}

const FormAddEvent = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: '',
    slug: '',
    image: '',
    description: '',
    lineup: '',
    location: '',
    eventDate: '',
    startBookingDate: '',
    endBookingDate: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createEvent(data);
      router.push("/admin/events");
    } catch (err) {
      console.error(err);
      alert("Failed Create Event");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name <Required /></label>
        <input type="text" className="form-control" id="name" name="name" placeholder="Name" value={data.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="slug" className="form-label">Slug <Required /></label>
        <input type="text" className="form-control" id="slug" name="slug" placeholder="Slug" value={data.slug} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image <Required /></label>
        <input type="text" className="form-control" id="image" name="image" placeholder="Image" value={data.image} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description <Required /></label>
        <textarea className="form-control" id="description" name="description" rows={3} placeholder="Description" value={data.description} onChange={handleChange} required></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="lineup" className="form-label">Lineup <Required /></label>
        <textarea className="form-control" id="lineup" name="lineup" rows={3} placeholder="Lineup" value={data.lineup} onChange={handleChange} required></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location <Required /></label>
        <input type="text" className="form-control" id="location" name="location" placeholder="Location" value={data.location} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="eventDate" className="form-label">Event Date <Required /></label>
        <input type="text" className="form-control" id="eventDate" name="eventDate" placeholder="Event Date" value={data.eventDate} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="startBookingDate" className="form-label">Start Booking Date <Required /></label>
        <input type="text" className="form-control" id="startBookingDate" name="startBookingDate" placeholder="Start Booking Date" value={data.startBookingDate} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="endBookingDate" className="form-label">End Booking Date <Required /></label>
        <input type="text" className="form-control" id="endBookingDate" name="endBookingDate" placeholder="End Booking Date" value={data.endBookingDate} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default FormAddEvent