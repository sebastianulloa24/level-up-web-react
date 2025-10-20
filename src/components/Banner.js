import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImagenCarousel from './ImagenCarousel';

function BannerInicio() {
    return (
        <Carousel className='text-center'>
            <Carousel.Item>
                <ImagenCarousel src="../assets/imagenes/index/banner-wukong.jpg"
                    alt="Banner juegos" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ImagenCarousel src="/assets/imagenes/index/banner-wukong.jpg" alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <ImagenCarousel src='../assets/imagenes/index/banner-RTX5060.jpg'/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerInicio;