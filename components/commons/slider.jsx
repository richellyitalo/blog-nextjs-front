import SliderLib from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export default function Slider () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const Img = styled.img`
    width: 100%;
    height: auto;
  `

  return (
    <div className="container mx-auto text-center">
      <SliderLib {...settings}>
        <div>
          <Img src="https://cdn.pixabay.com/photo/2020/10/09/13/12/man-5640540_960_720.jpg" />
        </div>
        <div>
          <Img src="https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg" />
        </div>
      </SliderLib>
    </div>
  );
}