export default function LeadsTableLoading() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <tr key={i} className="animate-pulse">
          <td className="p-2">
            <div className="h-10 w-70 rounded bg-slate-600"></div>
          </td>
          <td className="p-2">
            <div className="h-10 w-30 rounded bg-slate-600"></div>
          </td>
          <td className="p-2">
            <div className="h-10 w-50 rounded bg-slate-600"></div>
          </td>
          <td className="p-2">
            <div className="h-10 w-20 rounded bg-slate-600"></div>
          </td>
          <td className="p-2">
            <div className="h-10 w-10 rounded bg-slate-600"></div>
          </td>
          <td className="p-2">
            <div className="h-10 w-20 rounded bg-slate-600"></div>
          </td>
          <td className="p-2">
            <div className="h-10 w-20 rounded bg-slate-600"></div>
          </td>
        </tr>
      ))}
    </>
  );
}
