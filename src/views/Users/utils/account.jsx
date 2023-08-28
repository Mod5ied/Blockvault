import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import cancel from "../../../assets/cancel.svg";
import { useSpring, animated } from 'react-spring';

function account({ userAccount }) {
	const [user, setUser] = useState(userAccount);
	const [fullname, setFullname] = useState("");
	const [address, setAddress] = useState(null);
	const [country, setCountry] = useState(null);
	const [zipCode, setZipCode] = useState(null);
	const [phone, setPhone] = useState(null);
	const [city, setCity] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const handleSubmitAvatar = () => {};
	const handlePasswordChange = () => {};
	const props = useSpring({
		transform: isOpen ? "translateY(0)" : "translateY(-120%)",
	});

	useEffect(() => {
		setUser(userAccount);
	}, [userAccount]);

	return (
		<div className="flex flex-col items-center h-full bg-gray-100">
			<section className="w-full flex justify-center">
				<button onClick={toggleDropdown} className="w-[60%] py-2 rounded-md shadow-md text-center bg-blue-700 text-slate-100 font-semibold">Change Password</button>
				{/* drop-down */}
				<animated.form style={props} className="absolute w-[40%] py-5 px-8 rounded-md shadow-md bg-white flex flex-col gap-6" onSubmit={handlePasswordChange}>
					<section className="flex flex-row justify-between items-center px-2">
						<h3 className="font-bold ">Change password </h3>
						<ReactSVG onClick={toggleDropdown} src={cancel}  />
					</section>
					<section className="flex flex-col gap-2">
						<span>
							<label htmlFor="fullname">New Password</label>
							<input className="account_form_input" type="text" id="fullname" onChange={(e) => setFullname(e.target.value)} />
						</span>
						<span>
							<label htmlFor="fullname">Confirm Password</label>
							<input className="account_form_input" type="text" id="fullname" onChange={(e) => setFullname(e.target.value)} />
						</span>
					</section>

					<span className="w-full py-3 px-4 flex flex-col gap-2">
						<button id="account_btn_drop" type="submit">
							Update
						</button>
					</span>
				</animated.form>
			</section>

			<section className="w-full flex flex-row justify-between p-5">
				<form id="account_form">
					<section>
						<h3>Username: {user.username} </h3>
					</section>
					<section>
						<span>
							<label htmlFor="fullname">Fullname</label>
							<input className="account_form_input" type="text" id="fullname" onChange={(e) => setFullname(e.target.value)} />
						</span>
						<span>
							<label htmlFor="phone">Phone</label>
							<input className="account_form_input" type="number" id="phone" onChange={(e) => setPhone(e.target.value)} />
						</span>
						<span>
							<label htmlFor="country">Country</label>
							<input className="account_form_input" type="text" id="country" onChange={(e) => setCountry(e.target.value)} />
						</span>
						<span>
							<label htmlFor="city">City</label>
							<input className="account_form_input" type="text" id="city" onChange={(e) => setCity(e.target.value)} />
						</span>
						<span>
							<label htmlFor="zip_code">Zip Code</label>
							<input className="account_form_input" type="number" id="zip_code" onChange={(e) => setZipCode(e.target.value)} />
						</span>
						<span>
							<label htmlFor="address">Address</label>
							<input className="account_form_input" type="text" id="address" onChange={(e) => setAddress(e.target.value)} />
						</span>
					</section>
					<span className="w-1/2">
						<button id="account_btn" type="submit">
							Confirm
						</button>
					</span>
				</form>

				<form className="w-[30%] h-[220px] rounded-md shadow-md bg-white flex flex-col items-center" onClick={handleSubmitAvatar}>
					<h3 className="w-full font-bold py-4 px-5">Change account photo</h3>

					<span className="w-full py-3 px-4 flex flex-col gap-2">
						<input type="file" name="file" id="file" className="account_form_input" />
						<button id="account_btn" type="submit">
							Confirm
						</button>
					</span>
				</form>
			</section>
		</div>
	);
}

export default account;
