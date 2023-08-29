import { ReactSVG } from "react-svg";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import arrRight from "../../../assets/arrow-right.svg";

function support() {
	const [priority, setPriority] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [details, setDetails] = useState("");
	const [subject, setSubject] = useState("");

	const toggleDropdown = () => setIsOpen(!isOpen);
	const createRequest = () => {
		setIsOpen(!isOpen)
	};

	const props = useSpring({
		transform: isOpen ? "translateY(50%) translateX(50%)" : "translateY(-100%)  translateX(50%)",
	});

	return (
		<div className="flex flex-col items-center h-full bg-gray-100">
			<section className="flex flex-col gap-2 p-5 justify-center bg-stone-900 w-full h-[120px] rounded-md shadow-md">
				<h3 className="text-yellow-400 text-xl font-bold">Customer Support</h3>
				<button
					onClick={toggleDropdown}
					className="w-[50%] md:w-[13%] flex flex-row justify-center items-center gap-1 mb-4 px-3 py-1 rounded-md shadow-md bg-white font-bold text-sm text-blue-600"
				>
					<ReactSVG src={arrRight} />
					Create request
				</button>
				<animated.form style={props} className="absolute mx-auto w-[50%] py-5 px-8 rounded-md shadow-md bg-white flex flex-col justify-around gap-6" onSubmit={createRequest}>
					<section className="flex flex-col gap-2">
						<span className="flex flex-row justify-between items-center">
							<label htmlFor="fullname">Subject</label>
							<input className="account_form_input" required={true} type="text" id="fullname" onChange={(e) => setSubject(e.target.value)} />
						</span>
						<span className="flex flex-row justify-between items-center">
							<label htmlFor="fullname">Priority</label>
							<select className="account_form_input" onChange={(e) => setPriority(e.target.value)}>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
						</span>
						<span className="flex flex-row justify-between items-center">
							<label htmlFor="fullname">Details</label>
							<textarea className="account_form_input" required={true} type="text" id="details" onChange={(e) => setDetails(e.target.value)} />
						</span>
					</section>

					<span className="w-full py-3 flex flex-col gap-2">
						<button onClick={createRequest} id="account_btn" type="submit">
							Submit
						</button>
					</span>
				</animated.form>
			</section>
		</div>
	);
}

export default support;
