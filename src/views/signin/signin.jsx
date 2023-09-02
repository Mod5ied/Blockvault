import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function signIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
	navigate("/signin")
	// Prepare the data to be sent to the backend
	const data = {
	  username: username,
	  password: password,
	};

	// Send the data to the backend
	// This is a placeholder and should be replaced with the actual code to send the data

	return false;
  };

  const authStatus = handleSignIn();

  const handleUsernameChange = (event) => {
	setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
	setPassword(event.target.value);
  };

  return (
	<div className="h-screen py-12 bg-gray-100 font-body">
	  <form onClick={() => handleSignIn} id="signin_form_main">
		<section className="w-full h-[20%]">
		  <h2 className="py-2 text-2xl font-semibold border-b border-slate-200">SIGN-IN</h2>
		</section>

		{authStatus && <p id="form_error_status">Unauthorized login request</p>}

		<section id="signin_form_section">
		  <div id="input_section">
			<span className="input_span">
			  <label htmlFor="username">Username</label>
			  <input className="input_span_input" type="text" placeholder="Username" onChange={handleUsernameChange} />
			</span>
			<span className="input_span">
			  <label htmlFor="username">Password</label>
			  <input className="input_span_input" type="text" placeholder="Password" onChange={handlePasswordChange} />
			</span>
		  </div>
		  <div id="signin_submit_section">
			<section className="flex justify-center p-2">
			  <button className="signin_submit_btn">SignIn</button>
			</section>
			<section className="p-2">
			  <Link to="/reset_password" className="px-2 py-1 underline rounded-md hover:underline-offset-2">Forgotten Password</Link>
			  <p className="flex flex-row items-center gap-1 p-2 text-sm text-gray-800 md:font-semibold">
				Click here to
				<Link className="text-amber-600" to="/signup">
				  sign up
				</Link>
			  </p>
			</section>
		  </div>
		</section>
	  </form>
	</div>
  );
}

export default signIn;