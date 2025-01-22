
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    bannerFour,
    bannerOne,
    bannerThree,
    bannerTwo
} from "../assets"
import Slider from "react-slick";
import CardProducts from "../components/CardProducts";
import { useSelector } from "react-redux";

const Home = () => {
    const { product } = useSelector(root => root)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className="container mt-4">
            <Slider {...settings}>
                <img src={bannerOne} className="img-fluid" alt="/banner/banner_1.jpeg" />
                <img src={bannerTwo} className="img-fluid" alt="/banner/banner_2.jpeg" />
                <img src={bannerThree} className="img-fluid" alt="/banner/banner_3.jpeg" />
                <img src={bannerFour} className="img-fluid" alt="/banner/banner_4.jpeg" />
            </Slider>
            <div className="row mt-5">
                {
                    product?.map((p, idx) => <CardProducts product={p} key={idx} />)
                }
            </div>
        </div>
    )
}

export default Home