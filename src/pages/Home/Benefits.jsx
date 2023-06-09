import image1 from "../../assets/benfits.jpg";
import benefit1 from "../../assets/stamina.png";
import benefit2 from "../../assets/strenght.png";
import benefit3 from "../../assets/self-defense.png";
import benefit4 from "../../assets/cooler.png";
import benefit1WT from "../../assets/staminaWT.png";
import benefit2WT from "../../assets/strenghtWT.png";
import benefit3WT from "../../assets/self-defenseWT.png";
import benefit4WT from "../../assets/coolerWT.png";

import { Container } from "../../components/Container";
import { useTheme } from "../../contexts/ThemeContext";

export const Benefits = () => {
  const { isDark } = useTheme();
  return (
    <div className="p-5 text-center md:text-start md:p-20 dark:bg-slate-800 dark:text-white text-slate-800">
      <Container>
        <div className="md:flex gap-10">
          <img
            className="md:w-1/2 rounded-md object-cover"
            src={image1}
            alt="benefits"
          />
          <div className="mt-5 md:mt-0">
            <h6 className="text-2xl text-primary font-semibold">
              Discover More
            </h6>
            <h1 className="my-3 text-5xl font-bold">
              Benefits Of Learning Martial Arts
            </h1>
            <p className="text-justify">
              Learning martial arts offers a holistic approach to personal
              development. It not only enhances physical fitness, but also
              cultivates mental and emotional well-being.
            </p>
            <div className="grid grid-cols-2 mt-5 gap-5">
              <div className="text-center">
                <img
                  className="w-40 h-40 object-contain mx-auto"
                  src={isDark ? benefit1WT : benefit1}
                  alt="benefit1"
                />
                <h1 className="font-bold text-2xl">Maintain Stamina</h1>
              </div>
              <div className="text-center">
                <img
                  className="w-40 h-40 object-contain mx-auto"
                  src={isDark ? benefit2WT : benefit2}
                  alt="benefit2"
                />
                <h1 className="font-bold text-2xl">Increase Strength</h1>
              </div>
              <div className="text-center">
                <img
                  className="w-40 h-40 object-contain mx-auto"
                  src={isDark ? benefit3WT : benefit3}
                  alt="benefit3"
                />
                <h1 className="font-bold text-2xl">Self Defence</h1>
              </div>
              <div className="text-center">
                <img
                  className="w-40 h-40 object-contain mx-auto"
                  src={isDark ? benefit4WT : benefit4}
                  alt="benefit4"
                />
                <h1 className="font-bold text-2xl">It's Cool</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
