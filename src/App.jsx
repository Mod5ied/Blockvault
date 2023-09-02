import React, { useEffect } from "react";
import SignIn from "./views/signin/signin";
import SignUp from "./views/signup/signup";
import Homepage from "./components/homepage";
import AdminDashboard from "./views/Admin/dashboard";
import GuestDashboard from "./views/Users/main/dashboard";
import ResetPassword from "./views/recovery/forgotPassword";
import { useNavigate, useRoutes, Navigate } from "react-router-dom";

function App() {
	const navigate = useNavigate();
	// useEffect(() => {
	// 	const user = JSON.parse(localStorage.getItem("user"));

	// 	if (!user) {
	// 		navigate("/signin");
	// 	} else {
	// 		if (user.role === "admin") {
	// 			navigate("/dashboard/admin");
	// 		} else if (user.role === "guest") {
	// 			navigate("/dashboard/guest");
	// 		}
	// 	}
	// });

	let element = useRoutes([
		/* below should route to the sign-in page, but by default the Home page */
		{ path: "/", element: <Homepage /> },
		{ path: "/signin", element: <SignIn /> },
		{ path: "/signup", element: <SignUp /> },
		{ path: "/reset_password", element: <ResetPassword /> },
		/* Test code below. Dash can only be accessed via guards. */
		{
			path: "/dashboard",
			element: <GuestDashboard />,
		},
		{
			path: "/admin/dashboard",
			element: <AdminDashboard />,
		},
	]);

	return <main className="bg-gray-100 h-[980px] md:h-[1100px]">{element}</main>;
}

export default App;
