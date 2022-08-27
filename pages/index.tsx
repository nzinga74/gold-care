import type { NextPage } from "next";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import CheckLabel from "../clients/components/CheckLabel";
import Footer from "../clients/components/Footer";
import Header from "../clients/components/Header";
import { AboutSection, PriceSection, FormPrice } from "./styled";
const Home: NextPage = () => {
  return (
    <>
      <div className="layout-container">
        <Header />
        <AboutSection>
          <div className="left-side">
            <div className="img-container">
              <div className="round-btn">
                <picture>
                  <source
                    media="(max-width:650px)"
                    srcSet="/icon2.png"
                  ></source>
                  <img src="/icon1.png" />
                </picture>
              </div>
              <picture>
                <source media="(max-width:650px)" srcSet="/img4.png"></source>
                <img src="/img1.png" srcSet="/img1.png" />
              </picture>
            </div>
          </div>
          <div className="right-side">
            <h2>GOLDCARE™</h2>
            <h3>Who we are</h3>
            <p>
              At GoldCare™ Health & Wellness, our main priority is to serve each
              patient’s best interest and promote medical freedom. Our
              philosophy is to first build trust and mutual respect between
              patients and GoldCare™ providers. Because we don’t allow
              government or insurance to control healthcare decisions, the
              patient-physician relationship can flourish. The influences that
              guide our recommendations are based only on best medical practices
              tailored to your specific health needs. Our doctors will spend
              time getting to know you, including your medical history and your
              wellness goals. We will then discuss treatment options and provide
              you with the information needed to make fully informed
              decisions.GoldCare™ Health & Wellness works to ensure medical
              freedom for you while building a movement based on the principles
              of liberty, health, and justice. These principles will expand to
              your local community as we build relationships and partnerships to
              provide a refuge of health and wellness for all who join us.
            </p>
          </div>
        </AboutSection>
        <PriceSection>
          <h2 className="title">NO SURPRISE FEES</h2>
          <h3 className="sub-title">Simple, transparent pricing.</h3>
          <div className="fly">
            <img src="/img3.png" />
          </div>
          <div>
            <div className="checking-side">
              <h2>Covid Acute Care</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et:
              </p>
              <CheckLabel
                icon={<FaCheckCircle size={24} color={"#E7AC4D"} />}
                text="Prescriptions as needed and indicated to prevent and treat COVID-19 "
              />
              <CheckLabel
                icon={<FaCheckCircle size={24} color={"#E7AC4D"} />}
                text="Natural therapies for COVID-19 "
              />
              <CheckLabel
                icon={<FaCheckCircle size={24} color={"#E7AC4D"} />}
                text="Cutting edge medical news from unbiased doctors"
              />
              <CheckLabel
                icon={<FaCheckCircle size={24} color={"#E7AC4D"} />}
                text="Week access to GoldCare Member Portal for educational material and classes "
              />
            </div>
            <div className="right-side">
              <FormPrice>
                <div className="left-side">
                  <CheckLabel
                    text="Individual"
                    icon={<FaUser size={24} color={"#E7AC4D"} />}
                  />
                  <button>One-time fee</button>
                </div>
                <div className="right-side">
                  <p>$150</p>
                </div>
              </FormPrice>
              <button className="send-button">Get Care Now</button>
            </div>
          </div>
        </PriceSection>
      </div>
      <Footer />
    </>
  );
};
export default Home;
