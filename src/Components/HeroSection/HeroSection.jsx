import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const HeroSection = () => {
    return (
        <div className='px-8 py-6'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src="https://static.vecteezy.com/system/resources/previews/052/368/787/non_2x/frosty-landscape-at-sunrise-with-silhouetted-trees-in-winter-photo.jpeg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_11065968.jpg?crop=106%2C0%2C1706%2C1280&wid=800&hei=600&scl=2.1333333333333333" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://static.vecteezy.com/system/resources/previews/052/368/787/non_2x/frosty-landscape-at-sunrise-with-silhouetted-trees-in-winter-photo.jpeg" alt="" />
                </SwiperSlide>

                {/* <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25ge-EwMVhMcAsMV0qjAZjdRRg4Na7UiWOw&s" alt="" />
            </SwiperSlide> */}

                <SwiperSlide>
                    <img src="https://static.vecteezy.com/system/resources/previews/052/368/787/non_2x/frosty-landscape-at-sunrise-with-silhouetted-trees-in-winter-photo.jpeg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_11065968.jpg?crop=106%2C0%2C1706%2C1280&wid=800&hei=600&scl=2.1333333333333333" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://static.vecteezy.com/system/resources/previews/052/368/787/non_2x/frosty-landscape-at-sunrise-with-silhouetted-trees-in-winter-photo.jpeg" alt="" />
                </SwiperSlide>

                {/* <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25ge-EwMVhMcAsMV0qjAZjdRRg4Na7UiWOw&s" alt="" />
            </SwiperSlide> */}
                ...
            </Swiper>
        </div>
    );
};

export default HeroSection;