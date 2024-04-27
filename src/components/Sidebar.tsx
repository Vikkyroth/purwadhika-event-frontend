import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
                <Link href="/" className="nav-link align-middle px-0 text-white">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
            </li>
            <li>
                <Link href="/admin/events" className="nav-link px-0 align-middle text-white">
                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Events</span> 
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar