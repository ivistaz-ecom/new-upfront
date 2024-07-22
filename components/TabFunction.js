import React, { useState } from "react"

const TabFunction = () => {
  const [isShow, setIsShow] = useState(false)
  const [isShow1, setIsShow1] = useState(false)

  const handleClickShow = () => {
    setIsShow(true)
    setIsShow1(false)
  }

  const handleClickShow1 = () => {
    setIsShow(false)
    setIsShow1(true)
  }
  
  return (
    <>
      <div>
        <h1 onClick={handleClickShow}>Show 1</h1>
        {isShow && (
          <>
            <p>This is a test page i created</p>
          </>
        )}
        <h1 onClick={handleClickShow1}>Show 2</h1>
        {isShow1 && (
          <>
            <p>This is a test page i created</p>
          </>
        )}
      </div>
    </>
  )
}

export default TabFunction
