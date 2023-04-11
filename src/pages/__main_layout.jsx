export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="container px-6 text-black">
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
      <BottomNavbar />
    </>
  );
}
