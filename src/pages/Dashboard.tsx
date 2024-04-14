import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
    const data = [
        { title: "Total Users", value: "1,024" },
        { title: "Active Sessions", value: "389" },
        { title: "Total Sales", value: "$12,340" },
        { title: "Feedbacks", value: "180" }
    ];

    const generateSalesData = () => {
        return [
            { name: 'January', Sales: Math.floor(Math.random() * 1000) },
            { name: 'February', Sales: Math.floor(Math.random() * 1000) },
            { name: 'March', Sales: Math.floor(Math.random() * 1000) },
            { name: 'April', Sales: Math.floor(Math.random() * 1000) },
            { name: 'May', Sales: Math.floor(Math.random() * 1000) }
        ];
    };

    const [salesData, setSalesData] = useState(generateSalesData());


    const SalesChart = () => (
        <BarChart width={600} height={300} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sales" fill="#8884d8" />
        </BarChart>
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setSalesData(generateSalesData());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
                {data.map((item, index) => (
                    <div key={index} className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="text-3xl font-bold mt-2">{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="p-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-full">
                        <h2 className="text-lg font-semibold mb-4">Total Users</h2>
                        <div className="w-full">
                            <SalesChart />
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-full">
                        <h2 className="text-lg font-semibold mb-4">Active Sessions</h2>
                        <div className="w-full">
                            <SalesChart />
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-full">
                        <h2 className="text-lg font-semibold mb-4">Total Sales</h2>
                        <div className="w-full">
                            <SalesChart />
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center w-full">
                        <h2 className="text-lg font-semibold mb-4">Feedbacks</h2>
                        <div className="w-full">
                            <SalesChart />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                        <SalesChart />
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                        <SalesChart />
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                        <SalesChart />
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                        <SalesChart />
                    </div>
                </div>
            </div> */}
            {/* <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-10">
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                        <SalesChart />
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                        <SalesChart />
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                    <SalesChart />
                    </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6 w-full h-full md:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
                    <div className="w-full md:w-auto md:min-w-0 min-h-[300px]">
                    <SalesChart />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;
