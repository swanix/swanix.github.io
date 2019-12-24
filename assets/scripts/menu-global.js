// Swanix Menu Global
// v0.1.0
// Swanix - 2019

"use strict";

const menuGlobalItems = [
  { 
    name: '', 
    icon: "<img src='https://swanix.org/assets/images/logo-icon.svg'/>", 
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
`;

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
  --menu-global-item-text: rgba(255,255,255,0.9);
  --menu-global-item-radius: 8px; 
  /* Hover */
  --menu-global-item-text-hover: rgba(255,255,255,0.9);
  --menu-global-item-bg-hover: rgba(255,255,255,0.12);
  /* Active */
  --menu-global-item-text-active: rgba(255,255,255,1);
  --menu-global-item-icon-active: rgba(255,255,255,1);
  --menu-global-item-bg-active: var(--sidebar-bg, #262626);
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

/* Navigation menu */

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
  overscroll-behavior: none;
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
  border-top-left-radius: var(--menu-global-item-radius);
  border-bottom-left-radius: var(--menu-global-item-radius);
  background: var(--menu-global-item-bg-active);
  background-image: linear-gradient(to bottom, var(--sidebar-bg-overlay, rgba(0,0,0, 0.1)), var(--sidebar-bg-overlay, rgba(0,0,0, 0.1)));
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

function initMenuGlobal() {
  let sectionLocation = window.location.hostname;
  if(sectionLocation !== 'localhost') {
    createMenuGlobal();
  }
};

document.addEventListener("DOMContentLoaded", initMenuGlobal);