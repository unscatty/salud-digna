export default function Comentario() {
  return (
    <div className="mt-1 w-3xl mr-2">
      <input
        rows={4}
        name="comment"
        id="comment"
        placeholder="Escribe un comentario"
        className="shadow-sm focus:ring-[#3E9F79] p-2 focus:border-[#3E9F79] block w-full sm:text-xs text-sm font-medium bg-light rounded-md h-7 text-gray-700"
        defaultValue={''}
      />
    </div>
  );
}
