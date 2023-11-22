import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from '../Cards';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css'


export default ({data}) => {
    return <>

            <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // onSwiper={setSwiperRef}
        slidesPerView={5}
        // centeredSlides={true}
        spaceBetween={10}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        navigation = {{nextEl : '.arrow-left', prevEl: '.arrow-right'}}
        virtual
      >
        
        {data.map((card) => (<SwiperSlide key={card.id}><Cards
            imgSrc={card.image}
            follows={card.follows}
            label={card.title}
            /></SwiperSlide>))}                 
      </Swiper>
            <button className='arrow-left-arrow'>Prev</button>            
            <button className='arrow-right-arrow'>Next</button>

    </>
}