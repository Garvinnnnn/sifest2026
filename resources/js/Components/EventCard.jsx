export default function EventCard({ title, date, location, description, category, pendaftar, maksimalPendaftar }) {
    const badgeStyle = {
        Design: 'bg-purple-100 text-purple-800',
        Programming: 'bg-teal-100 text-teal-800',
    };

    return (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-4 pt-4 pb-3 border-b border-gray-100">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${badgeStyle[category] ?? 'bg-gray-100 text-gray-700'}`}>
            {category}
            </span>
            <h2 className="mt-2 text-base font-semibold text-gray-900">{title}</h2>
        </div>

        <div className="px-4 py-3">
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            <div className="mt-3 flex flex-col gap-1.5">
            <span className="text-xs text-gray-400">📅 {date}</span>
            <span className="text-xs text-gray-400">📍 {location}</span>
            </div>
        </div>

        <div className="px-4 py-2.5 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">{pendaftar} / {maksimalPendaftar} pendaftar</span>
            <button className="text-xs font-medium text-blue-600 border border-blue-300 rounded-md px-3 py-1 hover:bg-blue-50 transition">
            Daftar
            </button>
        </div>
        </div>
    );
}
