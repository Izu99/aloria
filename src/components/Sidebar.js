import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink, useLocation } from 'react-router-dom';
import '../style/Sidebar.css'
import Order from '../pages/Order';

const SidebarComponent = () => {
	const location = useLocation();
	const [collapsed, setCollapsed] = useState(false);
	// const [Theme, setTheme] = useState < Theme > ('light');
	const [theme, setTheme] = useState('light');
	const [rtl, setRtl] = React.useState(false);
	const [toggled, setToggled] = React.useState(false);
	const [broken, setBroken] = React.useState(false);
	const [hasImage, setHasImage] = React.useState(false);
	const themes = {
		light: {
			sidebar: {
				backgroundColor: '#ffffff',
				color: '#607489',
			},
			menu: {
				menuContent: '#fbfcfd',
				icon: '#12356',
				hover: {
					backgroundColor: '#c5e4ff',
					color: '#44596e',
				},
				disabled: {
					color: '#9fb6cf',
				},
			},
		},
		dark: {
			sidebar: {
				backgroundColor: '#0b2948',
				color: '#8ba1b7',
			},
			menu: {
				menuContent: '#082440',
				icon: '#59d0ff',
				hover: {
					backgroundColor: '#00458b',
					color: '#b6c8d9',
				},
				disabled: {
					color: '#3e5e7e',
				},
			},
		},
	};

	// Define hex to rgba converter function
	const hexToRgba = (hex, alpha) => {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);

		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	};

	// Define the handleToggleCollapse function
	const handleToggleCollapse = () => {
		setCollapsed(!collapsed);
	};


	// Handle RTL change event
	const handleRTLChange = (e) => {
		setRtl(e.target.checked);
	};

	// Handle theme change event
	const handleThemeChange = (e) => {
		setTheme(e.target.checked ? 'dark' : 'light'); // Toggle theme between 'dark' and 'light'
	};

	// Handle image change event
	const handleImageChange = (e) => {
		setHasImage(e.target.checked);
	};

	const menuItemStyles = {
		root: {
			fontSize: '13px',
			fontWeight: 400,
		},
		icon: {
			color: themes[theme].menu.icon,
		},
		SubMenuExpandIcon: {
			color: '#b6b7b9',
		},
		subMenuContent: ({ level }) => ({
			backgroundColor:
				level === 0
					? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
					: 'transparent',
		}),
		button: {
			'&:hover': {
				backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
				color: themes[theme].menu.hover.color,
			},
		},
		label: ({ open }) => ({
			fontWeight: open ? 600 : undefined,
		}),
	};

	return (
		<div className='sidebar' style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr', width:'auto' }}>
			<Sidebar
				collapsed={collapsed}
				toggled={toggled}
				onBackdropClick={() => setToggled(false)}
				onBreakPoint={setBroken}
				image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
				rtl={rtl}
				breakPoint="md"
				backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
				rootStyles={{
					color: themes[theme].sidebar.color,
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
					{/* <SidebarHeader rtl={rtl} style={{ marginBottom: '24px', marginTop: '16px' }} /> */}
					<div style={{ flex: 1, marginBottom: '32px' }}>
						<div style={{ padding: '0 24px', marginBottom: '8px' }}>
							<h5
								variant="body2"
								fontWeight={600}
								style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
							>
								General
							</h5>
						</div>
						<Menu className='menu' menuItemStyles={menuItemStyles}>
							<MenuItem className='menu-item' icon={<i className="fas fa-chart-line"></i>} active={location.pathname === '/dashboard'}>
								<NavLink to="/dashboard">Dashboard</NavLink>
							</MenuItem>
							<SubMenu label="Products" icon={<i className="fas fa-box-archive"></i>}>
								<MenuItem className='menu-item'>
									<NavLink to="/viewproducts">View Products</NavLink>
								</MenuItem>
								<MenuItem className='menu-item'>
									<NavLink to="/addProducts">Add Products</NavLink>
								</MenuItem>
							</SubMenu>
							<MenuItem className='menu-item' icon={<i className="fas fa-cart-shopping"></i>} active={location.pathname === '/order'}>
								<NavLink to="/order">Order</NavLink>
							</MenuItem>
							<MenuItem className='menu-item' icon={<i className="fas fa-money-check"></i>} active={location.pathname === '/transaction'}>
								<NavLink to="/transaction">Transaction</NavLink>
							</MenuItem>
							<MenuItem className='menu-item' icon={<i className="fas fa-users"></i>} active={location.pathname === '/customer'}>
								<NavLink to="/customer">Customer</NavLink>
							</MenuItem>
						</Menu>
						<div className="sidebar-footer">
							<p>Footer</p>
						</div>
						<div className="theme-toggle">
							<label>
								<input type="checkbox" onChange={handleThemeChange} />
								Dark Theme
							</label>
						</div>
						<div className="toggle-collapse" onClick={handleToggleCollapse}>
							<i className={`fas ${collapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
						</div>
					</div>
				</div>
			</Sidebar >
			<main>
				<Order />
			</main>
		</div >

	);
};

export default SidebarComponent;
