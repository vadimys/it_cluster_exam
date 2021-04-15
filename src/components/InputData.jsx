import {Button, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import textAction from '../redux/actions/TextActions'

export default function InputData() {
    const dispatch = useDispatch();
    const [info, setInfo] = useState('');
    const handleChange = (e) => {
        setInfo(e.target.value);
    }
    const onAdd = () => {
        if (info !== '') {
            dispatch(textAction.add(info));
        }
    }

    return (
        <>
            <FormControl type="text" value={info} onChange={handleChange}
                         placeholder="Please add task"
                         className='form-control'/>
            <Button onClick={onAdd}>ADD</Button>
        </>
    );
}
