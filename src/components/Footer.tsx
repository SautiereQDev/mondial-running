import Image from 'next/image'
import NewsletterCard from '@/components/NewsLetterCard'
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-[#F0F0F0]">
			<NewsletterCard className="relative -top-22 max-w-[85vw] mx-auto"/>
			<div className="max-w-[85vw] mx-auto">
				<div className="flex flex-col justify-between pb-12">
					<div className="flex justify-between">
						<div className="flex flex-col justify-between max-w-1/3">
							<h4 className="text-xl font-bold font-[montserrat]">Mondial-running</h4><p>We have clothes that suits your
							style
							and which you’re proud to wear. From women to men.</p>
							<div className="flex flex-row gap-2 mt-2">
								<Link href="https://x.com">
									<Image src="/socials/x.svg" alt="X logo" width={24} height={24}/>
								</Link>
								<Link href="https://github.com/SautiereQDev">
									<Image src="/socials/github.svg" alt="GitHub logo"
												 width={24}
												 height={24}/>
								</Link>
								<Link href="https://instagram.com">
									<Image src="/socials/instagram.svg" alt="Instagram logo" width={24}
												 height={24}/>
								</Link>
								<Link href="https://facebook.com">
									<Image src="/socials/facebook.svg" alt="Facebook logo" width={24}
												 height={24}/>
								</Link>
							</div>
						</div>
						<div>
							<h5 className="text-lg font-bold font-[montserrat]">COMPANY</h5>
							<ul>
								<li>About</li>
								<li>Features</li>
								<li>Works</li>
								<li>Career</li>
							</ul>
						</div>
						<div>
							<h5 className="text-lg font-bold font-[montserrat]">HELP</h5>
							<ul>
								<li>Customers Support</li>
								<li>Delivery Details</li>
								<li>Terms & conditions</li>
								<li>Privacy Policy</li>
							</ul>
						</div>
						<div>
							<h5 className="text-lg font-bold font-[montserrat]">FAQ</h5>
							<ul>
								<li>Account</li>
								<li>Manage Deliveries</li>
								<li>Orders</li>
								<li>Payments</li>
							</ul>
						</div>
						<div>
							<h5 className="text-lg font-bold font-[montserrat]">RESSOURCES</h5>
							<ul>
								<li>Free eBooks</li>
								<li>Development Tutorial</li>
								<li>How to - Blog</li>
								<li>Youtube Playlist</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="border-0.5 border-gray-300"/>
				<div className="flex flex-row justify-between pt-8 pb-20">
					<p>Mondial-running © 2000-{new Date().getFullYear()}, All Rights Reserved</p>
					<div className="flex">
						<Image src="/logos/visa.svg" alt="logo" width={100} height={100} className="h-[50px] w-[70px]"/>
						<Image src="/logos/mastercard.svg" alt="logo" width={100} height={100} className="h-[50px] w-[70px]"/>
						<Image src="/logos/paypal.svg" alt="logo" width={100} height={100} className="h-[50px] w-[70px]"/>
						<Image src="/logos/applepay.svg" alt="logo" width={100} height={100} className="h-[50px] w-[70px]"/>
						<Image src="/logos/googlepay.svg" alt="logo" width={100} height={100} className="h-[50px] w-[70px]"/>
					</div>
				</div>
			</div>
		</div>
	)
}
