import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Container} from "react-bootstrap";
function Bread(){
    return (
        <div style={{backgroundColor: "#F8F9FA",padding:"10px 0"}}>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>

            </Container>
        </div>


    )
}
export default Bread;