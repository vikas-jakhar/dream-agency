import uiDesktop from "../../assets/images/png/ui-desktop.png";
import uiMobile from "../../assets/images/png/ui-mobile.png";
import goldDesktop from "../../assets/images/png/goldcrown-desktop.png";
import goldMobile from "../../assets/images/png/goldcrown-mobile.png";
import conciergeDesktop from "../../assets/images/png/concierge-desktop.png";
export const NAVBAR_DATA_LIST = [
    { title: "Home", url: "#hero" },
    { title: "About us", url: "#About" },
    { title: "Service", url: "#service" },
    { title: "Contact Us", url: "#contact" },
]
export const SOCIAL_MEDIA_DATA_LIST = [
    { icon: "facebook", url: "https://www.facebook.com/" },
    { icon: "linkedin", url: "https://www.linkedin.com/login" },
    { icon: "instagram", url: "https://www.instagram.com/accounts/login/?hl=en" },
]
export const WHAT_WE_DO_DATA_LIST = [
    { icon: "world", course: "Website Design" },
    { icon: "monitor", course: "Web Development" },
    { icon: "mobile", course: "Mobile APP Development" },
    { icon: "rocket", course: "Marketing" },
    { icon: "monitor", course: "Web Development" },
    { icon: "mobile", course: "Mobile APP Development" },
]
export const OUR_RECENT_WORK_DATA_LIST = [
    { desktopImage: uiDesktop, mobileImage: uiMobile, title: "UI Soup" },
    { desktopImage: goldDesktop, mobileImage: goldMobile, title: "Goldcrown Labs" },
    { desktopImage: conciergeDesktop, mobileImage: uiMobile, title: "Close Concierge" },
    { desktopImage: goldDesktop, mobileImage: goldMobile, title: "Goldcrown Labs" },
]