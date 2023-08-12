import styles from "../style";
import { FaChevronCircleRight } from "react-icons/fa";
import { discount, robot } from "../assets";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

const Hero = () => (
  <section className={`flex md:flex-row flex-col p-2 ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px -6`}
    >
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount For {" "}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div> */}

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">G e n e r a t i o n</span>{" "}
        </h1>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Waste Management
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Transforming Waste, Empowering Communities, Shaping Tomorrow
      </p>
      <div className="ss:flex hidden md:mr-4 mr-0 mt-4">
        {/* <GetStarted /> */}
        <button className="btn btn-active btn-success">AI Help</button>
        <div className="ml-4">
          <button className="btn btn-active btn-success">Get Started</button>
        </div>
      </div>
    </div>
    <div className="flex-1 flex mb-10">
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[6]"
      />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* <GetStarted /> */}
      {/* <GetStarted /> */}
      <button className="btn btn-active btn-success">AI Help</button>
      <div className="ml-4">
        <button className="btn btn-active btn-success">Get Started</button>
      </div>
    </div>
  </section>
);

export default Hero;
