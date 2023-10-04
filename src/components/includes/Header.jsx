import React from "react";
import styled from "styled-components";
import headerOverlayImage from "../../assets/images/header/headeroverlay.png";
function Header() {
    return (
        <>
            <MainContainer>
                <div
                    className="wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Logo>
                        <img
                            src={require("../../assets/images/header/logo.png")}
                            alt="Logo"
                        />
                    </Logo>
                    <NavContainer>
                        <li> Explore Course</li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: "5px",
                                }}
                            >
                                {" "}
                                Destinations
                            </p>
                            <Arrow>
                                <img
                                    src={
                                        require("../../assets/caret-right-solid.svg")
                                            .default
                                    }
                                    alt="Icon"
                                />
                            </Arrow>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <p
                                style={{
                                    marginRight: "5px",
                                }}
                            >
                                Centers
                            </p>
                            <Arrow>
                                <img
                                    src={
                                        require("../../assets/caret-right-solid.svg")
                                            .default
                                    }
                                    alt="Icon"
                                />
                            </Arrow>
                        </li>
                    </NavContainer>
                    <RightContainer>
                        <Settings>
                            <img
                                src={require("../../assets/menu (1).png")}
                                alt="Icon"
                            />
                        </Settings>
                        <ButtonBook style={{}}>
                            <Arrow>
                                <img
                                    src={
                                        require("../../assets/caret-right-solid.svg")
                                            .default
                                    }
                                    alt="Icon"
                                />
                            </Arrow>
                            Book an appoinment
                        </ButtonBook>
                        <Call>
                            <img
                                src={require("../../assets/call2.png")}
                                alt="Image"
                            />
                        </Call>
                        <Profile>
                            <img
                                src={require("../../assets/profile.png")}
                                alt="Image"
                            />
                        </Profile>
                    </RightContainer>
                </div>
            </MainContainer>
        </>
    );
}

export default Header;
const MainContainer = styled.div`
    background-color: rgb(0 101 158);
    padding: 30px 0;
    @media all and (max-width: 720px) {
        padding: 20px 0px;
    }
`;
const Logo = styled.h1`
    width: 250px;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 1300px) {
        width: 220px;
    }
    @media all and (max-width: 980px) {
        width: 180px;
    }
    @media all and (max-width: 680px) {
        width: 150px;
    }
`;
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 30%;
    }
    @media all and (max-width: 1030px) {
        width: 35%;
    }
    @media all and (max-width: 890px) {
        width: unset;
    }
`;
const Settings = styled.div`
    width: 25px;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
        filter: invert(1);
    }
`;
const Arrow = styled.div`
    width: 6px;
    margin-right: 10px;
    transform: translatey(2px);
    img {
        display: block;
        width: 100%;
        filter: invert(1);
    }
    @media all and (max-width: 890px) {
        display: none;
    }
`;
const Call = styled.div`
    width: 20px;
    height: 20px;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-right: 10px;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 890px) {
        display: none;
    }
`;
const Profile = styled.div`
    width: 33px;
    img {
        display: block;
        width: 100%;
    }
    @media all and (max-width: 890px) {
        display: none;
    }
`;
const NavContainer = styled.ul`
    display: flex;
    list-style: none;
    color: white;
    width: 24%;
    justify-content: space-between;
    @media all and (max-width: 1400px) {
        width: 30%;
    }
    @media all and (max-width: 1140px) {
        width: 35%;
    }
    @media all and (max-width: 980px) {
        display: none;
    }
`;
const ButtonBook = styled.button`
    border: 1px solid #fff;
    padding: 7px;
    background: none;
    color: white;
    display: flex;
    align-items: center;
    margin-right: 10px;
    @media all and (max-width: 840px) {
        display: none;
    }
`;
