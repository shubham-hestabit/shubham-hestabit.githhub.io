export const DataTable = ({ data }) => {
    return (
        <div className='table-container table-responsive fs-3'>
            <table className="table table-danger table-bordered border-black table-striped">
                <thead>
                    <tr>
                        {data.headers.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, idx) => (
                                <td key={idx}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
