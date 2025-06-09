"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ReferenceDot,
} from "recharts";

import ChartTooltip from "../../components/ui/ChartTooltip";

const data = [
  { month: "Sep", visitors: 24000, sales: 42000 },
  { month: "Oct", visitors: 40000, sales: 39000 },
  { month: "Nov", visitors: 220342123, sales: 45000 }, // highlighted point
  { month: "Dec", visitors: 64000, sales: 42000 },
  { month: "Jan", visitors: 60000, sales: 44000 },
  { month: "Feb", visitors: 72000, sales: 46000 },
  { month: "Mar", visitors: 30000, sales: 41000 },
];
export default function ChartComponent() {
  return (
    <div className="w-full h-96">
      {" "}
      {/* Removed bg-black */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
        >
          <defs>
            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "#374151", dy: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#374151" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(val) => val.toLocaleString()}
            domain={[20000, 80000]}
          />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ strokeDasharray: "3 3", stroke: "#d1d5db" }}
          />

          <Area
            type="monotone"
            dataKey="visitors"
            stroke="#3b82f6"
            fill="url(#colorVisitors)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#448DF2"
            strokeWidth={2}
            dot={false}
          />
   
          <ReferenceDot
            x="Nov"
            y={220342123}
            r={6}
            fill="#3b82f6"
            stroke="#fff"
            strokeWidth={2}
            isFront
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
