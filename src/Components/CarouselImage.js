import Carousel from 'react-bootstrap/Carousel';
import './carouselImage.css';

function CarouselImage() {
  return (
    <>
    <div className='carousel-container'>

      <Carousel fade>
        <Carousel.Item>

            <img
              src="/Images/Slide1.png"
              alt="Slide"
              className="d-block w-100"
            />
            
          <Carousel.Caption>
            <h3>Explore Our Vast Book Collection</h3>
            <p>From classic literature to the latest bestsellers, our diverse catalog offers books for every interest and age group. Dive into a world of endless stories and knowledge!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

            <img
              src="/Images/Slide2.png"
              alt="Slide2"
              className="d-block w-100"
            />

          <Carousel.Caption>
            <h3>Search for Books with Ease</h3>
            <p>With our intuitive search feature powered by the Google Books API, finding your next read is just a few clicks away. Explore books by title, author, or genre.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

            <img
              src="/Images/Slide3.png"
              alt="Slide"
              className="d-block w-100"
            />

          <Carousel.Caption>
            <h3>Personalized Book Recommendations</h3>
            <p>
            We offer tailored book suggestions based on your interests. Whether you're into fiction, self-help, or history, we've got something special just for you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
    </>
    
  );
}

export default CarouselImage;