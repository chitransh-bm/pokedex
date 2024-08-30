/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonLoginImage from "../../public/assets/images/button-login.png";
import LoginHeroImage from "../../public/assets/images/login-hero.png";
import Image from "next/image";
import Header from "@/component/Header";
import Link from "next/link";

const styles = {
  main: {
    backgroundImage: "url('/assets/images/login-bg.jpg')",
  },
};

const Home = () => (
  <div>
    <Header />
    <div
      className="bg-cover bg-top absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-around items-center"
      style={styles.main}
    >
      <Image src={LoginHeroImage} width="320" className="mt-32" alt="login" />
      <div>
        <Link href="/pokedex">
          <Image src={ButtonLoginImage} width="320" alt="button image" />
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
