import TodoList from '../components/TodoList'
import InputData from '../components/InputData'
import {Col, Container, Row} from "react-bootstrap";

export default function Main() {
    return (
        <Container>
            <Row>
                <Col><TodoList/></Col>
                <Col><InputData/></Col>
            </Row>
        </Container>);
}
