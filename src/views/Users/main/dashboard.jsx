import Avatar from "../../../components/avatar";
import Sidebar from "../components/sidebar";
import Referrals from "../utils/referrals";
import Security from "../utils/security";
import Account from "../utils/account";
import Support from "../utils/support";
import Deposit from "../main/deposit";
import Withdraw from "./withdraw";
import Metrics from "./metrics";
import Invest from "./invest";
import { useRecoilState } from "recoil";
import React, { useState, useEffect, useRef } from "react";
import { usersState } from "../../../services/state/state";

function userDashboard() {
	const [stateGuest, setStateGuest] = useRecoilState(usersState);
	const [width, setWidth] = useState("16%");
	const isClicked = useRef(false);
	const sidebarRef = useRef(null);

	const handleMouseOver = () => {
		if (!isClicked.current) {
			setWidth("16%");
		}
	};

	const handleMouseOut = () => {
		if (!isClicked.current) {
			setWidth("4%");
		}
	};

	useEffect(() => {
		const sidebarElement = sidebarRef.current;
		sidebarElement.addEventListener("mouseover", handleMouseOver);
		sidebarElement.addEventListener("mouseout", handleMouseOut);

		return () => {
			sidebarElement.removeEventListener("mouseover", handleMouseOver);
			sidebarElement.removeEventListener("mouseout", handleMouseOut);
		};
	}, []);

	const handleClick = () => {
		isClicked.current = !isClicked.current;
		setWidth(isClicked.current ? "16%" : "4%");
	};

	const dummyUser = {
		username: "paddy dummy",
		firstname: "paddy",
		phone: "08108108111",
		city: "lagos",
		address: "yaba",
	};

	return (
		<div className="flex flex-row w-full h-screen">
			<section ref={sidebarRef} id="sidebar" className="fixed top-0 left-0 z-30 h-full bg-stone-800 overflow-hidden" style={{ width }}>
				<Sidebar handleShow={handleClick} width={width} />
			</section>
			<section id="main" className={`flex w-[100%] flex-col gap-8 h-full px-5 ${width == "16%" ? "ml-64" : "ml-20"}`}>
				<header className="fixed top-0 right-0 z-20 flex gap-1 bg-gray-100 opacity-95 border-b items-center justify-end w-full h-[70px]">
					<Avatar />
					<h3 className="mr-10 font-bold text-xl text-gray-600"> $100 </h3>
				</header>
				<main className="w-full relative top-24">
					{stateGuest.accountPage && <Account userAccount={dummyUser} />}
					{stateGuest.dashboard && <Metrics width={width} />}
					{stateGuest.referralsPage && <Referrals />}
					{stateGuest.withdrawPage && <Withdraw />}
					{stateGuest.securityPage && <Security />}
					{stateGuest.depositPage && <Deposit />}
					{stateGuest.supportPage && <Support />}
					{stateGuest.investPage && <Invest />}
				</main>
			</section>
		</div>
	);
}

export default userDashboard;
