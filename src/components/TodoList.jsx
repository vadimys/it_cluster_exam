import {Card} from "react-bootstrap";
import React from "react";
import {useSelector} from "react-redux";

export default function TodoList() {
    const {data} = useSelector(state => state.text);

    return (
        <Card className='mb-3' border='success'>
            <Card.Header as={'h3'} className='text-center'>TODO list!</Card.Header>
            {data.length > 0 ?
                <Card.Body>{data.map((value, index) => <div key={index}>{value}</div>)}</Card.Body>
                : <div>NO DATA!</div>}
        </Card>
    );
}
