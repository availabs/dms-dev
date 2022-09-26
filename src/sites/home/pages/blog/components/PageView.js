import React from "react"

import ReadOnlyEditor from "modules/dms/components/editor/editor.read-only"

import get from "lodash.get"

import PageHeader from "./PageHeader"

const PageView = ({ item, dataItems, ...props }) => {
// all data for the current page is stored in item.data
// dataItems is an array of all pages, including the current page (item)
  console.log('dataItems', item,dataItems)

  if(!dataItems[0]) {
    return (
      <div className=''>
        <div>
        <PageHeader dataItems={ dataItems }/>
        </div>
        <div className='p-20'>
         No Pages Created.
        </div>
      </div>
    )
  }

  if(!item) {
    item = dataItems[0]
  } 

  return (
    <div style={ { transform: "translate(0, 0)" } }>
      <PageHeader dataItems={ dataItems }/>
      {item.id}
      <div className="w-full mx-auto max-w-7xl pt-10">
        { get(item, ["data", "sections"], []).map(({ section, content }) =>
            <div className="border rounded p-2 my-2" key={ section }>
              { section }
              <ReadOnlyEditor value={ content }/>
            </div>
          )
        }
      </div>
    </div>
  )
}
export default PageView;
