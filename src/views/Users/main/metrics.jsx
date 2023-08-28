import React, { useEffect, useState } from "react";
import check from "../../../assets/check.svg";
import copy from "../../../assets/copy.svg";
import { ReactSVG } from "react-svg";

function metrics({ width }) {
	const [twoFactAuth, setTwoFActAuth] = useState(false);
	const [sideWidth, setWidth] = useState(width);
	const [copied, setCopied] = useState(false);
	const [earnings, setEarnings] = useState(0);
	const [balance, setBalance] = useState(0);
	const [profit, setProfit] = useState(0);

	useEffect(() => {
		setWidth(width);
	}, [width]);

	async function handleCopy() {
		const inputElement = document.querySelector('input[type="text"]');
		await navigator.clipboard.writeText(inputElement.value);
		setCopied(!copied);
		setTimeout(() => setCopied((prev) => !prev), 900);
	}
	function handleInput() {}

	return (
		// <div className={`${sideWidth == "16%" ? "w-[84%]" : "w-[96%]"} bg-gray-100`}>
		<div className="flex flex-row h-[330px] w-full bg-gray-100">
			<section className="w-[65%] flex flex-col gap-5">
				<div className="flex flex-row gap-5">
					<span className="dash_cards">
						<h3>Wallet Balance</h3>
						<p> $ {balance} </p>
					</span>
					<span className="dash_cards">
						<h3>Available Profit</h3>
						<p> $ {profit} </p>
					</span>
				</div>
				<div className="flex flex-row gap-5">
					<span className="dash_cards">
						<h3>Referral Earnings</h3>
						<p> $ {earnings} </p>
					</span>
					<span className="dash_cards">
						<h3>2FA Security</h3>
						<button> {!twoFactAuth ? "DISABLED" : "ENABLED"} </button>
					</span>
				</div>
			</section>

			<section className="w-[35%] px-3">
				<span className="dash_cards_ref">
					<h3 className="h-[33%] font-bold">Referral Link</h3>
					<p className="mt-5 text-sm">
						Automatically top up your account balance by sharing your referral link, Earn a percentage of whatever plan your referred user buys.
					</p>
					<span className="flex flex-row items-center w-full mt-2 rounded-md border border-gray-500">
						<input type="text" value={`https://www.cluxtercoin.com/?refid=paddy`} onChange={handleInput} />
						<div onClick={handleCopy} className="px-4 py-2 bg-blue-800 w-[15%] rounded-r-md hover:bg-blue-600 duration-200">
							{!copied ? <ReactSVG src={copy} className="text-gray-100" /> : <ReactSVG src={check} className="text-gray-200 font-extrabold" />}
						</div>
					</span>
				</span>
			</section>
		</div>
	);
}

export default metrics;
