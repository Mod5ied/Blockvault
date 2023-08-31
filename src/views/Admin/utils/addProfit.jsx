import React, { useState } from "react";

function addProfit() {
	const [username, setUsername] = useState("");
	const [profit, setProfit] = useState("");

	const handleSubmit = (e) => {e.preventDefault()};
	const handleProfitChange = (e) => setProfit(e.target.value);
	const handleUsernameChange = (e) => setUsername(e.target.value);

	return (
		<div className="bg-transparent flex flex-col gap-4 p-2 absolute md:h-[70%] md:w-[80%] top-20">
			<section className="flex flex-row justify-between py-2">
				<h2 className="text-xl font-semibold text-gray-100">Fund Profit</h2>
				<button className="reduce_btn" type="submit">
					List Product
				</button>
			</section>

			<form id="deposit_form_main" onSubmit={handleSubmit}>
				<section className="w-full h-[15%] border-b border-gray-100">
					<h2 className="py-2 text-xl md:text-2xl font-semibold">Fund Profit</h2>
				</section>

				<section id="signup_form_section">
					<div id="input_section">
						<span className="input_span">
							<label htmlFor="username">Enter Username</label>
							<input className="input_span_input" type="text" placeholder="Username" onChange={handleUsernameChange} />
						</span>
					</div>

					<div id="input_section">
						<span className="input_span">
							<label htmlFor="username">Enter Profit e.g(Amount deposited + Percent profit)</label>
							<input className="input_span_input" type="text" placeholder="Earn" onChange={handleProfitChange} />
						</span>
					</div>
				</section>

				<span>
					<button type="submit" className="reduce_submit_btn">Add Subject</button>
				</span>
			</form>
		</div>
	);
}

export default addProfit;
