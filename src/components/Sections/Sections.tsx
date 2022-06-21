import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Autoplay, Mousewheel, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Links from "./Links/Links";
// import VLinks from "../VLinks/VLinks/VLinks";
// import Events from "../Events/Events";
import Socials from "./Socials/Socials";
import Contribute from "./Contribute/Contribute";
import MusicLinks from "./MusicLinks/MusicLinks";
import GallerySlider from "../Shared/Sliders/GallerySlider/GallerySlider";
import { useRouter } from "next/router";
import HeroSlider from "@shared/Sliders/HeroSlider/HeroSlider";
export let gmenu = [];
export let sp = null;
const Sections: React.FC<{ data: any }> = ({ data }) => {
  const router = useRouter();
  const { username, section } = router?.query;
  const [swiper, setSwiper] = useState(null);
  console.log(data);

  const { elements, slides } = data;
  const sections = Object.entries({ slides, ...elements }).filter(
    (e) => e[0] != "__typename"
  );
  const [initialSlide, setinitialSlide] = useState(
    section ? sections.map((e: any) => e[0]).indexOf(section) : 0
  );

  console.log({ elements, slides });
  console.log(
    Object.entries({ slides, ...elements }).filter((e) => e[0] != "__typename")
  );

  useEffect(() => {
    setinitialSlide(sections.map((e: any) => e[0]).indexOf(section));
    // if (swiper) swiper.slideTo(0);
    console.log({ section, info: "section changes..." });
  }, [section]);

  gmenu = sections.map((e) => e[0]);

  return (
    <Swiper
      modules={[Pagination, Autoplay, Mousewheel, Navigation]}
      slidesPerView={1}
      mousewheel={true}
      speed={300}
      direction={"vertical"}
      style={{ height: "100vh" }}
      initialSlide={initialSlide}
      onSlideChange={(s) => {
        // router.push(`/${username}?section=${sections[s.realIndex][0]}`);
        if (username)
          router.push(`/${username}?section=${sections[s.realIndex][0]}`);
        else {
          router.push(`/?section=${sections[s.realIndex][0]}`);
        }
        // setCurrentSlide(s.realIndex);
      }}
      onSwiper={(swiper) => {
        sp = swiper;
        console.log(sp, "sp stored.......");

        setSwiper(swiper);
      }}
    >
      {sections.map((sec: any) => {
        console.log({ sec, 0: sec[0], 1: sec[1] });

        switch (sec[0]) {
          case "slides":
            return (
              <SwiperSlide>
                <HeroSlider
                  slides={sec[1]}
                  view="Mobile"
                  parentSwiper={swiper}
                />
              </SwiperSlide>
            );
          case "simple_links":
            return (
              <SwiperSlide>
                <Links links={sec[1]?.links} parentSwiper={swiper} />
              </SwiperSlide>
            );
          case "socials":
            return (
              <SwiperSlide>
                <Socials socials={sec[1]?.socials} parentSwiper={swiper} />
              </SwiperSlide>
            );
          case "gallery":
            return (
              <SwiperSlide>
                <GallerySlider
                  title="Image Gallery"
                  items={sec[1].images}
                  parentSwiper={swiper}
                />
              </SwiperSlide>
            );
          case "videos":
            return (
              <SwiperSlide>
                <GallerySlider
                  title="Video Gallery"
                  items={sec[1].videos}
                  parentSwiper={swiper}
                />
              </SwiperSlide>
            );

          default:
            return (
              <SwiperSlide>
                <Contribute parentSwiper={swiper} />
              </SwiperSlide>
            );
        }
      })}
      {/* <SwiperSlide>
        <VreelSlider
          vreel={data.username.vreel}
          view="Mobile"
          parentSwiper={swiper}
        />
      </SwiperSlide> */}
      {/*  {elements.simple_links && (
        <SwiperSlide>
          <Links links={elements.simple_links.links} parentSwiper={swiper} />
        </SwiperSlide>
      )} */}
      {/*   <SwiperSlide>
        <VLinks parentSwiper={swiper} />
      </SwiperSlide> */}
      {/* <SwiperSlide>
        <Events parentSwiper={swiper} />
      </SwiperSlide> */}
      {/* some test for test */}
      {/*  {elements.socials && (
        <SwiperSlide>
          <Socials socials={elements.socials.socials} parentSwiper={swiper} />
        </SwiperSlide>
      )} */}
      {/* <SwiperSlide>
        <Contribute parentSwiper={swiper} />
      </SwiperSlide> */}
      {/*  <SwiperSlide>
        <MusicLinks parentSwiper={swiper} />
      </SwiperSlide> */}

      {/* {elements?.gallery?.images.length && (
        <SwiperSlide>
          <CommonSliders
            title="Image Gallery"
            items={elements?.gallery?.images}
            parentSwiper={swiper}
          />
        </SwiperSlide>
      )} */}
      {/* {elements?.videos?.videos.length && (
        <SwiperSlide>
          <CommonSliders
            title="Video Gallery"
            items={elements?.videos?.videos}
            parentSwiper={swiper}
          />
        </SwiperSlide>
      )} */}
    </Swiper>
  );
};

export default Sections;
