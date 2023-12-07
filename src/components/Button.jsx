// eslint-disable-next-line react/prop-types
export default function Button({text, type}) {
  return (
    <button
      type={type}
      className="rounded px-4 py-2 w-full text-white text-2xl font-bold
      bg-gradient-to-r from-sky-500 to-indigo-500"
    >
     {text}
    </button>
  );
}
