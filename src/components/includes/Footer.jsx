import React from "react";
import styled from "styled-components";
import FooterBg from "../../assets/images/footer/bg.png";

function Footer() {
    return (
        <>
            <div className="wrapper">
                <Top>
                    <LoGo>
                        <img
                            src={require("../../assets/images/footer/mioc-tr - Copy.png")}
                            alt="Image"
                        />
                    </LoGo>
                    <About>
                        <p
                            style={{
                                color: "#197daf",
                            }}
                        >
                            About us
                        </p>
                        <p
                            style={{
                                fontSize: "11px",
                                // width: "35%",
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi quae ut, earum veniam enim fuga,
                            doloremque omnis neque, sunt aliquam ratione
                            deleniti molestias? Beatae ipsa odit perferendis
                            temporibus quidem molestiae?
                        </p>
                    </About>
                    <About>
                        <p
                            style={{
                                color: "#197daf",
                            }}
                        >
                            Contact Address
                        </p>
                        <p
                            style={{
                                fontSize: "11px",
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Commodi quae ut,kannur-4,kerala,india
                        </p>
                    </About>
                    <Icons>
                        <Icon>
                            <img
                                src={require("../../assets/images/footer/face.png")}
                                alt="Icon"
                            />
                        </Icon>
                        <Icon>
                            <img
                                src={require("../../assets/images/footer/twitter.png")}
                                alt="Icon"
                            />
                        </Icon>
                        <Icon>
                            <img
                                src={require("../../assets/images/footer/Asset 10.png")}
                                alt="Icon"
                            />
                        </Icon>
                        <Icon>
                            <img
                                src={require("../../assets/images/footer/linked.png")}
                                alt="Icon"
                            />
                        </Icon>
                        <Icon>
                            <img
                                src={require("../../assets/images/footer/pinterest.png")}
                                alt="Icon"
                            />
                        </Icon>
                        <Icon>
                            <img
                                src={require("../../assets/images/footer/you.png")}
                                alt="Icon"
                            />
                        </Icon>
                    </Icons>
                </Top>
                <Bottom>
                    <Left>
                        <p
                            style={{
                                marginRight: "10px",
                            }}
                        >
                            Destination
                        </p>
                    </Left>

                    <Right>
                        <Ul>
                            <Li>
                                Study in UK{" "}
                                <span
                                    style={{
                                        marginLeft: "30px",
                                    }}
                                >
                                    |
                                </span>
                            </Li>
                            <Li>
                                Study in USA
                                <span
                                    style={{
                                        marginLeft: "30px",
                                    }}
                                >
                                    |
                                </span>
                            </Li>
                            <Li>
                                Study in Canada
                                <span
                                    style={{
                                        marginLeft: "30px",
                                    }}
                                >
                                    |
                                </span>
                            </Li>
                            <Li>
                                Study in Australia
                                <span
                                    style={{
                                        marginLeft: "30px",
                                    }}
                                >
                                    |
                                </span>
                            </Li>
                            <Li>
                                Study in Newzland
                                <span
                                    style={{
                                        marginLeft: "30px",
                                    }}
                                >
                                    |
                                </span>
                            </Li>
                            <Li>
                                Study in Germany
                                <span
                                    style={{
                                        marginLeft: "30px",
                                    }}
                                >
                                    |
                                </span>
                            </Li>
                            <Li>Study in Ireland</Li>
                        </Ul>
                    </Right>
                </Bottom>
            </div>
            <Bg></Bg>
        </>
    );
}

export default Footer;
const Bg = styled.div`
    background-image: url(${FooterBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 150px;
    background-position: bottom;
    @media all and (max-width: 640px) {
        height: 85;
    }
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px 0;
    flex-wrap: wrap;
`;
const LoGo = styled.div`
    width: 230px;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 1080px) {
    }
`;
const About = styled.div`
    width: 25%;
    @media all and (max-width: 1080px) {
        width: 42%;
        margin-bottom: 20px;
    }
`;
const Icons = styled.ul`
    display: flex;
    @media all and (max-width: 1080px) {
    }
`;
const Icon = styled.li`
    list-style: none;
    margin-right: 10px;
    width: 23px;
    img {
        display: block;
        width: 100%;
    }
`;
const Bottom = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    @media all and (max-width: 1280px) {
        flex-direction: column;
        padding: 0;
    }
`;
const Left = styled.div`
    transform: translatey(18px);
    margin-bottom: 50px;
    @media all and (max-width: 1080px) {
        margin-bottom: 30px;
    }
`;
const Right = styled.div`
    border-bottom: 1px solid #bbbbbb;
    width: 80%;
    @media all and (max-width: 1080px) {
        border-bottom: none;
    }
`;
const Ul = styled.ul`
    display: flex;
    list-style: none;
    font-size: 11px;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    margin: 0 auto;
    @media all and (max-width: 1280px) {
        flex-wrap: wrap;
    }
`;
const Li = styled.li`
    display: flex;
    padding-bottom: 30px;
    @media all and (max-width: 768px) {
        padding-bottom: 0;
        width: 45%;
        margin-bottom: 10px;
        span {
            display: none;
        }
    }
`;
const BlueLine = styled.div`
    width: 20px;
    transform: translatex(-75px);
    img {
        display: block;
        width: 100%;
    }
`;
const RightBottom = styled.div``;
