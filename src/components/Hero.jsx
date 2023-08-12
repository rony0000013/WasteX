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
          <Typewriter
            options={{
              strings: [
                'The Next <span><br/></span><span style="background-image: linear-gradient(to right, #56ab2f, #a8e063); -webkit-background-clip: text; color: transparent;">Generation</span> <span><br/></span><span -webkit-background-clip: text; color: transparent;">Waste</span><span><br/></span><span style="font-size :42px"-webkit-background-clip: text; color: transparent;">Management</span>',
            ],
              autoStart: true,
              loop:true,
              delay:100,
            }}
          /> <br className="sm:block hidden" />
        </h1>
      </div>
      <div className="h-auto">
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Transforming Waste<br/> Empowering Communities Shaping Tomorrow
      </p>
      </div>
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
      <button className="btn btn-active btn-success">AI Help</button>
      <div className="ml-4">
        <button className="btn btn-active btn-success">Get Started</button>
      </div>
    </div>
  </section>
);

export default Hero;
