"use client"

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ClientsSection = () => {
  const swiperRef = useRef(null);

  // Updated client data with unique IDs
  const clients = [
    { id: 1, name: 'Asian Paints', logo: '/images/clients/Asian Paints.png' },
    { id: 2, name: 'Siddha', logo: '/images/clients/siddha.webp' },
    { id: 3, name: 'KFC', logo: '/images/clients/kfc.png' },
    { id: 4, name: 'idfc', logo: '/images/clients/idfc.png' },
    { id: 5, name: 'Domino', logo: '/images/clients/Dominos Pizza.png' },
    { id: 6, name: 'Bosch', logo: '/images/clients/Bosch-logo.png' },
    { id: 7, name: 'Peerless', logo: '/images/clients/Peerless.png' },
    { id: 8, name: 'Medica', logo: '/images/clients/medica.png' },
    { id: 9, name: 'instone', logo: '/images/clients/instone.png' },
    { id: 10, name: 'BigBasket', logo: '/images/clients/BigBasket.png' },
    { id: 11, name: 'Udyogi', logo: '/images/clients/Udyogi.png' },
    { id: 12, name: 'Apollo', logo: '/images/clients/Apollo.png' },
    { id: 13, name: 'Anvation', logo: '/images/clients/anvation.jpeg' },
    { id: 14, name: 'Goliath', logo: '/images/clients/goliath.jpeg' },
    { id: 15, name: 'Lux', logo: '/images/clients/lux.png' },
    { id: 16, name: 'Cove', logo: '/images/clients/cove.png' },
    { id: 17, name: 'encore.png', logo: '/images/clients/encore.png' },
    { id: 18, name: 'eureka.png', logo: '/images/clients/eureka.png' },
    { id: 19, name: 'kpexport', logo: '/images/clients/kpexport.png' },
    { id: 20, name: 'minu', logo: '/images/clients/minu.png' },
    { id: 21, name: 'europe', logo: '/images/clients/europe.png' },
    { id: 22, name: 'Ruby', logo: '/images/clients/ruby.jpg' },
    { id: 23, name: 'Saburi', logo: '/images/clients/saburi.png' },
    { id: 24, name: 'lawani', logo: '/images/clients/lawani.png'},
    { id: 25, name: 'kedia', logo: '/images/clients/kedia.jpeg' },
    { id: 26, name: 'carrental', logo: '/images/clients/carrental.jpeg' },
    { id: 27, name: 'teximo', logo: '/images/clients/teximo.jpeg'},
  ];

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        speed: 5000,
        loop: true,
        freeMode: true,
        breakpoints: {
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          320: { slidesPerView: 2 },
        }
      });
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Clients</h2>

        <div className="px-4">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {clients.map(client => (
                <div key={client.id} className="swiper-slide">
                  <div className="flex items-center justify-center h-32 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                    <div className="relative w-full h-16">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain"
                        quality={100}
                        sizes="(max-width: 768px) 100px, 150px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
