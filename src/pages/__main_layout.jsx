export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container px-global text-black pb-[100]">
        {/* Main content goes here */}
        <Outlet />
        {/* End on main content */}
      </div>
      <BottomNavbar />
    </div>
  );
}
