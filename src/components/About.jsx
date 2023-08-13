import styles from "../style";
const About = () => (
  <section id="features" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>About Us</h2>
      <img src="https://media.istockphoto.com/id/845816364/photo/garbage-pile-in-trash-dump-or-landfill-pollution-concept.jpg?s=612x612&w=0&k=20&c=FdBKHTjcwj9orqdO0Y392qXHIa9po9Y1t6VAaCm2oxQ=" />
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      s a leading waste management company dedicated to sustainable solutions for businesses, municipalities, and individuals. Our experienced team prioritizes responsible waste disposal, resource recovery, and environmental compliance. We offer a wide range of services, including waste collection, recycling, composting, and hazardous waste disposal. By choosing us, you're choosing a partner committed to a cleaner, greener future and a healthier planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    </div>
  </section>
);

export default About