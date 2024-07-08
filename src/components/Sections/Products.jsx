import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/5-IFU-BGA_1-2.png";
import ProjectImg2 from "../../assets/img/projects/finecheck bca.png";
import ProjectImg3 from "../../assets/img/projects/Softstyle hb.png";
// import ProjectImg4 from "../../assets/img/projects/ultra.png";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/ultra.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Products</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Finecheck BGA 100"
                text="A handheld bloo d analyzer that delivers lab-quality, diagnostic results in minutes."
                action={() => alert("clicked")}
              />
              <BtnWrapper>
                <a href="/products/Finechek BGA 100/finecheck bronchure.pdf" target="_blank" rel="noopener noreferrer">
                  <FullButton title="BGA 100 Brochure" />
                </a>
              </BtnWrapper>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Finecheck BCA 100"
                text="A fully automated biochemistry analyzer from Goldsite Diagnostics Inc, its a benchtop analyzer."
                action={() => alert("clicked")}
              />
              <BtnWrapper>
                <a href="/products/Finechek BCA 100/finecheck bronchure.pdf" target="_blank" rel="noopener noreferrer">
                  <FullButton title="BCA 100 Brochure" />
                </a>
              </BtnWrapper>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Hemoglobin Testing System"
                text="The Softstyle Hemoglobin Testing System monitors hemoglobin levels with easy data management options.."
                action={() => alert("clicked")}
              />
              <BtnWrapper>
                <a href="/products/Softstyle HB Meter/finecheck bronchure.pdf" target="_blank" rel="noopener noreferrer">
                  <FullButton title="HB Meter Brochure" />
                </a>
              </BtnWrapper>
            </div>
          </div>
          <div className="row textCenter">
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Softstyle Ultra"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
              <BtnWrapper>
                <a href="/products/Softstyle Ultra/finecheck bronchure.pdf" target="_blank" rel="noopener noreferrer">
                  <FullButton title="Softsyle Ultra Brochure" />
                </a>
              </BtnWrapper>
            </div> */}
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div> */}
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div> */}
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              {/* <h4 className="font15 semiBold">A few words about company</h4> */}
              <h2 className="font40 extraBold">Softstyle Ultra</h2>
              <p className="font12">
              Softstyle Ultra is a blood glucose monitoring system designed to help you monitor your blood glucose levels, suitable for both self-testing and professional use.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
              <a href="/products/Softstyle Ultra/finecheck bronchure.pdf" target="_blank" rel="noopener noreferrer">
                  <FullButton title="Softsyle Ultra Brochure" />
                </a>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  {/* <FullButton title="Contact Us" action={() => alert("clicked")} border /> */}
                  <Link activeClass="active" style={{ padding: "10px 15px", }} to="contact" spy={true} smooth={true} offset={-80}>
                    Contact Us
                  </Link>
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 190px;
  margin: 0 auto;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
