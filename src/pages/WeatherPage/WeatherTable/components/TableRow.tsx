import React from "react";
import Button from 'components/Button/Button';

const TableRow: React.FC<any> = (props: any) => {
    return <tr>
        <td>{props.item.id}</td>
        <td>{props.item.station}</td>
        <td>{props.item.measureDate}</td>
        <td>{props.item.measureHour}</td>
        <td>{props.item.temperature}</td>
        <td>{props.item.windSpeed}</td>
        <td><Button variant="primary" text="Edit" /> <Button variant="danger" text="Delete" onClick={() => {props.deleteAction(props.item.id)}}/></td>
    </tr>
};

export default TableRow;