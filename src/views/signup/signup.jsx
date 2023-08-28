import view from "../../assets/view.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { CountryDropdown } from "react-country-region-selector";

function signUp() {
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [country, setCountry] = useState("");
	const [password, setPassword] = useState("");
	const [fullName, setFullname] = useState("");
	const [userName, setUsername] = useState("");
	const [referral, setReferral] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSetCountry = (val) => console.log(val);
	const handlePasswordChange = (e) => setPassword(e.target.value);
	const toggleShowPassword = () => setShowPassword(!showPassword);
	const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
	/*  */
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handleNumberChange = (e) => setNumber(e.target.value);
	const handleFullnameChange = (e) => setFullname(e.target.value);
	const handleUsernameChange = (e) => setUsername(e.target.value);
	const handleReferralChange = (e) => setReferral(e.target.value);

	// handleSignUp Method to send data to backend
	const handleSignUp = (event) => {
		event.preventDefault(); // prevent default form submission
		// Send this data to your backend
		const userData = { fullName, userName, password, confirmPassword, country, number, email, referral };
		console.log(userData);
	};

	const passwordMatch = password === confirmPassword;
	const confirmPasswordStyle = passwordMatch ? {} : { border: "2px solid red" };

	return (
		<div className="bg-gray-100 h-screen py-12">
			<form onSubmit={handleSignUp} id="signup_form_main">
				<section className="w-full h-[10%]">
					<h2 className="py-2 text-xl md:text-2xl font-semibold border-b border-slate-200">SIGNUP</h2>
				</section>

				<section id="signup_form_section">
					<div id="input_section">
						<span className="input_span">
							<input className="input_span_input" type="text" placeholder="Fullname" onChange={handleFullnameChange} />
						</span>
						<span className="input_span">
							<input className="input_span_input" type="text" placeholder="Username" onChange={handleUsernameChange} />
						</span>
						<span className="input_span">
							<input className="input_span_input" type="email" placeholder="Email" onChange={handleEmailChange} />
						</span>
						<span className="input_span">
							<input className="input_span_input" type="number" placeholder="Mobile Number" onChange={handleNumberChange} />
						</span>

						<span className="input_span">
							<CountryDropdown className="input_span_input" onChange={handleSetCountry} />
						</span>

						<span className="input_span">
							<input className="input_span_input" type="text" placeholder="Referral Name" onChange={handleReferralChange} />
						</span>
						<span className="input_span">
							<input placeholder="Password" className="input_span_input" onChange={handlePasswordChange} type={showPassword ? "text" : "password"} />
							<ReactSVG onClick={toggleShowPassword} src={view} className="absolute mt-3 ml-[70%] md:ml-[28%]" />
						</span>
						<span className="input_span">
							<input
								style={confirmPasswordStyle}
								className="input_span_input"
								placeholder="Confirm Password"
								onChange={handleConfirmPasswordChange}
								type={showPassword ? "text" : "password"}
							/>
							<ReactSVG onClick={toggleShowPassword} src={view} className="absolute mt-3 ml-[70%] md:ml-[28%]	]" />
						</span>
					</div>

					<div id="signup_submit_section">
						<span className="p-2 flex flex-row items-center gap-2">
							<input type="checkbox" />
							<p>I accept the conditions</p>
						</span>
						<section className="p-2 flex justify-center">
							<button type="submit" className="signin_submit_btn">
								SignUp
							</button>
						</section>
						<section className="md:p-2">
							<p className="p-2 text-sm md:font-semibold flex flex-row items-center gap-1">
								Already have an account?
								<Link className="text-amber-600" to="/signin">
									click to sign-in
								</Link>
							</p>
						</section>
					</div>
				</section>
			</form>
		</div>
	);
}

export default signUp;
