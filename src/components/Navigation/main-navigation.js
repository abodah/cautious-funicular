import React from "react";
import styled from '@emotion/styled';
import MnAlertMainComponent from './alert-main';

const HeaderContainer = styled.header`
.kg-header {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 0; }
    .kg-header__overlay {
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 99;
      display: none; }
    .kg-header--revealed {
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
              box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); }
    .kg-header--top .kg-header--revealed {
      -webkit-box-shadow: none;
              box-shadow: none; }
    .kg-header--fill .kg-header__wrapper {
      background: #fff; }
    .kg-header__wrapper {
      background: #fff; }
    .kg-header__container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      height: 70px; }
      @media all and (max-width: 1240px) {
        .kg-header__container {
          padding-left: 40px;
          padding-right: 40px; } }
      @media all and (max-width: 1240px) {
        .kg-header__container {
          padding-left: 40px;
          padding-right: 40px; } }
      @media all and (max-width: 991px) {
        .kg-header__container {
          padding-left: 20px;
          padding-right: 20px; } }
      .new-grid .kg-header__container {
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 1.5rem;
        padding-left: 1.5rem; }
        @media (min-width: 62em) {
          .new-grid .kg-header__container {
            padding-right: 2.5rem;
            padding-left: 2.5rem; } }
        @media (min-width: 75em) {
          .new-grid .kg-header__container {
            padding-right: 3.75rem;
            padding-left: 3.75rem; } }
      @media (min-width: 61.9375em) {
        .kg-header__container {
          height: 88px; } }
    .kg-header .show-small {
      display: none; }
    @media all and (max-width: 991px) {
      .kg-header .show-small {
        display: block; }
      .kg-header .hide-small {
        display: none; } }
    .kg-header .kg-logo {
      width: 188px;
      height: 30px; }
      .kg-header .kg-logo__k {
        width: 30px;
        height: 30px; }
        @media (max-width: 53.125em) {
          .kg-header .kg-logo__k {
            width: 24px;
            height: 24px; } }
        .kg-header .kg-logo__k__fill {
          -webkit-transition: fill 0.1s ease-out;
          transition: fill 0.1s ease-out;
          -webkit-transition-delay: 0.3s;
                  transition-delay: 0.3s; }
      @media (max-width: 53.125em) {
        .kg-header .kg-logo__container {
          position: relative;
          z-index: 999; } }
    .kg-header.open .kg-top-nav__list__container {
      top: 0; }
      .kg-header.open .kg-top-nav__list__container::before {
        opacity: 0.8;
        top: 0; }
    @media (max-width: 53.125em) {
      .kg-header.open .kg-top-nav__list > li {
        opacity: 1; } }
    .kg-header.open .kg-top-nav__hamburger span {
      background: #000 !important; }
      .kg-header.open .kg-top-nav__hamburger span:nth-child(1) {
        -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
        top: calc(50% - 2px);
        width: 100%; }
      .kg-header.open .kg-top-nav__hamburger span:nth-child(2) {
        opacity: 0; }
      .kg-header.open .kg-top-nav__hamburger span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
        top: calc(50% - 2px);
        width: 100%; }
    .kg-header.open .kg-logo__k__fill {
      fill: #000 !important; }
  
  .kg-top-nav__mobile-toggle {
    display: none;
    position: relative;
    z-index: 999; }
    @media (max-width: 53.125em) {
      .kg-top-nav__mobile-toggle {
        display: block; } }
  
  .kg-top-nav__list {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    @media (max-width: 53.125em) {
      .kg-top-nav__list {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
        padding: 60px 20px 0; } }
    .kg-top-nav__list > li {
      margin: 0; }
      .kg-top-nav__list > li:not(:last-child) {
        margin-right: 48px; }
      @media (max-width: 53.125em) {
        .kg-top-nav__list > li {
          -webkit-transition: opacity 0.3s cubic-bezier(0.9, -0.01, 0.805, 0.95);
          transition: opacity 0.3s cubic-bezier(0.9, -0.01, 0.805, 0.95);
          -webkit-transition-delay: 0.4s;
                  transition-delay: 0.4s;
          opacity: 0;
          width: 100%;
          display: block; }
          .kg-top-nav__list > li:not(:last-child) {
            padding: 0; } }
    @media (max-width: 53.125em) {
      .kg-top-nav__list__container {
        -webkit-transition: top 0.5s cubic-bezier(0.9, -0.01, 0.805, 0.95);
        transition: top 0.5s cubic-bezier(0.9, -0.01, 0.805, 0.95);
        position: fixed;
        height: 100vh;
        top: calc(-100vh - 100px);
        left: 0;
        z-index: 99;
        background: #fff;
        width: 100%; }
      .kg-top-nav__list__wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        background: #fff; } }
  
  .kg-top-nav__main-link {
    -webkit-transition: color 0.3s ease-out;
    transition: color 0.3s ease-out;
    text-decoration: none;
    color: #15191b;
    font-size: 0.875rem;
    line-height: 1.125rem;
    letter-spacing: 0.0125rem;
    font-weight: 500;
    display: inline-block;
    position: relative;
    padding-bottom: 1px;
    text-decoration: none;
    -webkit-transition: color 400ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: color 400ms cubic-bezier(0.7, 0, 0.3, 1); }
    @media (max-width: 53.125em) {
      .kg-top-nav__main-link {
        font-size: 1.5rem;
        line-height: 1.75rem;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 0;
        padding-right: 0; } }
    .kg-top-nav__main-link path {
      -webkit-transition: fill 400ms cubic-bezier(0.7, 0, 0.3, 1);
      transition: fill 400ms cubic-bezier(0.7, 0, 0.3, 1); }
    .kg-top-nav__main-link::after {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      height: 2px;
      background: currentColor;
      width: 0;
      opacity: 0;
      -webkit-transition: width 400ms cubic-bezier(0.29, 0.29, 0.42, 1.01), opacity 600ms ease-in-out;
      transition: width 400ms cubic-bezier(0.29, 0.29, 0.42, 1.01), opacity 600ms ease-in-out; }
    @media (min-width: 53.125em) {
      .kg-top-nav__main-link:focus {
        outline: 0; }
      .kg-top-nav__main-link:focus::after, .kg-top-nav__main-link:hover::after {
        width: 100%;
        opacity: 1; } }
    @media (max-width: 53.125em) {
      .kg-top-nav__main-link {
        display: inline-block;
        font-weight: bold;
        width: auto;
        padding: 14px 0 6px;
        margin-bottom: 10px; } }
    @media (max-width: 53.125em) {
      .kg-top-nav__main-link__cta {
        -webkit-transition: color 0.3s ease-out;
        transition: color 0.3s ease-out;
        text-decoration: none;
        color: #15191b;
        font-size: 0.875rem;
        line-height: 1.125rem;
        letter-spacing: 0.0125rem;
        font-weight: 500;
        display: inline-block;
        position: relative;
        padding-bottom: 1px;
        text-decoration: none;
        -webkit-transition: color 400ms cubic-bezier(0.7, 0, 0.3, 1);
        transition: color 400ms cubic-bezier(0.7, 0, 0.3, 1);
        font-weight: bold;
        border: none;
        margin: 0;
        background: transparent;
        padding: 14px 0 6px !important;
        margin-bottom: 10px; } }
    @media (max-width: 53.125em) and (max-width: 53.125em) {
      .kg-top-nav__main-link__cta {
        font-size: 1.5rem;
        line-height: 1.75rem;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 0;
        padding-right: 0; } }
    @media (max-width: 53.125em) {
        .kg-top-nav__main-link__cta path {
          -webkit-transition: fill 400ms cubic-bezier(0.7, 0, 0.3, 1);
          transition: fill 400ms cubic-bezier(0.7, 0, 0.3, 1); }
        .kg-top-nav__main-link__cta::after {
          content: '';
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          height: 2px;
          background: currentColor;
          width: 0;
          opacity: 0;
          -webkit-transition: width 400ms cubic-bezier(0.29, 0.29, 0.42, 1.01), opacity 600ms ease-in-out;
          transition: width 400ms cubic-bezier(0.29, 0.29, 0.42, 1.01), opacity 600ms ease-in-out; } }
    @media (max-width: 53.125em) and (min-width: 53.125em) {
      .kg-top-nav__main-link__cta:focus {
        outline: 0; }
      .kg-top-nav__main-link__cta:focus::after, .kg-top-nav__main-link__cta:hover::after {
        width: 100%;
        opacity: 1; } }
    @media (min-width: 53.125em) {
      .kg-top-nav__main-link__cta {
        display: inline-block;
        font-size: 0.875rem;
        line-height: 1.125rem;
        letter-spacing: 0.0625rem;
        font-weight: 600;
        text-transform: uppercase;
        color: #15191b;
        min-width: 200px;
        white-space: nowrap;
        background-color: white;
        text-align: center;
        text-decoration: none;
        border: 1px solid white;
        padding: 14px 16px;
        border-radius: 2px;
        -webkit-transition: all 150ms;
        transition: all 150ms;
        font-size: 0.6875rem;
        line-height: 0.875rem;
        letter-spacing: 0.03125rem;
        padding: 10px 30px;
        min-width: 0;
        background-color: #15191b;
        color: white;
        border-color: #15191b; }
        .kg-top-nav__main-link__cta:hover {
          background-color: transparent;
          color: white; }
        .kg-top-nav__main-link__cta:focus {
          -webkit-box-shadow: 0 0 0 6px rgba(188, 202, 209, 0.3);
                  box-shadow: 0 0 0 6px rgba(188, 202, 209, 0.3);
          outline: 0; }
        .kg-top-nav__main-link__cta:hover {
          background-color: white;
          color: #15191b; }
        .kg-top-nav__main-link__cta:focus {
          -webkit-box-shadow: 0 0 0 6px rgba(124, 133, 138, 0.3);
                  box-shadow: 0 0 0 6px rgba(124, 133, 138, 0.3); } }
`;


const MnNavigationComponent = () => (
    <>
         <MnAlertMainComponent/>
         <HeaderContainer>
            <header role="banner" class="kg-header">
            <a href="#main-content" class="sr-only">Skip to main content</a>
            <div class="kg-header__wrapper kg-header--revealed" >

                <div class="kg-header__container">
                <a href="/" class="kg-logo__container" aria-label="Konrad - Home">
                    <div class="show-small">
                        <svg xmlns="http://www.w3.org/2000/svg" class="kg-logo__k" width="30" height="30" viewBox="0 0 30 30">
                            <path class="kg-logo__k__fill" fill-rule="evenodd" d="M0 0l14.997 14.498L30 29h-7.9L11.048 18.318 0 7.638V0zm0 30V19l5.5 5.5L11 30H0zM11 0h16l-8 8-8-8z"></path>
                        </svg>
                    </div>
                    <div class="hide-small">
                        <svg version="1.1" class="kg-logo" 
                         xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="299.5 0 193 31" enable-background="new 299.5 0 193 31" >
                            <g class="kg-logo__fill" fill="#000">
                                <polygon points="299.5,0 299.5,8.1 311,19.4 322.3,30.9 330.4,30.9 314.9,15.4 "></polygon>
                                <polygon points="299.5,19.6 299.5,30.9 310.8,30.9 305.2,25.1 		"></polygon>
                                <polygon points="311,0 319.4,8.4 327.8,0 319.4,0 		"></polygon>

                                <path d="M352.3,13.8l7.2-8.3h4.8l-8.1,9.1l8.8,10.5h-5.1l-7-8.8l-0.5,0.5v8.3h-3.8V5.6h3.8V13.8z"></path>
                                <path d="M370,15.4c0-5.7,4.6-10.3,10.5-10.3c5.9,0,10.5,4.5,10.5,10.2s-4.6,10.2-10.5,10.2
                                    C374.6,25.6,370,21.2,370,15.4z M374,15.4c0,3.7,2.9,6.8,6.5,6.8c3.7,0,6.5-3,6.5-6.8c0-3.7-2.9-6.7-6.5-6.7
                                    C377,8.8,374,11.8,374,15.4z"></path>
                                <path d="M399.1,25.3v-20h2.7l11.9,13.7V5.7h3.8v20h-2.7l-11.9-13.7v13.2H399.1z"></path>
                                <path d="M435.2,17l6.2,8.3h-4.8l-5.3-7.8h-0.5v7.8h-3.8V5.6h5.7c2.1,0,3.8,0.5,4.9,1.4c1.3,1,1.9,2.7,1.9,4.5
                                    c0,2.1-0.8,3.8-2.2,4.8C436.7,16.5,436.3,16.7,435.2,17z M430.9,14.6h1.1c2.4,0,3.8-1,3.8-3s-1.3-2.9-3.7-2.9h-1.1v5.9H430.9z"></path>
                                <path d="M461.8,21.3h-8l-1.8,4.1h-4l8.4-20h2.9l8.3,20h-4.1L461.8,21.3z M460.7,18.1l-2.7-7l-2.9,7H460.7z"></path>
                                <path d="M475,25.3V5.6h5.6c6.2,0,10.5,4,10.5,9.7c0,2.9-1.3,5.7-3.5,7.6c-1.9,1.6-4,2.2-7,2.2H475V25.3z M478.8,22
                                    h1c2.5,0,4-0.5,5.3-1.6c1.3-1.3,2.1-3,2.1-4.9c0-1.9-0.8-3.7-2.1-4.9c-1.3-1.1-2.7-1.6-5.3-1.6h-1V22z"></path>
                            </g>
                        </svg>
                    </div>
                </a>
                <div >
                    <div class="">
                        <span class="">Capabilities</span>
                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5"><path fill="#000" fill-rule="evenodd" d="M4 3.028L1.215 0 0 1.163 4 5l4-3.837L6.785 0z"></path></svg>
                    </div>
                    <div>
                        <input/>
                    </div>
                </div>
                <nav class="kg-top-nav">
                    <div class="kg-top-nav__mobile-toggle">
                        <div class="kg-top-nav__hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    
                    <div class="kg-top-nav__list__container">
                        <div class="kg-top-nav__list__wrapper">
                            <ul class="kg-top-nav__list">
                                <li><a href="/insights" class="kg-top-nav__main-link">Insights</a></li>
                                <li><a href="/careers" class="kg-top-nav__main-link">Careers</a></li>
                                <li><a href="/about" class="kg-top-nav__main-link">About</a></li>
                                <li><a href="/contact" class="kg-top-nav__main-link__cta">Join Us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
            </div>
            </header>
        </HeaderContainer>
    </>
)

export default MnNavigationComponent;