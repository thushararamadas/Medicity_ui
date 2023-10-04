import React from "react";
import styled from "styled-components";
import SpotlightImge from "../../assets/images/spotlight/spot.jpg";
import Header from "./Header";
import Footer from "./Footer";

function Spotlight() {
    const tabs = ["Country", "Mode", "Programme", "In take", "Duration"];
    const tabstwo = ["Masters", "Diploma", "2 years", "February", "Bachelors"];
    return (
        <>
            <Header />
            <SpotlightImage>
                <Inputdiv>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            width: "500px",
                            border: "none",
                            outline: "none",
                            padding: "10px",
                            borderRadius: "25px",
                            margin: " 0 auto",
                        }}
                    />
                    <Searchdiv></Searchdiv>
                    <SearchIcon>
                        <img
                            src={require("../../assets/searchIcon.png")}
                            alt="Image"
                        />
                    </SearchIcon>
                </Inputdiv>
            </SpotlightImage>
            <div className="wrapper">
                <BottomDiv>
                    <div
                        className="container"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            marginBottom: "30px",
                        }}
                    >
                        {tabs.map((item) => (
                            <>
                                <Select>
                                    <option>{item}</option>
                                </Select>
                                <BlueLine>
                                    <img
                                        src={require("../../assets/blue line.png")}
                                        alt="Icon"
                                    />
                                </BlueLine>
                            </>
                        ))}
                    </div>
                    <BlueDivDiv>
                        {tabstwo.map((items) => (
                            <BlueDiv>
                                <p>{items}</p>
                                <Img>
                                    <img
                                        src={
                                            require("../../assets/close.svg")
                                                .default
                                        }
                                        alt="Close"
                                    />
                                </Img>
                            </BlueDiv>
                        ))}
                    </BlueDivDiv>
                </BottomDiv>
            </div>
        </>
    );
}

export default Spotlight;
const SpotlightImage = styled.div`
    height: 450px;
    background-image: url(${SpotlightImge});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* padding: 100px 0; */
    @media all and (max-width: 768px) {
        height: 310px;
    }
    @media all and (max-width: 480px) {
        height: 278px;
    }
`;
const Inputdiv = styled.div`
    position: relative;
    margin: 0 auto;
    width: 35%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    @media all and (max-width: 768px) {
        width: 60%;
        height: 310px;
    }
    @media all and (max-width: 480px) {
        height: 278px;
        width: 55%;
    }
`;
const SearchIcon = styled.div`
    width: 25px;
    position: absolute;
    top: 213px;
    right: 20px;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 768px) {
        top: 143px;
    }
    @media all and (max-width: 480px) {
        top: 127px;
    }
`;
const BlueDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: rgb(0 101 158);
    padding: 4px 15px;
    margin-right: 50px;
    color: white;
    justify-content: space-between;

    @media all and (max-width: 980px) {
        width: 18%;
        margin-bottom: 20px;
    }
    @media all and (max-width: 480px) {
        margin-right: 15px;
        width: 47%;
    }
`;
const Img = styled.div`
    width: 20px;
    img {
        display: block;
        width: 100%;
        filter: invert(1);
        transform: translateY(3px);
    }
`;
const BottomDiv = styled.div`
    padding: 40px 0;
    border-bottom: 2px solid #bbbbbb;
`;
const BlueLine = styled.div`
    width: 20px;
    transform: translatex(-75px);
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 980px) {
        transform: translate(-60px, -12px);
    }
`;
const Searchdiv = styled.div`
    width: 70px;
    background-color: rgb(0 101 158);
    height: 33px;
    border-radius: 0 25px 25px 0;
    position: absolute;
    right: 8px;
    cursor: pointer;
    @media all and (max-width: 1496px) {
        right: 2px;
    }
`;
const Select = styled.select`
    width: 15%;
    padding: 6px;
    border: 1px solid rgb(0 101 158);
    outline: none;
    margin-right: 30px;
    @media all and (max-width: 980px) {
        margin-right: 20px;
        width: 22%;
        margin-bottom: 25px;
    }
    @media all and (max-width: 640px) {
        width: 30%;
    }
    @media all and (max-width: 480px) {
        margin-right: 0;
        width: 55%;
    }
`;
const BlueDivDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    :last-child {
        margin-right: 0;
    }
`;
