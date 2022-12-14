import React from "react";
import { useTheme, TopNav, SideNav, FlyoutMenu } from "modules/avl-components/src/";
import { Link } from "react-router-dom";
import AuthMenu from "pages/Auth/AuthMenu"
import {getDomain} from "utils"




const Logo = ({sideNav}) => {
	const theme = useTheme()
	const themeOptions = {size: sideNav.size || 'compact',color: sideNav.color || 'dark'}
	return (
		<>
		<Link to="/" className={`${theme.sidenav(themeOptions).logoWrapper} flex flex-col items-center justify-center`}>
			A	
		</Link>
		</>
	)
}



const Layout = ({ children, menus, sideNav, title, site }) => {
	const theme = useTheme()
	const themeOptions = {size: sideNav.size || 'compact',color: sideNav.color || 'dark'}
	const [flyoutOpen, setFlyoutOpen] = React.useState(false)

	const PROJECT_HOST = getDomain(window.location.host)//psl.parse(window.location.host).domain

	return (
		<div className='flex' >
			<div className={`hidden md:block`}>
				<div className='fixed h-screen'>
					<SideNav 
						topMenu={
							<Logo sideNav={sideNav}/>
						}
						themeOptions={themeOptions}
						menuItems={menus}
					/>
				</div>
			</div>
			<div className={`flex-1 flex items-start flex-col items-stretch min-h-screen`}>
				
				<div className={`${theme.sidenav(themeOptions).fixed}`}>
					<TopNav
						leftMenu={
							<>
								<div className='flex items-center justify-center h-12 shrink'>
									<Link to="/" className={`${sideNav.size === 'none' ? '' : 'md:hidden'}` }>
										<div>
											A
										</div>
									</Link>
									<div 
										className={`text-lg font-bold text-gray-800 hover:text-gray-600 cursor-pointer px-4 `}
										onClick={() => setFlyoutOpen(!flyoutOpen)}
									>
										{site} 
									</div>
									<div className={`text-2xl font-thin text-blue-500 truncate shrink` }>
										{title}
									</div>
								</div>
								<div>
								</div>
							</>
						}
						rightMenu={<AuthMenu />}
						
					/>
				</div>
				<div className={`h-full flex-1 bg-neutral-100 ${theme.sidenav(themeOptions).fixed}`}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;