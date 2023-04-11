export default function Header() {
  const { pathname } = useLocation();

  // Get header component that matches current path
  const activeHeader = useMemo(() => {
    const activeItem = HeaderItems.find((item) => item.path === pathname);

    return activeItem.headerComponent ?? <HomeHeader />;
  }, [pathname]);

  return (
    <div className="flex justify-between text-black">
      {activeHeader}
      <div className="inline-flex justify-center items-center bg-[#F5BBC0] aspect-square rounded rounded-xl h-10">
        <i className="i-heroicons:user-20-solid text-white w-6 h-6 aspect-square" />
      </div>
    </div>
  );
}
