import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Profile_img.jpg"
          alt="This is seema photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, i am Seema Kumari</h1>
      <p>
        I volg about web development - especially frontend frame works like
        React Js.
      </p>
    </section>
  );
}

export default Hero;
