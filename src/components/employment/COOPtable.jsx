import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function CoopTable({ coopTable }) {
    console.log("Received coopTable:", coopTable);

    const rows = coopTable?.coopInformation ?? [];
    console.log("Rows:", rows);

    const columns =
        rows.length > 0
            ? Object.keys(rows[0]).map(key => ({
                  field: key,
                  header: key.charAt(0).toUpperCase() + key.slice(1)
              }))
            : [];

    console.log("Columns:", columns);

    return (
        <div className="card">
            <h2>{coopTable?.title}</h2>

            <DataTable value={rows} tableStyle={{ minWidth: '50rem' }}>
                {columns.map(col => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
