import React from "react"

import {
  useTheme,
  NavItem,
  TopUserMenu,
  UserMenuItem,
  UserMenuSeparator
} from "modules/avl-components/src"

import { useMakeInteraction } from "modules/dms/wrappers/dms-provider"

import { useAuth } from "@availabs/ams"

import get from "lodash.get"

const Header = ({ children }) => {
  const theme = useTheme();
  return (
    <div className={ `w-full ${ theme.headerBg }` }>
      <div className="h-16 flex max-w-7xl mx-auto">
        { children }
      </div>
    </div>
  )
}

const PageHeaderNavItem = ({ item }) => {
  // console.log('hello error',item)
  // const { to } = useMakeInteraction("view", item);
  return (
    <NavItem type="top" to={ `/view/${item.id}` }>
      { item.data.page }
    </NavItem>
  )
}

const PageHeader = ({ dataItems = [] }) => {
  const user = useAuth();
    console.log('pageheader', dataItems)
    return (
      <div className="">
        <Header>
          <div className="flex flex-1">
            { dataItems.length ? null :
              <NavItem to="/" type="top">
                Home
              </NavItem>
            }
            { dataItems.sort((a, b) => a.data.index - b.data.index)
                .map(di =>
                  <PageHeaderNavItem key={ di.id } item={ di }/>
                )
            }
          </div>
          <div className="flex-0 flex items-center justify-end ml-10">
            <TopUserMenu>
              
              <UserMenuItem to="/songs">
                  Admin
              </UserMenuItem>
              <UserMenuSeparator />
              <UserMenuItem to="/auth/logout">
                Logout
              </UserMenuItem>
            </TopUserMenu>
          </div>
        </Header>
      </div>
    )
  }
export default PageHeader;
