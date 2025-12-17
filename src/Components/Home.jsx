import { Users, UserCheck, UserX, Clock } from "lucide-react";

export const  Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Students Dashboard</h1>
        <p className="text-gray-500">Attendance overview</p>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-blue-100 text-blue-600"><Users /></div>
          <div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <h3 className="text-2xl font-bold">120</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-green-100 text-green-600"><UserCheck /></div>
          <div>
            <p className="text-gray-500 text-sm">Present</p>
            <h3 className="text-2xl font-bold">95</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-100 text-red-600"><UserX /></div>
          <div>
            <p className="text-gray-500 text-sm">Absent</p>
            <h3 className="text-2xl font-bold">15</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600"><Clock /></div>
          <div>
            <p className="text-gray-500 text-sm">Late</p>
            <h3 className="text-2xl font-bold">10</h3>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto mt-10 bg-white rounded-2xl shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Students List</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="p-4">Name</th>
              <th className="p-4">Grade</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">Ali Ahmed</td>
              <td className="p-4">A</td>
              <td className="p-4"><span className="px-3 py-1 rounded-full bg-green-100 text-green-700">Present</span></td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Ayaan Noor</td>
              <td className="p-4">B</td>
              <td className="p-4"><span className="px-3 py-1 rounded-full bg-red-100 text-red-700">Absent</span></td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Mohamed Yusuf</td>
              <td className="p-4">A</td>
              <td className="p-4"><span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">Late</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
