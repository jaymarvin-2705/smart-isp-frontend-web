export default function Table({ headers, children }) {
    return (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>{children}</tbody>
            </table>
        </div>
    );
}