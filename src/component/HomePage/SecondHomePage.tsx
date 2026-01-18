import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';

function SecondHomePage() {
    return (
        <Carousel>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="First slide" />*/}
                <Image
                    src={"/images/products/1.jpg"}
                    className="d-block w-100"
                    alt="First slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3 style={{color:"white"}}> tự nhiên tinh tế, bắt mắt</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Second slide" />*/}
                <Image
                    src={"/images/products/3.png"}
                    className="d-block w-100"
                    alt="Second slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3 style={{color:"white"}}> Đẳng cấp không gian sống hiện đại</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Third slide" />*/}
                <Image
                    src={"/images/products/2.png"}
                    className="d-block w-100"
                    alt="Third slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3 style={{color:"white"}}>phòng khách độc đáo</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SecondHomePage;