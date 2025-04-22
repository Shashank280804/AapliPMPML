const Help: React.FC = () => {
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Help Section</h2>
        <p className="text-gray-700">
          If you are facing issues with the system, please ensure that:
        </p>
        <ul className="list-disc pl-6 my-2 text-gray-600">
          <li>Your internet connection is stable.</li>
          <li>You have the latest browser updates installed.</li>
          <li>You have entered valid credentials.</li>
        </ul>
        <p className="mt-4">For further assistance, contact support@example.com.</p>
      </div>
    );
  };
  
  export default Help;
  