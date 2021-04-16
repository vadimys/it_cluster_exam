import {Button, Card} from "react-bootstrap";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import textAction from "../redux/actions/TextActions";

export default function TodoList() {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.text);
    const onRemove = (e) => {
        dispatch(textAction.remove(e.currentTarget.id));
    }

    return (
        <Card className='mb-3' border='success'>
            <Card.Header as={'h3'} className='text-center'>TODO list!</Card.Header>
            {data.length > 0 ?
                <Card.Body>{data.map((value, index) =>
                    <div key={index}>{index + 1}{'. '}{value}
                        <Button
                            id={index}
                            className='ml-3'
                            onClick={onRemove}>X</Button></div>
                )}</Card.Body>
                : <div>NO DATA!</div>}
        </Card>
    );
}
