export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container px-global text-black">
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
      <BottomNavbar />
    </div>
  );
}
