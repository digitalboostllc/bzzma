export default async function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-600 mb-4">
          If you can see this styled properly, Tailwind is working!
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Test Button
        </button>
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          ✅ Success: Tailwind CSS is working correctly!
        </div>
      </div>
    </div>
  );
}
