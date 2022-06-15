import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperSheet from "../SwiperSheet/SwiperSheet";
import Styles from "./CommonSocialsLinks.module.scss";

const CommomSocialsLinks: React.FC<{ data: any }> = ({ data }) => {
  const router = useRouter();
  return (
    <SwiperSheet>
      {data.map((obj: any, index: number) => (
        <SwiperSlide key={index} className={Styles.iconsContainer}>
          {obj.map((item: any, index: number) => (
            <div
              key={index}
              className={clsx(
                Styles.iconsContainer__icons,
                index === obj.length - 1 &&
                  index % 2 === 0 &&
                  Styles.iconsContainer__fullRow
              )}
              onClick={() => router.push(item.href)}
            >
              <div
                className={Styles.iconsContainer__icons__imgContainer}
                style={{ backgroundColor: `${item.bgColor}` }}
              >
                <img src={item.icon_link} alt="Links Images" />
              </div>
              <p className={Styles.iconsContainer__icons__iconsName}>
                {item.name}
              </p>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </SwiperSheet>
  );
};

export default CommomSocialsLinks;
