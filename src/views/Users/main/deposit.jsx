import React, { useState } from "react";
import DataTable from "../utils/dataTable";

function deposit({ width }) {
	const [amount, setAmount] = useState(0);
	const [wallet, setWallet] = useState(null);
	const handleSubmit = (e) => e.preventDefault();
	const handleSelect = (e) => console.log(e.target.value);

	return (
		<div className="flex flex-col items-center h-full bg-gray-100">
			<form id="deposit_form" onClick={(e) => handleSubmit(e)}>
				<h3 className="font-bold text-gray-50">Fund Wallet</h3>
				<span>
					<label htmlFor="amount">Enter Amount</label>
					<input className="deposit_form_input" inputMode="numeric" type="number" id="amount" onChange={(e) => setAmount(e.target.value)} />
				</span>
				<span>
					<label htmlFor="amount">Select Currency</label>
					<select className="deposit_form_input" name="wallet" id="wallet-drop" onChange={(e) => handleSelect(e)}>
						<option value="bitcoin">Bitcoin</option>
						<option value="ethereum">Ethereum</option>
						<option value="usdt">USDT</option>
					</select>
				</span>
				<span className="w-1/2">
					<button id="btn" type="submit">
						Deposit
					</button>
				</span>
			</form>

			{/* FORM SECTION */}
			<DataTable tableContext={`Deposit Transaction History`} />
		</div>
	);
}

export default deposit;
