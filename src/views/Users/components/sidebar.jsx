import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import cluxter_logo from "../../../assets/Cluxtercoin Logo2.png";
import key from "../../../assets/key.svg";
import bars from "../../../assets/bars.svg";
import home from "../../../assets/home.svg";
import power from "../../../assets/power.svg";
import chart from "../../../assets/chart.svg";
import wallet from "../../../assets/wallet.svg";
import account from "../../../assets/account.svg";
import compass from "../../../assets/compass.svg";
import deposit from "../../../assets/deposit.svg";
import lifeguard from "../../../assets/lifeguard.svg";
import { useNavigate } from "react-router-dom";
import { usersState, useToggleState } from "../../../services/state/state";

function sidebar({ handleShow, width }) {
	const [sideWidth, setSideWidth] = useState(width);
	const toggleGuestState = useToggleState(usersState);
	const navigate = useNavigate()

	useEffect(() => {
		setSideWidth(width);
	}, [width]);

	const handleLogout = () => {
		navigate("/signin");
		// const auth = getAuth();
		// signOut(auth)
		// 	.then(() => {
		// 		// Sign-out successful.
		// 		navigate("/login"); // redirect the user to login page after sign out
		// 	})
		// 	.catch((error) => {
		// 		// An error happened.
		// 		console.error(error);
		// 	});
	};
	const toAdmin = () => navigate("/admin/dashboard");

	return (
		<section className="flex flex-col items-center h-full gap-10 py-5 overflow-hidden bg-transparent">
			<div className="w-full h-[34px] flex flex-row-reverse justify-around items-center cursor-pointer">
				<ReactSVG onClick={handleShow} src={bars} className="text-gray-100" />
				{sideWidth == "16%" ? <img onClick={toAdmin} src={cluxter_logo} alt="cluxtercoin-logo" className="w-[38%] h-full" /> : null}
			</div>

			{/* second section */}
			<div className="flex flex-col gap-4 h-[210px] w-full">
				<button onClick={() => toggleGuestState("dashboard")} title="Dashboard" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={home} />
					{sideWidth == "16%" ? <p>Dashboard</p> : null}
				</button>

				<button onClick={() => toggleGuestState("depositPage")} title="Deposit" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={deposit} className="" />
					{sideWidth == "16%" ? <p>Deposit</p> : null}
				</button>

				<button onClick={() => toggleGuestState("withdrawPage")} title="Withdraw" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={wallet} />
					{sideWidth == "16%" ? <p>Withdraw</p> : null}
				</button>

				<button onClick={() => toggleGuestState("investPage")} title="Invest" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={chart} />
					{sideWidth == "16%" ? <p>Invest</p> : null}
				</button>
			</div>

			{/* last section */}
			<div className="flex flex-col gap-4 h-[210px] w-full">
				{sideWidth == "4%" ? null : <h3 className="px-8 text-sm font-bold text-gray-500">MORE</h3>}

				<button onClick={() => toggleGuestState("supportPage")} title="Support" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={lifeguard} />
					{sideWidth == "16%" ? <p>Support</p> : null}
				</button>

				<button onClick={() => toggleGuestState("accountPage")} title="Account" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={account} className="" />
					{sideWidth == "16%" ? <p>Account</p> : null}
				</button>

				<button onClick={() => toggleGuestState("securityPage")} title="Security" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={key} />
					{sideWidth == "16%" ? <p>Security</p> : null}
				</button>

				<button onClick={() => toggleGuestState("referralsPage")} title="Referral" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={compass} className="h-8 w-7" />
					{sideWidth == "16%" ? <p>Referral</p> : null}
				</button>

				<button onClick={handleLogout} title="Logout" className={`${sideWidth === "16%" ? "sidebar-links" : "sidebar-links-center"}`}>
					<ReactSVG src={power} />
					{sideWidth == "16%" ? <p>Logout</p> : null}
				</button>
			</div>
		</section>
	);
}

export default sidebar;
