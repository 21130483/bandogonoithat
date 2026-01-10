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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Second slide" />*/}
                <Image
                    src={"/images/products/1.jpg"}
                    className="d-block w-100"
                    alt="Second slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<ExampleCarouselImage text="Third slide" />*/}
                <Image
                    src={"/images/products/1.jpg"}
                    className="d-block w-100"
                    alt="Third slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SecondHomePage;