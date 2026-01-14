import {Col, Container, Form, Row} from "react-bootstrap";
import "../../css/Arrange.css"

function Arrange(){
    return (
        <Container>
            <Row className="gy-3">
                <span className={"title"}>
                    <h1>Kết quả tìm kiếm "s"</h1>

                </span>
                <Col md={12} style={{display: "flex"}}>
                    <div className={"gy-3 mb-3"} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                        <Form>
                            <div key={`inline-radio`} className="d-flex align-items-center gap-4 flex-wrap">
                                <span className="fw-bold" style={{ fontSize: "18px", color: "#333" }}>
                                    Sắp xếp theo:
                                </span>

                                <Form.Check
                                    inline
                                    label="Giá giảm dần"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                    className="custom-radio"
                                />
                                <Form.Check
                                    inline
                                    label="Giá tăng dần"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-2"
                                    className="custom-radio"
                                />
                                <Form.Check
                                    inline
                                    label="Mới nhất"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-3"
                                    className="custom-radio"
                                />
                                <Form.Check
                                    inline
                                    label="Cũ nhất"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-4"
                                    className="custom-radio"
                                />
                            </div>
                        </Form>
                    </div>

                    <div>

                    </div>
                </Col>


            </Row>
        </Container>
    )
}
export default Arrange