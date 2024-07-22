'use client'

import { useState } from 'react'

const InsightsTab = ({ tabs, getActiveTab }) => {
  const [active, setActive] = useState(1)

  const getActiveId = (id) => {
    setActive(id)
  }

  return (
    <>
      <ul className="bg-customLightGray lg:flex">
        {tabs.map((item) => {
          return (
            <li
              key={item.id}
              className={
                active === item.id
                  ? 'bg-activeTabButton border-b-4 border-black'
                  : ''
              }
            >
              <button
                type="button"
                className="px-8 py-4 text-[#4A4A4A] text-xl"
                onClick={() => {
                  getActiveId(item.id)
                  getActiveTab(item.tab)
                }}
              >
                {item.tab}
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default InsightsTab



















// 'use client'

// import { useState } from 'react'

// const Tab = ({ tabs, getActiveTab }) => {
//   const [active, setActive] = useState(1)
//   const [expanded, setExpanded] = useState({})

//   const getActiveId = (id) => {
//     setActive(id)
//   }

//   const toggleExpand = (id) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }))
//   }

//   return (
//     <>
//       <ul className="bg-customLightGray lg:flex">
//         {tabs.map((item) => {
//           const isActive = active === item.id
//           const isExpanded = expanded[item.id]
//           return (
//             <li
//               key={item.id}
//               className={
//                 isActive
//                   ? 'bg-activeTabButton border-b-4 border-black'
//                   : ''
//               }
//             >
//               <button
//                 type="button"
//                 className="px-8 py-4 text-[#4A4A4A] text-xl flex justify-between items-center"
//                 onClick={() => {
//                   getActiveId(item.id)
//                   getActiveTab(item.tab)
//                   toggleExpand(item.id)
//                 }}
//               >
//                 {item.tab}
//                 <span className="ml-2">
//                   {isExpanded ? '▲' : '▼'}
//                 </span>
//               </button>
//               {isExpanded && (
//                 <div className="tab-content">
//                   {/* Place tab content here */}
//                 </div>
//               )}
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// export default Tab
