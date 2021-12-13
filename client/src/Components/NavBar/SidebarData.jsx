import React from "react";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>
  },
  {
    title: 'AboutMe',
    path: '/aboutme',
    icon: <RiIcons.RiProfileLine/>
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <GiIcons.GiSkills/>
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiOutlineProject />
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillContacts/>
  },
]