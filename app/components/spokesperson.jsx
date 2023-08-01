export default function SpokesPerson({ imageUrl, alt, attribution }) {
  return (
    <aside>
      <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gray-200 border-2 border-indigo-800">
        <img src={imageUrl} alt={alt} className="w-full h-full object-cover" />
      </div>
      <button type="button" className="text-xs text-gray-400 hover:underline">
        Attribution
      </button>
    </aside>
  );
}
