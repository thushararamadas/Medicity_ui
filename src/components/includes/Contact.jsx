import React from "react";
import styled from "styled-components";

function Contact() {
    return (
        <>
            <div className="wrapper">
                <MainContainer>
                    <Container>
                        <LeftDiv>
                            <Left>
                                <img
                                    src={require("../../assets/images/events/tele.png")}
                                    alt="ICon"
                                />
                            </Left>
                            <Right>
                                <Text>Contact Number</Text>
                                <Number>+91 9876654356</Number>
                            </Right>
                        </LeftDiv>

                        <RightDiv>
                            <LeftImg>
                                <img
                                    src={require("../../assets/images/events/mob.png")}
                                    alt="ICon"
                                />
                            </LeftImg>
                            <Right>
                                <Text>Contact Number</Text>
                                <Number>+91 9876654356</Number>
                            </Right>
                        </RightDiv>
                    </Container>
                    {/* <Right></Right> */}
                </MainContainer>
            </div>
        </>
    );
}

export default Contact;
const MainContainer = styled.div`
    background-color: #e9e9e9;
    width: 100%;
    padding: 35px 0;
    /* @media all and (max-width: 1380px) {
        margin: 20px 0;
    } */
`;
const LeftDiv = styled.div`
    display: flex;
    align-items: center;
    border-right: 2px solid #197daf;
    padding-right: 35px;
    @media all and (max-width: 1380px) {
        padding-right: 45px;
    }
    @media all and (max-width: 768px) {
        /* width: 80%;
        border-right: none; */
    }
`;
const RightDiv = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 1280px) {
        padding-left: 25px;
    }
    @media all and (max-width: 768px) {
        /* width: 80%; */
    }
`;
const Left = styled.div`
    width: 33px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const Right = styled.div``;
const Text = styled.p`
    font-size: 10px;
`;
const Number = styled.p`
    font-size: 16px;
    color: #197daf;
    font-weight: 600;
    @media all and (max-width: 480px) {
        font-size: 12px;
    }
`;
const Container = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    width: 30%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1460px) {
        width: 32%;
    }
    @media all and (max-width: 1380px) {
        width: 35%;
    }
    @media all and (max-width: 1280px) {
        width: 39%;
    }
    @media all and (max-width: 1180px) {
        width: 43%;
    }
    @media all and (max-width: 1080px) {
        width: 47%;
    }
    @media all and (max-width: 980px) {
        width: 51%;
    }
    @media all and (max-width: 900px) {
        width: 57%;
    }
    @media all and (max-width: 810px) {
        width: 63%;
    }
    @media all and (max-width: 768px) {
        width: 91%;
    }
`;
const LeftImg = styled.div`
    width: 20px;
    margin-right: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
