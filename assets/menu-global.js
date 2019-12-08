// Menu Global generator

"use strict";

const menuGlobalItems = [
  { 
    name: 'Intro', 
    icon: "⌂", 
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
    link: "/stock/"
  },
  { 
    name: 'Mockups', 
    icon: "⭆", 
    link: "/motion/"
  }
];

const menuGlobalTemplate = `
  <ul>
      ${menuGlobalItems.map(item => `
        <li>
          <a class="menu-global-item" href="${item.link}">
            <span class="menu-global-item-icon">${item.icon}</span>
            <span class="menu-global-item-text">${item.name}</span>
          </a>
        </li>
      `).join('')}
  </ul>
`;

const menuGlobalStyles = `
<style>

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

  :root {
    --primary: #000000;
    --body-bg: #F7F7F7;
    --header-bg: var(--primary);
    --nav-bg: #383838;
    --nav-global-bg: #262626;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  body {
    overscroll-behavior: none;
  } 

  .menu-global {
    position: fixed;
    background: var(--nav-global-bg);
    width: 68px;
    height: 100vh;
    overflow: auto;
    z-index: 9999;
    font-family: sans-serif;
  }

  .menu-global a {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    transition: 0.3s;
  }

  .menu-global a:hover {
    color: rgba(255,255,255,0.9);
    background: rgba(255,255,255,0.1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .menu-global a.active {
    color: rgba(255,255,255,1);
    background: #999;
    background: royalblue;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .menu-global-item-text {
    margin-top: 5px;
  }

  .menu-global ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-global li {
    height: 68px;
    width: 68px;
    margin: 0;
    text-align: center;
    font-size: 12px;
    color: white;
  }

  .menu-global-item-icon {
    font-size: 24px;
  }


</style>
`;

function createMenuGlobal() {
  let menuGlobal = document.createElement('div');
  menuGlobal.className = "menu-global";
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