import Layout from "../../components/layout";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import utilStyles from '../../styles/utils.module.css'

export default function Carousel1({ data }) {
    const banners = data.data.banners

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <Layout>
            <div className="carousel-1">
      {banners.length > 0 && (
        <Carousel responsive={responsive}>
          {banners.slice(0,10).map(banner => (
            <img key={banner.id} src={`${banner.image}`} alt='' className="card--image" />
          ))}
        </Carousel>
      )}
    </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://marketplace.restroapp.com/2/v1/marketplace/homescreen/banners")
    const data = await res.json()

    return { props: { data } }
}