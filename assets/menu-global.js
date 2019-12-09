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
    link: "/palettes/"
  }
];

const menuGlobalTemplate = `
  <div class="menu-global-sections">
      ${menuGlobalItems.map(item => `
        <a class="menu-global-item" href="${item.link}">
          <span class="menu-global-item-icon">${item.icon}</span>
          <span class="menu-global-item-text">${item.name}</span>
        </a>
      `).join('')}
  </div>
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

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  
    :root {
      --primary: #000000;
      --body-bg: #F7F7F7;
      
      --menu-global-bg: #262626;
      --menu-global-width: 68px;
      --menu-global-item-height: 78px;
      --menu-global-font-size: 12px;
      --menu-global-font: 'Roboto', sans-serif;
      
      --menu-global-item-text: rgba(255,255,255,0.6);
      --menu-global-item-text-hover: rgba(255,255,255,0.9);
      --menu-global-item-bg-hover: rgba(255,255,255,0.1);
  
      --menu-global-item-text-active: rgba(255,255,255,1);
      --menu-global-item-bg-active: royalblue;
  
      --menu-global-item-icon-size: 24px;
  
    }
  
    body {
      overscroll-behavior: none;
      background: var(--body-bg);
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
    }
  
    #menu-global .menu-global-item.active {
      color: var(--menu-global-item-text-active);
      background: var(--menu-global-item-bg-active);
    }
  
    #menu-global .menu-global-item-icon {
      font-size: var(--menu-global-item-icon-size);
      font-family: var(--menu-global-font);
      color: var(--menu-global-item-text);
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

function validateEnvironment() {
  let sectionLocation = window.location.hostname;
  if(sectionLocation !== 'localhost') {
    createMenuGlobal();
  }
};

document.addEventListener("DOMContentLoaded", validateEnvironment);