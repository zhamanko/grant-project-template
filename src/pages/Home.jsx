import NewsCard from "../components/NewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Timeline from "../components/TimeLine";

import "../assets/swiperCustom.css";

export default function Home() {
  return (
    <>
      {/* На проєкт */}
      <div className="flex flex-col gap-18 md:gap-0 md:flex-row w-full justify-around items-center py-24 bg-gray-200">
        <div className="text-center">
          <h2 className="text-lg">Гранотовий проєкт</h2>
          <h3 className="text-2xl">
            <strong>НАЗВА ПРОЄКТА</strong>
          </h3>
          <p className="text-base">
            за підримки <strong>НАЗВА </strong>
          </p>
        </div>
        <div className="w-3/4 md:w-1/2">
          <h2 className="text-center font-bold mb-5">Цілі проєкта</h2>
          <ul className="text-justify">
            <li>
              1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti provident repellendus, nesciunt aliquid quis asperiores
              delectus dolores at! Libero nostrum veritatis consequuntur
              pariatur ipsa eos ut quae eum, aspernatur autem.
            </li>
            <li>
              2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              aliquid eaque deserunt quasi itaque soluta quis reprehenderit eius
              blanditiis quidem asperiores provident natus velit, saepe odit
              eveniet. Itaque, magnam? Ea!
            </li>
            <li>
              3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              at officia exercitationem hic nostrum architecto molestias vero
              voluptates non pariatur, natus quam, eos distinctio ex, minima
              consequuntur ipsam cupiditate consectetur?
            </li>
          </ul>
        </div>
      </div>
      {/* Події */}
      <div className="bg-gray-100 py-5 flex flex-col items-center">
        <h2 className="font-bold text-center text-lg mb-5">Новини</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full px-20"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <NewsCard
              title="lorem inpuls"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
              date="Пн, 18 жовтня"
              img="https://placehold.co/400x300/png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="lorem inpuls"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
              date="Пн, 18 жовтня"
              img="https://placehold.co/400x300/png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="lorem inpuls"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
              date="Пн, 18 жовтня"
              img="https://placehold.co/400x300/png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="lorem inpuls"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
              date="Пн, 18 жовтня"
              img="https://placehold.co/400x300/png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="lorem inpuls"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
              date="Пн, 18 жовтня"
              img="https://placehold.co/400x300/png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard
              title="lorem inpuls"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut dignissimos pers"
              date="Пн, 18 жовтня"
              img="https://placehold.co/400x300/png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Про проєкт */}
      <div className="bg-gray-200 py-14 flex flex-col justify-center items-center">
        <h2 className="font-bold text-center mb-5 text-lg">Про проєкт</h2>
        <div className="w-3/4 md:w-1/2 flex flex-col gap-1">
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            tempore voluptate nostrum ipsam atque sit expedita eum quidem magni,
            veniam quis autem ea obcaecati illum rerum alias iure laboriosam
            officiis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores tempore voluptate nostrum ipsam atque sit expedita eum
            quidem magni, veniam quis autem ea obcaecati illum rerum alias iure
            laboriosam officiis!
          </p>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            tempore voluptate nostrum ipsam atque sit expedita eum quidem magni,
            veniam quis autem ea obcaecati illum rerum alias iure laboriosam
            officiis!
          </p>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            tempore voluptate nostrum ipsam atque sit expedita eum quidem magni,
            veniam quis autem ea obcaecati illum rerum alias iure laboriosam
            officiis!
          </p>
        </div>
      </div>
      {/* Етапи проекту */}
      <div className="bg-gray-100 py-8 flex flex-col items-center">
        <h2 className="font-bold text-center mb-5 text-lg">Етапи проєкту</h2>
        <Timeline />
      </div>
      {/* Інформація про організацію та підприємство */}
      <div className="flex flex-col md:flex-row gap-10 bg-gray-200 p-8">
        <div className="text-justify bg-white p-8 rounded-xl">
          <h2 className="font-bold text-center mb-5 text-lg">
            Інформація про організацію
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            repellendus distinctio perspiciatis explicabo eligendi quam qui
            architecto voluptatum magnam voluptatem, odit ad eveniet officia
            alias, provident exercitationem laborum. Voluptate, consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            repellendus distinctio perspiciatis explicabo eligendi quam qui
            architecto voluptatum magnam voluptatem, odit ad eveniet officia
            alias, provident exercitationem laborum. Voluptate, consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            repellendus distinctio perspiciatis explicabo eligendi quam qui
            architecto voluptatum magnam voluptatem, odit ad eveniet officia
            alias, provident exercitationem laborum. Voluptate, consequatur.
          </p>
        </div>
        <div className="text-justify bg-white p-8 rounded-xl">
          <h2 className="font-bold text-center mb-5 text-lg">
            Інформація про підримку
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            repellendus distinctio perspiciatis explicabo eligendi quam qui
            architecto voluptatum magnam voluptatem, odit ad eveniet officia
            alias, provident exercitationem laborum. Voluptate, consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            repellendus distinctio perspiciatis explicabo eligendi quam qui
            architecto voluptatum magnam voluptatem, odit ad eveniet officia
            alias, provident exercitationem laborum. Voluptate, consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
            repellendus distinctio perspiciatis explicabo eligendi quam qui
            architecto voluptatum magnam voluptatem, odit ad eveniet officia
            alias, provident exercitationem laborum. Voluptate, consequatur.
          </p>
        </div>
      </div>
    </>
  );
}
