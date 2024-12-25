interface Column {
  readonly title: string;
  readonly render: React.ReactNode | ((row: any) => React.ReactNode);
  readonly width?: string;
}

interface TableProps {
  readonly columns: Column[];
  readonly data: Record<string, any>[];
}

export const Table = ({ columns, data }: TableProps) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-gray-9">
          {columns.map((col, index) => (
            <th
              key={`header-${index}`}
              className="px-4 py-3 text-xs font-semibold text-gray-5 text-left"
              style={{ width: col.width || 'auto' }}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`row-${rowIndex}`} className="h-14 border-b border-gray-9">
            {columns.map((col, colIndex) => (
              <td
                key={`row-${rowIndex}-col-${colIndex}`}
                className="px-4 py-2 text-xs font-semibold text-text-primary">
                {typeof col.render === 'function' ? col.render(row) : col.render}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};