import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { RiTelegram2Fill } from 'react-icons/ri';
import { IoCartOutline, IoCarOutline, IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";



export const NAV_MENU_ITEM = [
    {
        id: 1,
        label: "Home",
        link: "/"
    },
    {
        id: 2,
        label: "About",
        link: ""
    },
    {
        id: 3,
        label: "Blog",
        link: ""
    },
    {
        id: 4,
        label: "Contact us",
        link: ""
    },
]

export const NAV_ICONS = [
    {
        id: 1,
        link: '',
        icon: FaFacebookF,
    },
    {
        id: 2,
        link: '',
        icon: RiInstagramFill,
    },
    {
        id: 3,
        icon: RiTelegram2Fill,
        link: ''
    },
]


export const ORDER_TRACKER_DATA = [
    {
        id: 1,
        icon: IoCartOutline,
        label: "Pending"
    },
    {
        id: 2,
        icon: CiSettings,
        label: "Processing"

    },
    {
        id: 3,
        icon: CiMedal,
        label: "Shipped"

    },
    {
        id: 4,
        icon: IoCarOutline,
        label: "Transit"

    },
    {
        id: 5,
        icon: IoHomeOutline,
        label: "Delivered"

    },
]