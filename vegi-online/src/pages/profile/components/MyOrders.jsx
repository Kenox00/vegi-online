import { MoreVertical } from 'lucide-react';

const MyOrders = () => {
  const orders = [
    {
      id: "#123920",
      items: "5 Items",
      date: "24 Mar, 2024",
      amount: "400,000 RWF",
      status: "Delivered"
    },
    {
      id: "#123920",
      items: "5 Items",
      date: "24 Mar, 2024",
      amount: "400,000 RWF",
      status: "Delivered"
    },
    {
      id: "#123920",
      items: "5 Items",
      date: "24 Mar, 2024",
      amount: "400,000 RWF",
      status: "Delivered"
    },
    {
      id: "#123920",
      items: "5 Items",
      date: "24 Mar, 2024",
      amount: "400,000 RWF",
      status: "Delivered"
    },
    {
      id: "#123920",
      items: "5 Items",
      date: "24 Mar, 2024",
      amount: "400,000 RWF",
      status: "Delivered"
    },
    {
      id: "#123920",
      items: "5 Items",
      date: "24 Mar, 2024",
      amount: "400,000 RWF",
      status: "Delivered"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">Delivery Orders</h1>
        <span className="bg-gray-100 px-2 py-1 rounded-full text-sm">8</span>
      </div>

      {/* Desktop and Tablet View */}
      <div className="hidden sm:block w-full overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-4 px-4 text-gray-500 font-normal">Order ID</th>
              <th className="text-left py-4 px-4 text-gray-500 font-normal">Items</th>
              <th className="text-left py-4 px-4 text-gray-500 font-normal">Ordered On</th>
              <th className="text-left py-4 px-4 text-gray-500 font-normal">Amount</th>
              <th className="text-left py-4 px-4 text-gray-500 font-normal">Status</th>
              <th className="text-left py-4 px-4 text-gray-500 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-4 px-4">{order.id}</td>
                <td className="py-4 px-4">{order.items}</td>
                <td className="py-4 px-4">{order.date}</td>
                <td className="py-4 px-4">{order.amount}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    {order.status}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium">{order.id}</span>
              <button className="text-gray-400">
                <MoreVertical size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Items</p>
                <p>{order.items}</p>
              </div>
              <div>
                <p className="text-gray-500">Amount</p>
                <p>{order.amount}</p>
              </div>
              <div>
                <p className="text-gray-500">Ordered On</p>
                <p>{order.date}</p>
              </div>
              <div>
                <p className="text-gray-500">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  {order.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;