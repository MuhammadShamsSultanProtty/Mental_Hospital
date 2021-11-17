import { Carousel } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const TopBanner = () => {
  const { user } = useAuth();
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/banner1.jpg"
            alt="First slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Here is some mental patient</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/banner2.jpg"
            alt="Second slide"
            height="400px"
          />

          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/banner3.jpg"
            alt="Third slide"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Patient is cured</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default TopBanner;