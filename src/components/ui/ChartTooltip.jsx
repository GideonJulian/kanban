// components/CustomTooltip.jsx
export default function ChartTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white shadow-md rounded-md px-4 py-2 text-sm border border-gray-200">
      <p className="text-muted-foreground">This Month</p>
      <p className="text-blue-600 font-bold text-base">
        {payload[0].value.toLocaleString()}
      </p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}
    