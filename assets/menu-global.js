// Menu Global generator

"use strict";

let siteUrl = "https://swanix.org/"
let topbarLogoPath = siteUrl + "assets/logo-topbar.svg";

const menuGlobalItems = [
  { 
    name: '', 
    icon: "<img src='assets/logo-icon.svg'/>", 
    link: "/"
  },
  { 
    name: 'Brand', 
    icon: "⎈", 
    link: "/brand/"
  },
  { 
    name: 'Icons', 
    icon: "♘", 
    link: "/icons/"
  },
  { 
    name: 'UI', 
    icon: "▥", 
    link: "/ui/"
  },
  { 
    name: 'Palettes', 
    icon: "❖", 
    link: "/palettes/"
  }
];

const menuGlobalTemplate = /*html*/ `
  <div class="menu-global-sections">
      ${menuGlobalItems.map(item => `
        <a class="menu-global-item" href="${item.link}">
          <span class="menu-global-item-icon">${item.icon}</span>
          ${item.name ? `<span class="menu-global-item-text">${item.name}</span>`:` `}
        </a>
      `).join('')}
  </div>
  <div class="topbar-global" style="display:none;">
    <div style="background: var(--topbar-bg);height: 100%; width: 220px; display: flex;align-items: center;padding-left: 20px;">
      <a class="topbar-global-logo" href="${siteUrl}"><img src="${topbarLogoPath}"/></a>
    </div>
  </div>
`;


function createMenuGlobal() {
  let menuGlobal = document.createElement('div');
  menuGlobal.id = "menu-global";
  menuGlobal.innerHTML = menuGlobalTemplate + menuGlobalStyles;

  document.body.insertAdjacentElement("afterbegin", menuGlobal);
  addMenuGlobalActiveClass();
}

function addMenuGlobalActiveClass() {
  let sectionPathname = window.location.pathname;
  let menuLink = document.getElementsByClassName('menu-global-item');

  for (let i = 0; i < menuLink.length; i++) {
    if(menuLink[i].pathname === sectionPathname) {
      menuLink[i].classList.add("active");
    }
  } 
};

function validateEnvironment() {
  let sectionLocation = window.location.hostname;
  if(sectionLocation !== 'localhost') {
    createMenuGlobal();
  }
};

document.addEventListener("DOMContentLoaded", validateEnvironment);


const menuGlobalStyles = /*html*/ `
<style>

:root {
  --primary: #000000;
  --body-bg: #F7F7F7;

  /* Menu Global */
  --menu-global-bg: var(--sidebar-bg-menu-global, black);
  --menu-global-width: 68px;
  --menu-global-item-height: 72px;
  --menu-global-font-size: 12px;
  --menu-global-font: 'Roboto', sans-serif;
  --menu-global-item-icon-size: 24px;
  --menu-global-item-text: rgba(255,255,255,0.55);
  --menu-global-item-radius: 8px; 
  /* Hover */
  --menu-global-item-text-hover: rgba(255,255,255,0.9);
  --menu-global-item-bg-hover: rgba(255,255,255,0.12);
  /* Active */
  --menu-global-item-text-active: rgba(255,255,255,1);
  --menu-global-item-icon-active: rgba(255,255,255,1);
  --menu-global-item-bg-active: var(--sidebar-bg, black);

  /* Topbar */
  --topbar-global-text: white;
  --topbar-global-bg: white;
  --topbar-global-height: 48px;
}

/* Docsify */

.sidebar {
  left: 68px;
  transform: translateX(0px);
}

main > .content {
  margin-left: calc(var(--sidebar-width) + 74px);
}

.sidebar-toggle .sidebar-toggle-button {
  left: 68px;
  display: none;
}

/* Topbar Global */

.topbar-global {
  height: var(--topbar-global-height, 62px);
  width: 100%;
  position: fixed;
  top: 0;
  left: 68px;
  z-index: 8888;
  display: flex;
  align-items: center;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
  color: var(--topbar-global-text); 
  background: var(--topbar-global-bg);
}

.topbar-global-logo {
  line-height: 0;
}


/* Navigation menu */

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
  overscroll-behavior: none;
  /* background: var(--body-bg); */
} 

#menu-global {
  position: fixed;
  left: 0;
  top: 0;
  width: var(--menu-global-width);
  height: 100vh;
  overflow: auto;
  z-index: 9999;
  background: var(--menu-global-bg);
}

#menu-global .menu-global-item {
  width: var(--menu-global-width);
  height: var(--menu-global-item-height);
  font-size: var(--menu-global-font-size);
  font-family: var(--menu-global-font);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--menu-global-item-text);
  text-decoration: none;
  transition: 0.3s;
  font-weight: 400;
}

#menu-global .menu-global-item:hover {
  color: var(--menu-global-item-text-hover);
  background: var(--menu-global-item-bg-hover);
  border-top-left-radius: var(--menu-global-item-radius);
  border-bottom-left-radius: var(--menu-global-item-radius);
}

#menu-global .menu-global-item.active {
  color: var(--menu-global-item-text-active);
  background: var(--menu-global-item-bg-active);
  border-top-left-radius: var(--menu-global-item-radius);
  border-bottom-left-radius: var(--menu-global-item-radius);
}

#menu-global .menu-global-item-icon {
  font-size: var(--menu-global-item-icon-size);
  font-family: var(--menu-global-font);
  color: var(--menu-global-item-text);
}

#menu-global .menu-global-item-icon {
  height: 32px;
}

#menu-global .active .menu-global-item-icon {
  color: var(--menu-global-item-icon-active);
}

#menu-global .menu-global-item-text {
  margin-top: 5px;
}

#menu-global .menu-global-sections {
  list-style: none;
  padding: 0;
  margin: 0;
}
  
</style>
`;