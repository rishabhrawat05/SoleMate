import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { TrendingUp, BarChart3, Calendar } from 'lucide-react';

const ChartSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly'>('monthly');

  const weeklyData = [
    { name: 'Mon', sales: 120, revenue: 2400 },
    { name: 'Tue', sales: 190, revenue: 3800 },
    { name: 'Wed', sales: 150, revenue: 3000 },
    { name: 'Thu', sales: 280, revenue: 5600 },
    { name: 'Fri', sales: 320, revenue: 6400 },
    { name: 'Sat', sales: 400, revenue: 8000 },
    { name: 'Sun', sales: 350, revenue: 7000 }
  ];

  const monthlyData = [
    { name: 'Jan', sales: 4000, revenue: 80000 },
    { name: 'Feb', sales: 3000, revenue: 60000 },
    { name: 'Mar', sales: 5000, revenue: 100000 },
    { name: 'Apr', sales: 4500, revenue: 90000 },
    { name: 'May', sales: 6000, revenue: 120000 },
    { name: 'Jun', sales: 5500, revenue: 110000 },
    { name: 'Jul', sales: 7000, revenue: 140000 },
    { name: 'Aug', sales: 6500, revenue: 130000 },
    { name: 'Sep', sales: 8000, revenue: 160000 },
    { name: 'Oct', sales: 7500, revenue: 150000 },
    { name: 'Nov', sales: 9000, revenue: 180000 },
    { name: 'Dec', sales: 10000, revenue: 200000 }
  ];

  const currentData = timeRange === 'weekly' ? weeklyData : monthlyData;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <p className="text-gray-900 dark:text-white font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="font-medium">
              {entry.name}: {entry.name === 'revenue' ? '$' : ''}{entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analytics" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sales <span className="text-blue-600">Analytics</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track our performance with real-time sales data and revenue insights
          </p>
        </motion.div>

        <div ref={ref} className="space-y-8">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {/* Chart Type Toggle */}
            <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setChartType('line')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  chartType === 'line'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Line Chart</span>
              </button>
              <button
                onClick={() => setChartType('bar')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  chartType === 'bar'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Bar Chart</span>
              </button>
            </div>

            {/* Time Range Toggle */}
            <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setTimeRange('weekly')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  timeRange === 'weekly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Weekly</span>
              </button>
              <button
                onClick={() => setTimeRange('monthly')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  timeRange === 'monthly'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Monthly</span>
              </button>
            </div>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          >
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                {chartType === 'line' ? (
                  <LineChart data={currentData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis
                      dataKey="name"
                      className="text-gray-600 dark:text-gray-300"
                    />
                    <YAxis className="text-gray-600 dark:text-gray-300" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#3B82F6', strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#F97316"
                      strokeWidth={3}
                      dot={{ fill: '#F97316', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: '#F97316', strokeWidth: 2 }}
                    />
                  </LineChart>
                ) : (
                  <BarChart data={currentData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis
                      dataKey="name"
                      className="text-gray-600 dark:text-gray-300"
                    />
                    <YAxis className="text-gray-600 dark:text-gray-300" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="sales" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="revenue" fill="#F97316" radius={[4, 4, 0, 0]} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Total Sales',
                value: currentData.reduce((sum, item) => sum + item.sales, 0),
                change: '+12.5%',
                positive: true
              },
              {
                title: 'Total Revenue',
                value: `$${currentData.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}`,
                change: '+8.3%',
                positive: true
              },
              {
                title: 'Average Order',
                value: `$${Math.round(
                  currentData.reduce((sum, item) => sum + item.revenue, 0) /
                  currentData.reduce((sum, item) => sum + item.sales, 0)
                )}`,
                change: '-2.1%',
                positive: false
              }
            ].map((stat, index) => (
              <div
                key={stat.title}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  {stat.title}
                </h3>
                <div className="flex items-end justify-between">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      stat.positive ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;