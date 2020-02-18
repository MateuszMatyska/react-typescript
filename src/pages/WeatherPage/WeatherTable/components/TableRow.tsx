import React from "react";

const TableRow: React.FC<any> = (props: any) => {
    return <tr>
        <td>{props.item.id}</td>
        <td>{props.item.station}</td>
        <td>{props.item.measureDate}</td>
        <td>{props.item.measureHour}</td>
        <td>{props.item.temperature}</td>
        <td>{props.item.windSpeed}</td>
        <td></td>
    </tr>
};

export default TableRow;