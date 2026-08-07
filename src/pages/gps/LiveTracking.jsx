import { MapPinned, Users, Wifi } from "lucide-react";

export default function LiveTracking() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Live GPS Tracking
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor technicians' live locations and availability.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Online Technicians</p>
              <h2 className="text-3xl font-bold mt-2">8</h2>
            </div>

            <Users className="text-blue-600" size={40} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Currently Working</p>
              <h2 className="text-3xl font-bold mt-2">5</h2>
            </div>

            <MapPinned className="text-green-600" size={40} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">GPS Status</p>
              <h2 className="text-3xl font-bold mt-2">Connected</h2>
            </div>

            <Wifi className="text-emerald-600" size={40} />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Technician Live Map
        </h2>

        <div className="h-[500px] rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <MapPinned
              size={60}
              className="mx-auto text-gray-400"
            />

            <h3 className="text-lg font-semibold mt-4">
              Live GPS Map
            </h3>

            <p className="text-gray-500 mt-2">
              Leaflet Map will be displayed here.
            </p>
          </div>
        </div>
      </div>

      {/* Technician Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">
          Active Technicians
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Technician</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Current Job</th>
              <th className="text-left py-3">Location</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-4">John Doe</td>
              <td className="text-green-600">Online</td>
              <td>Fiber Repair</td>
              <td>Barangay Poblacion</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">Michael Cruz</td>
              <td className="text-blue-600">Traveling</td>
              <td>Router Installation</td>
              <td>Barangay San Isidro</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}