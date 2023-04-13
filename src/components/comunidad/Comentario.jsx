export default function Comentario({ user, content }) {
  return (
    <>
      <div className="comentario grid grid-cols-[auto_auto_auto_1fr] items-center">
        <div className="card-profile row-span-1 mr-2">
          <img
            src={user && user.photoURL ? user.photoURL : '/assets/profile.jpg'}
            alt=""
            className="h-4 w-4 rounded-full"
          />
        </div>
        <div className="card-name">
          <p className="text-[11px] font-semibold">
            {user && user.displayName ? user.displayName : 'Carlos Guzmán'}
          </p>
        </div>
        <div className="card-date text-gray row-start-1 col-start-3 text-[9px] flex  mt-1 ml-1">
          13 ABR 2023
        </div>
        <div className="comentario text-[9px] col-start-2 col-span-3">
          {content}
        </div>
      </div>

      <hr className="my-1" />
    </>
  );
}
