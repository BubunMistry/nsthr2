"use client"

import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const ClientsSection = () => {
  const swiperRef = useRef(null);

  // Client data with your image paths
  const clients = [
    { id: 1, name: 'Client 1', logo: '/images/clients/TATA Cliq New.svg' },
    { id: 2, name: 'Client 2', logo: '/images/clients/siddha.webp' },
    { id: 3, name: 'Client 3', logo: '/images/clients/saburi.png' },
    { id: 4, name: 'Client 4', logo: '/images/clients/ruby.jpg' },
    { id: 5, name: 'Client 5', logo: '/images/clients/Peerless.png' },
    { id: 6, name: 'Client 6', logo: '/images/clients/medica.svg' },
    { id: 7, name: 'Client 7', logo: '/images/clients/kfc.svg' },
    { id: 8, name: 'Client 8', logo: '/images/clients/Dominos Pizza.svg' },
    { id: 9, name: 'Client 9', logo: '/images/clients/Bosch-logo.svg' },
    { id: 10, name: 'Client 10', logo: '/images/clients/BigBasket.png' },
    { id: 11, name: 'Client 11', logo: '/images/clients/Asian Paints.svg' },
    { id: 12, name: 'Client 12', logo: '/images/clients/Apollo.png' },
    { id: 13, name: 'Client 13', logo: '/images/clients/anvation.jpeg' },
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