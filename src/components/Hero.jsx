import styles from "../style";
import { discount, robot } from "../assets";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Typewriter from 'typewriter-effect';

const Hero = () => (
  <section className={`flex md:flex-row flex-col p-2 ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px -6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[60px]">
          The Next <br className="sm:block hidden" />
          {/* <Typewriter>
            <span className="text-gradient">Generation</span>{"\n"}
            </Typewriter> */}
          <Typewriter
            options={{
              strings: ['<span style="background-image: linear-gradient(to right, #56ab2f, #a8e063); -webkit-background-clip: text; color: transparent;">Generation</span>'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100.8px] leading-[60px] w-full">
        Waste Management
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <Typewriter
        options={{
          strings: [
            '<span style="background-image: linear-gradient(to right, #56ab2f, #a8e063); -webkit-background-clip: text; color: transparent;">Transforming Waste</span>',
            '<span style="background-image: linear-gradient(to right, #56ab2f, #a8e063); -webkit-background-clip: text; color: transparent;">Empowering Communities</span>',
            '<span style="background-image: linear-gradient(to right, #56ab2f, #a8e063); -webkit-background-clip: text; color: transparent;">Shaping Tomorrow</span>',

        ],
          autoStart: true,
          loop: true,
        }}
      />
      </p>
      <div className="ss:flex hidden md:mr-4 mr-0 mt-4">
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
