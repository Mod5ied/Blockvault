import { useEffect } from "react";
import { ReactSVG } from "react-svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import pc from "../assets/computers.jpg";
import badge from "../assets/badge1.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import expert from "../assets/expert1.png";
import office from "../assets/office.jpg";
import shake from "../assets/shake.png";
import insure from "../assets/insure.png";
import support from "../assets/support.png";
import certificate from "../assets/cert.jpg";
import staff1 from "../assets/staff1.jpg";
import staff2 from "../assets/staff2.jpeg";
import staff3 from "../assets/staff3.jpg";
import staff4 from "../assets/staff4.jpeg";
import test1 from "../assets/testimonial1.jpg";
import test2 from "../assets/testimonial2.jpg";
import test3 from "../assets/test3.jpg";
import logo from "../assets/Cluxtercoin Logo3.png";
import { Carousel } from "@trendyol-js/react-carousel";
import { useNavigate } from "react-router";

function homepage() {
	useEffect(() => {
		const images = [slide1, slide2];
		let currentImageIndex = 0;

		const changeBackgroundImage = () => {
			document.getElementById("homepage-main").style.backgroundImage = `url(${images[currentImageIndex]})`;
			currentImageIndex = (currentImageIndex + 1) % images.length;
		};

		changeBackgroundImage(); // Change the image immediately when the component mounts
		const intervalId = setInterval(changeBackgroundImage, 5000); // Change the image every 5 seconds

		return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
	}, []);

	const data = [
		{
			pack: "STARTER PACK",
			amount: "$100",
			duration: "5 Days",
			profit: "1.8%",
			min: "$100",
			max: "$4,999",
			ref: "10%",
		},
		{
			pack: "STANDARD PACK",
			amount: "$1000",
			duration: "5 Days",
			profit: "2.5%",
			min: "$1000",
			max: "$999",
			ref: "10%",
		},
		{
			pack: "STANDARD PACK",
			amount: "$5,000",
			duration: "5 Days",
			profit: "3.0%",
			min: "$5,000",
			max: "$9,999",
			ref: "10%",
		},
		{
			pack: "STANDARD PACK",
			amount: "$10,000",
			duration: "5 Days",
			profit: "3.5%",
			min: "$10,000",
			max: "$15,000",
			ref: "10%",
		},
	];
	const navigator = useNavigate();

	const redirectToDepo = () => navigator("/signup");
	const redirectToSignup = () => navigator("/signup");
	const redirectToSignin = () => navigator("/signin");
	const redirectToAbout = () => navigator("/about")
	const redirectToContact = () => navigator("/contact")

	return (
		<div id="homepage-main" className="flex flex-col h-screen">
			<header className="w-full">
				<section id="top" className="flex flex-row justify-between w-full px-8 py-2 bg-indigo-900">
					<p className="flex flex-row items-center gap-1 text-sm text-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
							/>
						</svg>
						info@cluxtercoin.com
					</p>
					<span className="flex flex-row items-center gap-4 text-sm text-gray-100">
						{/* <a href="#home">Home</a>
						<a href="#terms">Terms</a>
						<a href="#privacy">Privacy</a>
						<a href="#support">Support</a> */}
					</span>
				</section>
				<section id="flat" className="w-full h-[130px] flex flex-row justify-between bg-stone-50 px-8">
					<span className="[60%] flex flex-row items-center gap-2">
						<img src={logo} alt="cluxter_logo" className="w-[50%] h-[50%]" />
						<h1 className="text-3xl font-bold">CLUXTERCOIN</h1>
					</span>
					<span className="w-[30%] flex flex-row items-center justify-between">
						<a className="border-orange-500 hover:border-b" href="#">Home</a>
						<a onClick={redirectToAbout} className="border-orange-500 hover:border-b">About us</a>
						{/* <a className="border-orange-500 hover:border-b" href="">Faq</a> */}
						<a onClick={redirectToContact} className="border-orange-500 hover:border-b">Contact</a>
						<a onClick={redirectToSignin} className="border-orange-500 hover:border-b">Sign-In</a>
						<a onClick={redirectToSignup} className="border-orange-500 hover:border-b">Sign-Up</a>
					</span>
					<span className="w-[12%] flex flex-row items-center justify-around">
						<ion-icon class="text-orange-500 bg-stone-200 p-2 rounded-full" name="logo-facebook"></ion-icon>
						<ion-icon class="text-orange-500 bg-stone-200 p-2 rounded-full" name="logo-twitter"></ion-icon>
						<ion-icon class="text-orange-500 bg-stone-200 p-2 rounded-full" name="logo-linkedin"></ion-icon>
						<ion-icon class="text-orange-500 bg-stone-200 p-2 rounded-full" name="logo-instagram"></ion-icon>
					</span>
				</section>
			</header>

			<section id="carousel-section" className="h-[620px] relative">
				<div id="hue"></div>
				<Carousel autoSwipe infinite={true} responsive={true} useArrowKeys={true} className="z-20">
					<div id="slide1" className="h-[620px] flex flex-row justify-around items-center w-full bg-transparent">
						{/* ...content of slide1... */}
						<span>
							<ReactSVG src={left} className="p-3 text-gray-200 rounded-full bg-stone-700 hover:text-gray-50 hover:bg-stone-900" />
						</span>
						<div className="relative flex flex-col items-center justify-center h-full gap-7">
							<h3 className="w-[60%] text-5xl text-white text-center font-extrabold relative md:top-20">We Provide Best Investment plans</h3>
							<p className="relative text-lg md:top-20">Start Bitcoin Investment today</p>
							<span className="w-[55%] relative flex flex-row justify-between top-36">
								<button onClick={redirectToSignup} className="w-[130px] h-[60px] bg-yellow-600 text-stone-100">Sign Up</button>
								<button onClick={redirectToSignin} className="w-[130px] h-[60px] bg-yellow-600 text-stone-100">Sign In</button>
							</span>
						</div>
						<span>
							<ReactSVG src={right} className="p-3 text-gray-200 rounded-full bg-stone-700 hover:text-gray-50 hover:bg-stone-900" />
						</span>
					</div>
					<div id="slide2" className="h-[620px] flex flex-row justify-around items-center w-full bg-transparent">
						{/* ...content of slide2... */}
						<span>
							<ReactSVG src={left} className="p-3 text-gray-200 rounded-full bg-stone-700 hover:text-gray-50 hover:bg-stone-900" />
						</span>
						<div className="relative flex flex-col items-center justify-center h-full gap-7">
							<h3 className="w-[60%] text-5xl text-white text-center font-extrabold relative md:top-20">Our investment is highly guaranteed</h3>
							<p className="relative text-lg font-bold text-white md:top-20">Select an Investment plan below today!</p>
							<span className="w-[55%] relative flex flex-row justify-between top-36">
								<button className="w-[130px] h-[60px] bg-yellow-600 text-stone-100">Sign Up</button>
								<button className="w-[130px] h-[60px] bg-yellow-600 text-stone-100">Sign In</button>
							</span>
						</div>
						<span>
							<ReactSVG src={right} className="p-3 text-gray-200 rounded-full bg-stone-700 hover:text-gray-50 hover:bg-stone-900" />
						</span>
					</div>
				</Carousel>
			</section>

			{/* <section id="trade-view-section"></section> */}

			<section id="welcome-section" className="w-full h-[550px] bg-white flex flex-row items-center justify-between py-20 px-20">
				<div id="left" className="w-[45%] relative md:left-20 flex flex-col justify-center gap-8">
					<h2 className="text-4xl font-bold">Welcome To Cluxtercoin</h2>
					<span className="flex flex-row justify-between ">
						<p className="flex flex-row items-center gap-2 text-lg font-bold text-stone-800">
							<img src={expert} alt="Expert_trader" /> Expert Traders
						</p>
						<p className="flex flex-row items-center gap-2 text-lg font-bold text-stone-800">
							<img src={badge} alt="Best_quality" /> Best Quality Services
						</p>
					</span>
					<p className="text-lg text-stone-600">
						Cluxtercoin is a registered investment platform providing digital asset investment management services to individuals. We provide a dynamic
						investment solution to clients in need of a self-operating portfolio, as well as a smart fund with flexible time and investment amount.
					</p>
				</div>
				<div id="right" className="w-[40%] relative md:right-10">
					<img src={pc} alt="computers" className="w-full h-full" />
				</div>
			</section>

			<section id="transact-section" className="w-full h-[600px] bg-stone-100 flex flex-col justify-center items-center gap-2 py-12">
				<div id="top2" className="h-[100px] flex justify-center mx-auto">
					<h2 className="w-[80%] font-bold text-center text-4xl">Our Latest Transaction Details</h2>
				</div>
				<div id="flat2" className="flex flex-row gap-4">
					{data.map((rec) => (
						<div className="h-[400px] w-[280px] flex flex-col p-3 gap-3 rounded-md bg-white shadow-blue-400">
							<span className="w-full h-[30%] flex flex-col items-center gap-2">
								<h3 className="text-sm text-stone-600"> {rec.pack} </h3>
								<h3 className="m-auto text-4xl font-bold font-body"> {rec.amount} </h3>
							</span>
							<span className="w-full h-[40%] flex flex-col justify-between px-6">
								<span className="flex flex-row items-center justify-between gap-10 text-lg font-semibold text-stone-800">
									Duration: <p className="text-stone-800">{rec.duration}</p>{" "}
								</span>
								<span className="flex flex-row items-center justify-between gap-10 text-lg font-semibold text-stone-800">
									Daily Profit: <p className="text-stone-800">{rec.profit}</p>{" "}
								</span>
								<span className="flex flex-row items-center justify-between gap-10 text-lg font-semibold text-stone-800">
									Minimum: <p className="text-stone-800">{rec.min}</p>{" "}
								</span>
								<span className="flex flex-row items-center justify-between gap-10 text-lg font-semibold text-stone-800">
									Maximum: <p className="text-stone-800">{rec.max}</p>{" "}
								</span>
								<span className="flex flex-row items-center justify-between gap-10 text-lg font-semibold text-stone-800">
									Referral:<p className="text-stone-800"> {rec.ref}</p>{" "}
								</span>
							</span>
							<button onClick={redirectToDepo} className="w-[120px] h-[40px] bg-yellow-600 text-stone-100 m-auto rounded-lg">
								Invest
							</button>
						</div>
					))}
				</div>
			</section>

			<section id="numbers-section" className="w-full">
				<div className="h-[200px] flex flex-row items-center justify-around bg-transparent py-8" id="numbers-sec">
					<div className="flex flex-col gap-2">
						<h3 className="text-3xl font-bold">1024</h3>
						<p className="text-yellow-600">Happy Clients</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-3xl font-bold">85</h3>
						<p className="text-yellow-600">Projects Succeed</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-3xl font-bold">30</h3>
						<p className="text-yellow-600">Awards Achieved</p>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="text-3xl font-bold">20</h3>
						<p className="text-yellow-600">Team Members</p>
					</div>
				</div>
			</section>

			<section id="reasons-section" className="w-full h-[680px] flex flex-row justify-center py-10 px-20 bg-white">
				<div className="w-[50%] flex flex-col gap-8">
					<div className="flex flex-col gap-5">
						<h3 className="w-[70%] text-4xl">Few Reasons Why People Choosing Us!</h3>
						<p className="text-stone-700 w-[80%]">
							We have a group of qualified experts, traders and analysts who are specialized in Bitcoin, Forex, Stock, Bond, Futures, Currencies, Gold
							and Silver trading
						</p>
					</div>
					<div className="flex flex-col gap-2 px-5 ">
						<div className="h-[120px] flex flex-row items-center gap-2 w-[80%]">
							<img src={shake} alt="shake-jpg" className="p-3 bg-orange-500 rounded-full" />
							<span>
								<h4 className="text-xl font-semibold">Registered and Regulated</h4>
								<p className="text-sm text-stone-600">
									Cluxtercoin is Registered under UK Companies House and Duns & Bradstreet (USA). We are also regulated by Security Exchange
									Commission(SEC) & CFTC.
								</p>
							</span>
						</div>
						<div className="h-[120px] flex flex-row items-center gap-2 w-[80%]">
							<img src={insure} alt="shake-jpg" className="p-3 bg-orange-500 rounded-full" />
							<span>
								<h4 className="text-xl font-semibold">Insured and Secured</h4>
								<p className="text-sm text-stone-600">
									Your investment is fully insured and secured. Your funds are protected by industry-leading security protocols and are FDIC
									Insured.
								</p>
							</span>
						</div>
						<div className="h-[120px] flex flex-row items-center gap-2 w-[80%]">
							<img src={support} alt="shake-jpg" className="p-3 bg-orange-500 rounded-full" />
							<span>
								<h4 className="text-xl font-semibold">24/7 Support</h4>
								<p className="text-sm text-stone-600">
									We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to
									elucidate any difficulty.
								</p>
							</span>
						</div>
					</div>
				</div>
				<div className="w-[50%]">
					<img src={office} alt="office-jpg" className="w-full h-full" />
				</div>
			</section>

			{/* <section id="latest-transact" className="h-[400px]">
				<h3 className="w-[70%] text-4xl">Our Latest Transaction Details</h3>
				<span className="h-[400px]"></span>
			</section> */}

			<section id="build-section" className="w-full h-[600px] flex flex-row relative">
				<div className="w-[50%] h-full flex flex-col justify-around items-center gap-8" id="build-sec">
					<span className="flex flex-col items-center gap-5">
						<h3 className="w-[70%] text-white text-4xl">Build your investment without even trying.</h3>
						<p className="w-[70%]">
							Turn on Round-up Rules and start saving up effortlessly. Whenever you make a purchase, Goals make it easy to save for the things you want
							or want to do. There's no need for spreadsheets or extra apps to budget and track your money.
						</p>
					</span>
					<button className="w-[20%] h-[60px] bg-yellow-600 text-white rounded-lg">More Details</button>
				</div>
				<div className="w-[50%] h-[600px]">
					<img src={certificate} alt="certification" className="w-[80%] h-full m-auto" />
				</div>
			</section>

			<section id="meet-section" className="w-full h-[600px] flex flex-col items-center gap-10 py-10 bg-white">
				<span className="flex flex-col items-center justify-center gap-5">
					<h3 className="w-[70%] font-extrabold text-center text-stone-900 text-4xl">Meet Our Professional Team Members</h3>
				</span>
				<div className="md:w-[80%] h-[380px] flex flex-row justify-around py-2">
					<span className="h-[350px] w-[200px] flex flex-col items-center gap-4 py-4">
						<img src={staff1} alt="david_forrest" className="w-full h-[280px]" />
						<p className="text-xl font-semibold text-stone-800">David Forrest</p>
					</span>
					<span className="h-[350px] w-[200px] flex flex-col items-center gap-4 py-4">
						<img src={staff2} alt="david_forrest" className="w-full h-[300px]" />
						<p className="text-xl font-semibold text-stone-800">David Forrest</p>
					</span>
					<span className="h-[350px] w-[200px] flex flex-col items-center gap-4 py-4">
						<img src={staff3} alt="david_forrest" className="w-full h-[270px]" />
						<p className="text-xl font-semibold text-stone-800">David Forrest</p>
					</span>
					<span className="h-[350px] w-[200px] flex flex-col items-center gap-4 py-4">
						<img src={staff4} alt="david_forrest" className="w-full h-[300px]" />
						<p className="text-xl font-semibold text-stone-800">David Forrest</p>
					</span>
				</div>
			</section>

			<section id="about-section" className="w-full h-[600px] flex flex-col items-center gap-10 py-10 bg-white">
				<span className="flex flex-col items-center justify-center gap-5">
					<h3 className="w-[70%] font-extrabold text-center text-stone-900 text-4xl">What They Say About Our Services</h3>
				</span>

				<Carousel autoSwipe={true} infinite={true} responsive={true} useArrowKeys={true}>
					{/* <div>Hello</div>
					<div>Hi</div>
					<div>How na</div> */}
					<div className="flex flex-col items-center gap-10 h-[500px] w-full">
						<span className="w-[50%] flex flex-col items-center gap-3">
							<img src={test1} alt="ted-moralee" className="rounded-full" />
							<p className="text-lg text-center text-stone-600">
								I highly recommend you try Cluxtercoin Trade if you really want your money to work for you. Great people to deal with. Very
								professional and offer a fantastic level of personal customer service.
							</p>
							<p className="text-lg font-bold text-stone-800">Ted Moralee</p>
						</span>
						<span className="flex flex-row gap-4">
							<ReactSVG src={left} className="p-3 text-gray-100 bg-yellow-500 rounded-full hover:text-gray-50 hover:bg-yellow-600" />
							<ReactSVG src={right} className="p-3 text-gray-100 bg-yellow-500 rounded-full hover:text-gray-50 hover:bg-yellow-600" />
						</span>
					</div>
					<div className="flex flex-col items-center gap-10 h-[500px] w-full">
						<span className="w-[50%] flex flex-col items-center gap-3">
							<img src={test2} alt="peter bowyer" />
							<p className="text-xl text-center text-stone-600">
								I am very impressed with the thoroughness and professionalism of the investment diligence packages Cluxtercoin Trade provides.
							</p>
							<p className="text-lg font-bold text-stone-800">Peter Bowyer</p>
						</span>
						<span className="flex flex-row gap-4">
							<ReactSVG src={left} className="p-3 text-gray-100 bg-yellow-500 rounded-full hover:text-gray-50 hover:bg-yellow-600" />
							<ReactSVG src={right} className="p-3 text-gray-100 bg-yellow-500 rounded-full hover:text-gray-50 hover:bg-yellow-600" />
						</span>
					</div>
					<div className="flex flex-col items-center gap-10 h-[500px] w-full">
						<span className="w-[50%] flex flex-col items-center gap-3">
							<img src={test3} alt="ted-moralee" />
							<p className="text-xl text-center text-stone-600">
								Your diligence is why we investors trust you. You're not out to make a quick buck, you're looking after our best interest. Thank
								you!
							</p>
							<p className="text-lg font-bold text-stone-800">Mr L. & Mrs H. M. Steward</p>
						</span>
						<span className="flex flex-row gap-4">
							<ReactSVG src={left} className="p-3 text-gray-100 bg-yellow-500 rounded-full hover:text-gray-50 hover:bg-yellow-600" />
							<ReactSVG src={right} className="p-3 text-gray-100 bg-yellow-500 rounded-full hover:text-gray-50 hover:bg-yellow-600" />
						</span>
					</div>
				</Carousel>
			</section>

			<footer className="h-[600px] flex flex-col items-center gap-5 bg-indigo-900 py-5">
				<section id="top" className="w-[80%] flex flex-row justify-between">
					<div className="w-[50%] flex flex-col gap-3">
						<span className="flex flex-row items-center gap-2 ">
							<img src={logo} alt="cluxter_logo" className="w-[80px] h-[80px]" />
							<h1 className="text-3xl font-bold text-stone-100">CLUXTERCOIN</h1>
						</span>
						<p className="font-light text-stone-300">
							Cluxtercoin is a registered investment platform providing digital asset investment management services to individuals. We provide a
							dynamic investment solution to clients in need of a self-operating portfolio, as well as a smart fund with flexible time and investment
							amount.
						</p>
					</div>

					<div className="w-[40%] flex flex-col gap-4">
						<h3 className="text-2xl font-bold text-stone-100">Newsletter</h3>
						<p>For update about our investment. Please subscribe</p>
						<span className="h-[50px] border">
							<input type="text" className="w-[80%] h-full bg-transparent text-stone-200 px-5" />
							<button className="w-[16%] h-[80%] text-sm rounded-md p-1 ml-3 bg-yellow-500 text-stone-100">Sign Up</button>
						</span>
					</div>
				</section>

				<section id="mid" className="w-[80%] flex flex-row gap-5">
					<span className="flex flex-col gap-5">
						<h3 className="text-2xl font-bold text-stone-100">Get In Touch</h3>
						<p className="flex flex-row text-sm font-light text-stone-300">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
								<path
									fillRule="evenodd"
									d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
									clipRule="evenodd"
								/>
							</svg>
							25 High St. Coventry CV! 5RE, United Kingdom
						</p>
						<p className="flex flex-row items-center text-sm font-light text-stone-300">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
								<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
								<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
							</svg>
							info@cluxtercoin.com
						</p>
					</span>
					<span className="w-[30%] flex flex-col gap-5">
						<h3 className="text-2xl font-bold text-stone-100">Quick Links</h3>
						<span className="w-[50%] flex flex-col gap-4">
							<button onClick={redirectToAbout} className="text-sm font-light text-left text-stone-300">About Us</button>
							<button onClick={redirectToContact} className="text-sm font-light text-left text-stone-300">Contact Us</button>
							<button disabled className="text-sm font-light text-left text-stone-300">Blog</button>
							<button disabled className="text-sm font-light text-left text-stone-300">Terms & Condition</button>
						</span>
					</span>
					<div className="w-[40%] flex flex-col gap-5">
						<h3 className="text-2xl font-bold text-stone-100">Follow Us</h3>
						<span className="flex flex-row items-center gap-3">
							<ion-icon class="bg-transparent p-3 text-stone-200 rounded-full border border-gray-200 hover:border-amber-500" name="logo-facebook"></ion-icon>
							<ion-icon class="bg-transparent p-3 text-stone-200 rounded-full border border-gray-200 hover:border-amber-500" name="logo-twitter"></ion-icon>
							<ion-icon class="bg-transparent p-3 text-stone-200 rounded-full border border-gray-200 hover:border-amber-500" name="logo-linkedin"></ion-icon>
							<ion-icon class="bg-transparent p-3 text-stone-200 rounded-full border border-gray-200 hover:border-amber-500" name="logo-instagram"></ion-icon>
						</span>
					</div>
				</section>

				<section id="flat" className="w-[80%] flex flex-row justify-between py-2 border-t-gray-400">
					<p className="flex flex-row items-center text-sm font-light">
						© <span className="text-yellow-600">Cluxtercoin</span>,  All Right Reserved.
					</p>

					<p className="text-sm font-light"> Designed By Cluxtercoin Distributed by cluxtercoin Marketer </p>
				</section>
			</footer>
		</div>
	);
}

export default homepage;
