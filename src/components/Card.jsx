import React from 'react'
import {motion} from "framer-motion"
import {FaRegFileAlt} from "react-icons/fa"
import {LuDownload} from "react-icons/lu"
import {IoMdClose} from "react-icons/io"
const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:0.8}} dragTransition={{bounceStiffness:100,bounceDamping:30}} className="relative flex-shrink-0 w-52 h-64 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt/>
        <p className="text-sm mt-5 text-semibold leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
<h5>{data.filesize}</h5>
            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600">
              {data.close?<IoMdClose/>:<LuDownload size=".7em" color="#fff"/>}  
            </span>
            </div>
            {data.tag.isOpen&&<div className={`tag w-full py-4 ${"amber"===data.tag.tagColor?"bg-amber-600":"bg-violet-600"} flex items-center justify-center`}>
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>}
        </div>
    </motion.div>
  )
}

export default Card