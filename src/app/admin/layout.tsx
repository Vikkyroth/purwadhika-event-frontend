import Sidebar from "@/components/Sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary">
        <Sidebar />
      </div>
      <div className="col py-3">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout