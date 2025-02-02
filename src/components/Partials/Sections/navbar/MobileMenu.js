"use client"
import { useRef, useState } from 'react';
import Logo from '../../Elements/Logo/Logo';
import './mobile-menu.css';

import Link from 'next/link';
import ChaveronDown from '../../Elements/icons/ChaveronDown';
import CloseIcon from '../../Elements/icons/CloseIcon';
import MenuIcon from '../../Elements/icons/MenuIcon';

function MobileMenu({ services }) {
	const ad = useRef();
	const [isActive, setActive] = useState('false');
	const [isMenuActive, setIsMenuActive] = useState('false');
	const [isShow, setIsShow] = useState('false');

	const ToggleClass = () => {
		setActive(!isActive);
		setIsShow(!isShow);
	};

	const navClose = () => {
		ToggleClass();
	};

	return (
		<div className="mobile_menu">
			<div className="mobile_menu_inner">
				<div className="logo">
					<Logo />
				</div>
				<button
					type="button"
					className={isActive ? 'inactive' : 'active'}
					onClick={ToggleClass}
					ref={ad}
				>
					{isActive ? <MenuIcon /> : <CloseIcon />}
				</button>
			</div>

			<div className={`main_nav ${isShow ? '' : 'show'}`}>
				<ul className="menu">
					<li>
						<button
							type="button"
							className={`nav_item services ${
								isMenuActive ? '' : 'active'
							}`}
							onClick={() => setIsMenuActive(!isMenuActive)}
						>
							services
							<ChaveronDown />
						</button>
						<div
							className={`services_menu ${
								isMenuActive ? '' : 'show'
							}`}
						>
							<div className="sub_menu">
								{services.map((data, index) => (
									<Link
										href={`/services/${data._id}`}
										className="nav_link"
										onClick={navClose}
										key={index}
									>
										{data.name}
									</Link>
								))}
							</div>
						</div>
					</li>
					<li>
						<Link
							href="/pricing"
							className="nav_item"
							onClick={navClose}
						>
							pricing
						</Link>
					</li>
					<li>
						<Link
							href="/case-studies"
							className="nav_item"
							onClick={navClose}
						>
							case-studies
						</Link>
					</li>
					<li>
						<Link
							href="/blog"
							className="nav_item"
							onClick={navClose}
						>
							blog
						</Link>
					</li>
					<li>
						<Link
							href="/security-compliance"
							className="nav_item"
							onClick={navClose}
						>
							security and compliance
						</Link>
					</li>
					<li>
						<Link
							href="/about-us"
							className="nav_item"
							onClick={navClose}
						>
							about us
						</Link>
					</li>
					<li>
						<Link
							href="/get-quote"
							className="nav_item"
							onClick={navClose}
						>
							get a quote
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default MobileMenu;
