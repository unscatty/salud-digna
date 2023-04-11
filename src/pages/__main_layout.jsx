export default function MainLayout() {
  return (
    <>
      <div className="container px-10 pt-4">
        <Header />
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
      <BottomNavbar />
    </>
  );
}
