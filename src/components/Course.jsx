import React from "react";
import styled from "styled-components";
import arrow from "../assets/right-arrow.svg";
import Logos from "../assets/images/courselisting/university.png";
import Contact from "./includes/Contact";

function Course() {
    return (
        <>
            <MainContainer className="wrapper">
                <LeftContainer>
                    <Title>Select Course</Title>
                    <CourseContainer>
                        <Courses>Data Science</Courses>
                        <ImgContaner>
                            <Img src={arrow} />
                        </ImgContaner>
                    </CourseContainer>
                    <CourseContainer>
                        <Courses>Computer Science</Courses>
                        <ImgContaner>
                            <Img src={arrow} />
                        </ImgContaner>
                    </CourseContainer>
                    <CourseContainer>
                        <Courses>MBA</Courses>
                        <ImgContaner>
                            <Img src={arrow} />
                        </ImgContaner>
                    </CourseContainer>
                    <CourseContainer>
                        <Courses>Management</Courses>
                        <ImgContaner>
                            <Img src={arrow} />
                        </ImgContaner>
                    </CourseContainer>
                </LeftContainer>
                <RightContainer>
                    <Title className="black">Select Course</Title>
                    <CountryContainer>
                        <Country>USA</Country>
                        <Country>UK </Country>
                        <Country>France</Country>
                    </CountryContainer>
                    <Bottom>
                        <CourseCardContainer>
                            <CourseCard>
                                <TopDiv>
                                    <Left>
                                        <ImageContainer>
                                            <Logo src={Logos} />
                                        </ImageContainer>
                                    </Left>
                                    <Right>
                                        <Name>Course Name</Name>
                                        <University>University Name</University>
                                        <CountryName>
                                            Country: <span>USA</span>{" "}
                                        </CountryName>
                                    </Right>
                                </TopDiv>
                                <BottomDiv>
                                    <LabelContainer>
                                        <Label>
                                            Online: <span>6 Months</span>{" "}
                                        </Label>
                                        <Label>
                                            On Campus: <span>12 Months</span>{" "}
                                        </Label>{" "}
                                        <Label>
                                            In Take: <span>Feb, Jul</span>{" "}
                                        </Label>{" "}
                                        <Label>Enquire Now</Label>
                                    </LabelContainer>
                                </BottomDiv>
                            </CourseCard>

                            <CourseCard>
                                <TopDiv>
                                    <Left>
                                        <ImageContainer>
                                            <Logo src={Logos} />
                                        </ImageContainer>
                                    </Left>
                                    <Right>
                                        <Name>Course Name</Name>
                                        <University>University Name</University>
                                        <CountryName>
                                            Country: <span>USA</span>{" "}
                                        </CountryName>
                                    </Right>
                                </TopDiv>
                                <BottomDiv>
                                    <LabelContainer>
                                        <Label>
                                            Online: <span>6 Months</span>{" "}
                                        </Label>
                                        <Label>
                                            On Campus: <span>12 Months</span>{" "}
                                        </Label>{" "}
                                        <Label>
                                            In Take: <span>Feb, Jul</span>{" "}
                                        </Label>{" "}
                                        <Label>Enquire Now</Label>
                                    </LabelContainer>
                                </BottomDiv>
                            </CourseCard>
                            <CourseCard>
                                <TopDiv>
                                    <Left>
                                        <ImageContainer>
                                            <Logo src={Logos} />
                                        </ImageContainer>
                                    </Left>
                                    <Right>
                                        <Name>Course Name</Name>
                                        <University>University Name</University>
                                        <CountryName>
                                            Country: <span>USA</span>{" "}
                                        </CountryName>
                                    </Right>
                                </TopDiv>
                                <BottomDiv>
                                    <LabelContainer>
                                        <Label>
                                            Online: <span>6 Months</span>{" "}
                                        </Label>
                                        <Label>
                                            On Campus: <span>12 Months</span>{" "}
                                        </Label>{" "}
                                        <Label>
                                            In Take: <span>Feb, Jul</span>{" "}
                                        </Label>{" "}
                                        <Label>Enquire Now</Label>
                                    </LabelContainer>
                                </BottomDiv>
                            </CourseCard>
                            <CourseCard>
                                <TopDiv>
                                    <Left>
                                        <ImageContainer>
                                            <Logo src={Logos} />
                                        </ImageContainer>
                                    </Left>
                                    <Right>
                                        <Name>Course Name</Name>
                                        <University>University Name</University>
                                        <CountryName>
                                            Country: <span>USA</span>{" "}
                                        </CountryName>
                                    </Right>
                                </TopDiv>
                                <BottomDiv>
                                    <LabelContainer>
                                        <Label>
                                            Online: <span>6 Months</span>{" "}
                                        </Label>
                                        <Label>
                                            On Campus: <span>12 Months</span>{" "}
                                        </Label>{" "}
                                        <Label>
                                            In Take: <span>Feb, Jul</span>{" "}
                                        </Label>{" "}
                                        <Label>Enquire Now</Label>
                                    </LabelContainer>
                                </BottomDiv>
                            </CourseCard>
                            <CourseCard>
                                <TopDiv>
                                    <Left>
                                        <ImageContainer>
                                            <Logo src={Logos} />
                                        </ImageContainer>
                                    </Left>
                                    <Right>
                                        <Name>Course Name</Name>
                                        <University>University Name</University>
                                        <CountryName>
                                            Country: <span>USA</span>{" "}
                                        </CountryName>
                                    </Right>
                                </TopDiv>
                                <BottomDiv>
                                    <LabelContainer>
                                        <Label>
                                            Online: <span>6 Months</span>{" "}
                                        </Label>
                                        <Label>
                                            On Campus: <span>12 Months</span>{" "}
                                        </Label>{" "}
                                        <Label>
                                            In Take: <span>Feb, Jul</span>{" "}
                                        </Label>{" "}
                                        <Label>Enquire Now</Label>
                                    </LabelContainer>
                                </BottomDiv>
                            </CourseCard>
                            <CourseCard>
                                <TopDiv>
                                    <Left>
                                        <ImageContainer>
                                            <Logo src={Logos} />
                                        </ImageContainer>
                                    </Left>
                                    <Right>
                                        <Name>Course Name</Name>
                                        <University>University Name</University>
                                        <CountryName>
                                            Country: <span>USA</span>{" "}
                                        </CountryName>
                                    </Right>
                                </TopDiv>
                                <BottomDiv>
                                    <LabelContainer>
                                        <Label>
                                            Online: <span>6 Months</span>{" "}
                                        </Label>
                                        <Label>
                                            On Campus: <span>12 Months</span>{" "}
                                        </Label>{" "}
                                        <Label>
                                            In Take: <span>Feb, Jul</span>{" "}
                                        </Label>{" "}
                                        <Label>Enquire Now</Label>
                                    </LabelContainer>
                                </BottomDiv>
                            </CourseCard>
                        </CourseCardContainer>
                    </Bottom>
                </RightContainer>
            </MainContainer>
            <Contact />
        </>
    );
}

export default Course;

const MainContainer = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    &.wrapper {
        width: 85%;
        margin: 0 auto;
    }
    @media all and (max-width: 1080px) {
        flex-direction: column;
    }
`;
const LeftContainer = styled.div`
    background: #f4f4f4;
    padding: 20px;
    width: 220px;
    height: 210px;
    /* margin: 0 auto; */
    @media all and (max-width: 1080px) {
        width: 60%;
        margin: 0 auto;
    }
`;

const CourseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 0.5px solid #000;
`;
const Courses = styled.div`
    font-size: 14px;
`;
const Title = styled.h1`
    color: #006492;
    font-size: 20px;
    margin-bottom: 20px;

    &.black {
        color: #000;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const RightContainer = styled.div`
    width: 75%;
    @media all and (max-width: 1080px) {
        width: 100%;
        margin: 0 auto;
    }
`;
const ImgContaner = styled.div`
    width: 6px;
`;
const Img = styled.img`
    width: 100%;
    display: block;
    transform: rotate(90deg);
`;
const CountryContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;
const Country = styled.div`
    padding: 5px 10px;
    border: 1px solid #01659b;
    font-size: 14px;
    margin-right: 20px;
    text-align: center;
    width: 50px;
`;
const Bottom = styled.div``;
const CourseCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    @media all and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }
    @media all and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;
const CourseCard = styled.div`
    background: #f4f4f4;
    padding: 20px;
    /* width: 30%; */
`;
const TopDiv = styled.div`
    display: flex;
    align-items: center;
`;
const BottomDiv = styled.div``;
const ImageContainer = styled.div`
    width: 70px;
    /* padding: 20px; */
    background: #fff;
    border: 1px solid #01659b;
    margin-bottom: 20px;
`;
const Left = styled.div`
    margin-right: 20px;
`;
const Right = styled.div``;
const Logo = styled.img`
    width: 100%;
    display: block;
`;
const University = styled.h1`
    color: #006492;
    font-size: 14px;
    margin-bottom: 5px;
`;
const Name = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
`;
const CountryName = styled.p`
    font-size: 10px;
    margin-bottom: 5px;
    color: #6d6a6a;
    span {
        color: #000;
        font-size: 12px;
        font-weight: 600;
    }
`;
const LabelContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
`;
const Label = styled.div`
    font-size: 8px;
    margin-bottom: 5px;
    background: #fff;
    color: #6d6a6a;
    padding: 6px;
    &:last-child {
        background: #06aec0;
        color: #fff;
        font-size: 12px;
        text-align: center;
    }
    span {
        color: #006492;
        font-size: 10px;
        font-weight: 600;
    }
`;
