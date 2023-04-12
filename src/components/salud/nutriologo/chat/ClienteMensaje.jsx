export default function ClienteMensaje({ message }) {
  return (
    <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-white ring ring-gray-500 text-black ring-1">
      {message}
    </span>
  );
}
