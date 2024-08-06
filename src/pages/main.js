import React, { useState, useEffect } from "react";
import { Grid, Paper, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import coinLogo from "../components/assets/img/coinLogo.png";
import logo from "../components/assets/img/logo.png";
import icon1 from "../components/assets/img/icon_1.png";
import icon2 from "../components/assets/img/icon_2.png";
import icon3 from "../components/assets/img/icon_3.png";
import icon4 from "../components/assets/img/icon_4.png";
import "../components/assets/css/mobile.css";


import Header from "../components/header";
import InfoCard from "../components/infoCard";
import InfoText from "../components/infoText";

import {
	ScrollingProvider,
	useScrollSection,
	Section,
} from 'react-scroll-section';

export const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	background: "transparent",
	boxShadow: "none",
}));

export default function Main(props) {

	return (
		<ScrollingProvider>
			{/* -- header part */}
			<div className="header_container">
				<Header />
				<Container>
					{/* -- title part */}
					<Grid container >
						<Grid item sm={12} md={6} lg={6} >
							<div item className="mainTitle">
								<span className="x_font_y_2 everycursor">
									Use &nbsp;
								</span>
								<span className="x_font_g_3 everycursor">
									EQCoins&nbsp;
								</span>
								<span className="x_font_y_2 everycursor">
									to Buy Shares of Investment Horses <br />
								</span>
								<div className="tokenButton noselect everycursor" >
									GET TOKEN
								</div>
							</div>
						</Grid>
					</Grid>

					{/* -- token part */}
					<Section id="aboutus"></Section>
					<Grid container>
						<Grid item sm={12} lg={6} md={6} xl={6} xs={12}>
							<Item>
								<div className="space-third"></div>
								<div className="wrap">
									<img src={coinLogo} alt="NoImg" draggable="false" className="logo_container" />
									<span className="animation-1"></span>
									<span className="pungright"></span>
								</div>
								<div className="space-third"></div>
								<div className="space-third"></div>
							</Item>
						</Grid>
						<Grid item sm={12} lg={6} md={6} xl={6} xs={12}>
							<Item className="center_container center" >
								<span className="x_font_g_4 everycursor">ABOUT US</span>
								<br />
								<span className="x_font_y_2 everycursor">A New Way </span>
								<br />
								<span className="x_font_y_3 everycursor">To Invest in Horses</span>
								<br />
								<span className="x_font_w_3 everycursor">
									EqCoin is a token that offers
									a new solution to investing and
									earning income from real valuable horses.
									It allows you to purchase ownership
									in horses that are acquired, trained,
									and flipped for profit.
									It provides a transparent,
									reliable and high-yielding
									way to invest in horses.
								</span>
								<div className="tokenButton noselect align_center everycursor">
									GET STARTED
								</div>
							</Item>
						</Grid>
					</Grid>
				</Container>
				<div className="space-third"></div>
			</div>
			<Container>
				<div className="space-third"></div>
				<div className="part3">
					<Item>
						<span className="x_font_y_3 everycursor"><b>Roadmap</b> of EQCoin</span>
						<div className="space-double"></div>
						<Grid container justifyContent="center" alignItems="center" spacing={5}>
							<Grid item md={4} sm={12}>
								<span className="x_font_p_4 everycursor everycursor">Phase 1</span>
								<InfoCard
									title="ICO"
									subtitle="EQCoin Token Launch "
									content={(<span className="everycursor">Whitepaper.<br />Token Pre-sale. <br /> Exchange Listings.</span>)}
								/>
							</Grid>
							<Grid item md={4} sm={12}>
								<span className="x_font_p_4 everycursor">Phase 2</span>
								<InfoCard
									title="LAUNCH"
									subtitle="Change to Growth"
									content={(<span>Sales of EQCoin. <br /> Build horse investment website.</span>)}
								/>
							</Grid>
							<Grid item md={4} sm={12}>
								<span className="x_font_p_4 everycursor">Phase 3</span>
								<InfoCard
									title="EXPANSION"
									subtitle="Building Ecosystem"
									content={(<span>Expand reach of investment platform. <br /> Utilize NFTs for ownership and profit distribution.<br /></span>)} />
							</Grid>
						</Grid>
					</Item>
				</div>
				<div className="space-third"></div>
			</Container>

			<div className="space-third"></div>
			<Section id="features"></Section>
			<div className="space-third"></div>
			{/* -- bottom part */}
			<div className="footer_Container">
				<Container>
					<Item>
						<br />
						<span className="x_font_y_3 everycursor">
							<b> What You Need To Know About Using EqCoin to Invest In Horses...</b>
						</span>
					</Item>
					<div className="space-third"></div>
					<div className="space-third"></div>
					<div className="space-third"></div>
					<Grid container justifyContent="center" alignItems="center">
						<Grid item lg={3} md={3} sm={12}>
							<div className="img-container">
								<img src={icon1} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="Secure Investment" content="Horses are secured with insurance, and retain value as assets." />
							<div className="space-double"></div>
							<div className="img-container">
								<img src={icon2} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="High Return" content="Horse investing is a high return business." />
						</Grid>
						<Grid item lg={6} md={6} sm={12}>
							<Item>
								<div className="wrap">
									<img src={coinLogo} alt="NoImg" className="coinlogo" draggable="false" />
									<span className="animation-1"></span>
									<span className="pungright"></span>
								</div>
							</Item>
						</Grid>
						<Grid item lg={3} md={3} sm={12}>
							<div className="img-container">
								<img src={icon3} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="Backes by Real Assets" content="EQCoin can be used to invest in horses that are real assets and hold value." />
							<div className="space-double"></div>
							<div className="img-container">
								<img src={icon4} alt="NoImg" draggable="false" />
							</div>
							<InfoText ICON="" title="Hands Off Management" content="Use EQCoin to scquire ownership in horses without having to manage them in anyway." />
						</Grid>
					</Grid>
				</Container>

				<div className="space-third"></div>
				<div className="space-third"></div>
				<div className="space-third"></div>

				<div className="footer space_top center">
					<Container>
						<div className="space-third"></div>

						<span className="x_font_y_3 everycursor"><b> CONTACT <br />THE HORSE'S TEAM</b></span>
						<div className="space-single"></div>
						<div className="space-single"></div>
						<Grid container>
							<Grid item lg={6} md={6} sm={12}>
								<span className="x_font_f_5 everycursor">STAY TUNED FOR HORSE'S</span>
								<br />
								<span className="x_font_f_5 everycursor">DEVELOPMENT</span>
							</Grid>
							<Grid item lg={6} md={6} sm={12}>
								<Item>
									<div className="contactSet">
										<input type="text" className="contactAddress" placeholder="user@xyz.com" />
										<button className="btn-2 x_font_w_4"><span everycursor>Get NOTIFI</span></button>

									</div>
								</Item>
								<div className="space-third"></div>
								<div className="space-third"></div>
								<Item>
									<div className="contact_us">
										We’re here to help.
										Our exemplary service stems from our commitment to our clients and
										our dedication and passion for our work.
										Our staff is always ready and willing to help.
										Need a little more information? Have a question?
										Email us at <Link to="mailto:support@eqcoin.cash" class>support@eqcoin.cash.
										</Link>
									</div>
								</Item>
							</Grid>
						</Grid>
						<div className="space-single"></div>
						<div className="space_top">
							<img src={logo} alt="NoImg" className="f_logo_img" draggable="false" /><label className="x_font_w_2">Horse's</label>
						</div>
					</Container>
				</div>
				<div className="space-double"></div>
				<Item><label style={{ color: "white" }} className="everycursor">Copyright &copy; 2021 QE Company S.L. All rights reserved.</label></Item>
				<div className="space-single"></div>
				<div className="space-single"></div>
				<div className="space-single"></div>
				<div className="space-single"></div>

			</div>

		</ScrollingProvider>
	);
}