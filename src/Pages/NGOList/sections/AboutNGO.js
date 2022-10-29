import React from "react";
import classes from "./AboutNGO.module.css";
import Frame320 from "../../../UI/images/Frame320.png";


const AboutNGO = () => {
  return (
    <section>
      <div className={classes["list--container-sub"]}>
        <div className={classes.content}>
          <div className={classes["image--container1"]}>
            <img src={Frame320} alt="" className={classes.img} />
          </div>{" "}
          <div className={classes["text-main"]}>Donate pool - (Feeding)</div>
          <div className={classes["text-sub"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque rhoncus at semper gravida in non. Fusce neque, potenti
              massa sed nibh scelerisque. Tempor vitae, enim enim mattis nunc,
              urna nam nunc odio. Nulla aenean urna ornare eros, a enim. Sed
              tristique lorem a mollis mauris.
            </p>
            <p>
              Dignissim purus sed id sagittis, purus felis. Consectetur id nunc
              elementum est. Pellentesque diam, arcu volutpat pretium eu magna.
              Pharetra suspendisse amet eu nisl id porta in eu nunc. Mattis quis
              proin a pellentesque. Aliquam aliquam amet pharetra fermentum
              dictumst mattis. In purus facilisis tincidunt libero arcu
              senectus. Justo, leo sed dignissim neque leo suspendisse morbi.
              Vitae, fringilla arcu congue maecenas sed pulvinar posuere congue
              sed. Dignissim amet, vitae ut odio turpis convallis varius
              aliquam. Eget augue cursus quis arcu platea turpis maecenas in.{" "}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutNGO;
