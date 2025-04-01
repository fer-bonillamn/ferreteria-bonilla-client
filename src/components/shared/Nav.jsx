import { BiChevronDown, BiSolidMessageRoundedDots } from 'react-icons/bi'
import { FaBriefcase, FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosNotifications } from 'react-icons/io'
import {
  RiHome3Fill,
  RiMessage3Fill,
  RiNotification3Fill,
} from 'react-icons/ri'
import { TbMessageCircleFilled } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { Inbox, Notifications, Settings } from '../index.components'
import { useState } from 'react'

const Nav = ({ toggleShow }) => {
  const [currentBox, setCurrentBox] = useState(null)
  const [showInbox, setShowInbox] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const toggleShowInbox = () => {
    setShowInbox((prev) => !prev)
    setShowNotifications(false)
    setShowSettings(false)

    if (currentBox !== 'msg') setCurrentBox('msg')
    else setCurrentBox(null)
  }

  const toggleShowNotifications = () => {
    setShowNotifications((prev) => !prev)
    setShowInbox(false)
    setShowSettings(false)
    if (currentBox !== 'noti') setCurrentBox('noti')
    else setCurrentBox(null)
  }

  const toggleShowSettings = () => {
    setShowSettings((prev) => !prev)
    setShowInbox(false)
    setShowNotifications(false)
    if (currentBox !== 'settings') setCurrentBox('settings')
    else setCurrentBox(null)
  }
  return (
    <nav className="h-[50px] bg-[#fd6c01] flex justify-center lg:px-0 px-10">
      {/* General */}
      <div className="lg:w-[1400px] w-full mx-auto flex flex-row items-center justify-between relative">
        {/* Left */}
        <div className="flex flex-row items-center lg:gap-3 gap-1">
          <img
            src={'/public/mascota-clean.png'}
            className="w-[45px]"
            alt="Logo Ferretería BOnilla"
          />

          <div className="flex flex-row items-center justify-between lg:w-[350px] w-[210px] bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              className="bg-white lg:py-2 py-1 pl-5 outline-none text-sm flex-1"
              placeholder="Buscar ofertas"
            />
            <div className="w-[50px] h-full flex justify-center items-center">
              <FaSearch color="#d1d1d1" size={18} />
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="lg:flex-row lg:items-center gap-2 hidden lg:flex relative">
          <NavLink
            to={'/offers'}
            className="w-[40px] h-[40px] rounded-full bg-[#cb4d03] border border-gray-300 cursor-pointer flex justify-center items-center text-white hover:bg-[#ff850b] transition-all duration-300"
            type="button"
          >
            <FaBriefcase size={18} />
          </NavLink>
          <button
            className={`w-[40px] h-[40px] rounded-full ${
              currentBox === 'msg' ? 'bg-[#ff850b]' : 'bg-[#cb4d03]'
            }  border border-gray-300 cursor-pointer flex justify-center items-center text-white hover:bg-[#ff850b] transition-all duration-300`}
            type="button"
            onClick={toggleShowInbox}
          >
            <BiSolidMessageRoundedDots size={18} />
          </button>
          <button
            className={`w-[40px] h-[40px] rounded-full ${
              currentBox === 'noti' ? 'bg-[#ff850b]' : 'bg-[#cb4d03]'
            }  border border-gray-300 cursor-pointer flex justify-center items-center text-white hover:bg-[#ff850b] transition-all duration-300`}
            type="button"
            onClick={toggleShowNotifications}
          >
            <IoIosNotifications size={18} />
          </button>

          <button
            className="w-[40px] h-[40px] rounded-full bg-[#cb4d03] cursor-pointer flex justify-center items-center text-white relative hover:opacity-90 transition-colors duration-200"
            type="button"
            onClick={toggleShowSettings}
          >
            <img
              src="/public/user.png"
              alt="Foto de perfil"
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute w-[15px] h-[15px] rounded-full flex justify-center items-center right-0 -bottom-1 bg-[#cb4d03]">
              <BiChevronDown />
            </div>
          </button>

          {/* Box Messages */}
          <Inbox showInbox={showInbox} />
          {/* Box Notifications */}
          <Notifications showNotifications={showNotifications} />

          {/* Box Settingss */}
          <Settings showSettings={showSettings} />
        </div>

        <button
          className="lg:hidden w-[35px] flex justify-center items-center text-white hover:text-gray-200 transition-colors duration-300"
          onClick={toggleShow}
        >
          <GiHamburgerMenu size={25} />
        </button>
      </div>
    </nav>
  )
}

export default Nav
