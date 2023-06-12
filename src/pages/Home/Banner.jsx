import React from "react";
import { Container } from "../../components/Container";
import banner from "../../assets/banner.png";
import bannerWT from "../../assets/bannerWT.png";
import slider1 from "../../assets/slider_1.jpg";
import slider2 from "../../assets/slider_2.jpg";
import { useTheme } from "../../contexts/ThemeContext";
import Button from "../../components/shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export const Banner = () => {
  const { isDark } = useTheme();
  //TODO: set autoplat delay 2500
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 25000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
    >
      <SwiperSlide>
        <div className="min-h-[90vh] p-10 md:p-20 dark:bg-slate-900 dark:text-white text-slate-700">
          <Container>
            <div className="flex md:flex-row flex-col justify-center gap-5 items-center">
              <div className="text-center md:text-start">
                <motion.h1
                  animate={{ fontSize: "2.25rem" }}
                  className="text-xl md:text-4xl font-semibold text-primary"
                >
                  We Believe in You
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                  className="text-5xl md:text-7xl font-bold my-5"
                >
                  Prove Yourself To Be The Best
                </motion.p>
                <motion.p
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2, duration: 0.1 }}
                  className="text-justify mb-5"
                >
                  Train with Expert Instructors and Become a Martial Arts
                  Champion. Build Strength, Agility, and Self-Defense Skills
                  with Martial Arts. Unlock Your Inner Warrior and Master the
                  Art of Martial Arts
                </motion.p>
                <Button
                  text={"Admit Today"}
                  style={"bg-primary text-black dark:text-white"}
                />
              </div>
              <motion.img
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, duration: 0.1 }}
                className="md:w-1/2"
                src={isDark ? bannerWT : banner}
                alt=""
              />
            </div>
          </Container>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full h-[90vh] object-cover blur-sm"
            src={slider1}
            alt=""
          />
          <div className="absolute bg-black bg-opacity-50 p-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-6xl font-bold">BE A MASTER</h1>
            <p className="text-3xl my-10">
              Journey Towards the Pinnacle of Martial Arts Excellence and Earn
              the Coveted Black Belt.
            </p>
            <Button text={"GRAB NOW"} style={""} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full h-[90vh] object-cover blur-sm"
            src={slider2}
            alt=""
          />
          <div className="absolute bg-black bg-opacity-50 p-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-6xl font-bold">Great Environment</h1>
            <p className="text-3xl my-10">
              Step into Our Martial Arts Sanctuary, Where the Perfect Balance of
              Tradition, Expertise, and Personal Growth Converge
            </p>
            <Button text={"START TODAY"} style={""} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
