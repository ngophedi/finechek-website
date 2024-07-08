import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
// Assets
import ContactImg3 from "../../assets/img/contact 1.png";
import GoogleMap from '../../components/map/googlemap.js';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_mpnhmy2', 'template_vg1mpjm', form.current, 'Rvd7bkv4PDX1I5IDX')
      .then((result) => {
          console.log('Message Sent Successfully!');
          console.log(result.text);
          form.current.reset();  
      }, (error) => {
          console.log('Failed to Send Message, Please Try Again');
          console.log(error.text);
      });
  };
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">We're Just a Message Away!</h1>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form ref={form} onSubmit={sendEmail}>
              <label className="font19">Full Name:</label>
                  <input type="text" name="from_name" required />
                  <label className="font13">Email:</label>
                  <input type="email" name="reply_to" required />
                  <label className="font13">Phone Number:</label>
                  <input type="text" name="phone_number" required />
                  <label className="font13">Subject:</label>
                  <input type="text" name="subject" required />
                  <label className="font13">Message:</label>
                  <textarea rows="4" name="message" required />
                <SumbitWrapper className="flex">
                  <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                </SumbitWrapper>
              </Form>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleMap/>
    </Wrapper>
    
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid rgb(119, 31, 115);
  background-color: rgb(119, 31, 115) !important;
  width: 100%;
  padding: 24px;
  outline: none;
  color: #fff;
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;


// const ContactImgBox = styled.div`
//   max-width: 180px; 
//   align-self: flex-end; 
//   margin: 10px 30px 10px 0;
// `;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









