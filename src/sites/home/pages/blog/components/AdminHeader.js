import React from "react"

import { Link } from "react-router-dom"

import { useTheme, HeaderComponent, Input, LinkButton } from "modules/avl-components/src"
import { DmsButton } from "modules/dms/components/dms-button"
import { useMakeOnClick } from "modules/dms/wrappers/dms-provider"

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

const AdminHeader = ({ dataItems, top }) => {
  const [page, setPage] = React.useState("");
  return (
    <div className="">
      <Header>
        <div className="flex w-full">
          <div className="flex-1 font-bold text-2xl flex">
            <Link to="/" className="px-4 hover:bg-gray-300 flex items-center">
              <span className="fa fa-home"/>
            </Link>
          </div>

          <div className="flex-0 flex items-center justify-end">
            { top.dmsAction === "list" ?
              <>
                <Input type="text" value={ page } onChange={ setPage }/>
                <DmsButton label="Add New Page"
                  className="whitespace-nowrap ml-2"
                  action={ {
                    disabled: !page,
                    action: "api:create",
                    seedProps: {
                      page,
                      index: dataItems.reduce((a, c) => Math.max(a, +c.data.index), -1) + 1
                    }
                  } }/>
              </> :
              <>
                <DmsButton action="dms:back"/>
                <DmsButton className="ml-1" action="dms:home"/>
              </>
            }
          </div>
        </div>
      </Header>
    </div>
  )
}
export default AdminHeader;
