import React from 'react'

const FormAddEvent = () => {
  return (
    <div>
    <div className="mb-3">
  <label htmlFor="formGroupExampleInput" className="form-label">Event Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input Event Name" />
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput2" className="form-label">Slug</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Input Event Slug" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Event Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
</div>
<button type="submit" className="btn btn-primary">Add Event</button>
  </div>
  )
}

export default FormAddEvent