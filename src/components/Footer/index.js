import React from 'react';
import styled from '@emotion/styled';


const FooterContainer = styled.footer`

.kg-footer {
  font-weight: normal;
  color: #424d54;
  font-size: 0.875rem;
  line-height: 1.875rem;
  background-color: black;
  color: white; }
  @media (min-width: 62em) {
    .kg-footer {
      font-size: 1rem;
      line-height: 2.125rem;
      letter-spacing: 0.0125rem; } }
  .kg-footer__inner {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto; }
    @media all and (max-width: 1240px) {
      .kg-footer__inner {
        padding-left: 40px;
        padding-right: 40px; } }
    @media all and (max-width: 1240px) {
      .kg-footer__inner {
        padding-left: 40px;
        padding-right: 40px; } }
    @media all and (max-width: 991px) {
      .kg-footer__inner {
        padding-left: 20px;
        padding-right: 20px; } }
    .new-grid .kg-footer__inner {
      max-width: 1200px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 1.5rem;
      padding-left: 1.5rem; }
      @media (min-width: 62em) {
        .new-grid .kg-footer__inner {
          padding-right: 2.5rem;
          padding-left: 2.5rem; } }
      @media (min-width: 75em) {
        .new-grid .kg-footer__inner {
          padding-right: 3.75rem;
          padding-left: 3.75rem; } }
  .kg-footer__content {
    padding-top: 35px; }
    @media (min-width: 62em) {
      .kg-footer__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        padding-top: 60px; } }
  .kg-footer .kg-footer__logo {
    display: block;
    margin-top: 5px;
    margin-right: 28px; }
    .kg-footer .kg-footer__logo svg {
      fill: #fff; }
    @media (max-width: 61.99em) {
      .kg-footer .kg-footer__logo {
        margin-bottom: 24px; } }
  .kg-footer .kg-logo__k {
    width: 30px;
    height: 30px; }
  .kg-footer__meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 40px; }
    @media all and (max-width: 991px) {
      .kg-footer__meta {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
                flex-direction: column-reverse;
        margin-top: 0; } }
  .kg-footer__disclaimer {
    font-size: 0.875rem;
    line-height: 2.29;
    color: inherit;
    font-size: 0.75rem;
    color: #ccc; }
    @media (max-width: 61.99em) {
      .kg-footer__disclaimer {
        line-height: 1.25; } }
  .kg-footer__blurb {
    -ms-flex-preferred-size: 345px;
        flex-basis: 345px;
    margin-right: auto; }
    @media (max-width: 61.99em) {
      .kg-footer__blurb {
        margin: 0;
        margin-bottom: 24px;
        -ms-flex-preferred-size: auto;
            flex-basis: auto; } }
  .kg-footer__blurb-large {
    font-size: 1.5rem;
    line-height: 1.33;
    font-weight: 500;
    color: white;
    margin: 0 0 18px; }
    @media (max-width: 61.99em) {
      .kg-footer__blurb-large {
        margin-bottom: 8px; } }
    .kg-footer__blurb-large sup {
      font-size: 0.7em;
      top: -0.35em; }
  .kg-footer__blurb-small {
    font-size: 0.875rem;
    margin: 0;
    line-height: 1.86; }
  .kg-footer__nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: auto; }
    @media (max-width: 61.99em) {
      .kg-footer__nav {
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        width: 100%; } }
  .kg-footer__nav-group {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-left: 44px; }
    @media (max-width: 61.99em) {
      .kg-footer__nav-group {
        -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
        margin: 0 0 16px 0; } }
    .kg-footer__nav-group li {
      padding: 0;
      margin: 0;
      line-height: normal; }
  .kg-footer__nav-group-title {
    font-size: 0.875rem;
    line-height: 2.29;
    color: inherit;
    text-decoration: none;
    display: inline-block;
    font-weight: 500;
    color: white;
    margin-bottom: 10px; }
    @media (min-width: 62em) {
      .kg-footer__nav-group-title {
        white-space: nowrap; } }
  .kg-footer__link {
    font-size: 0.875rem;
    line-height: 1.86;
    color: #ccc;
    text-decoration: none; }
    .kg-footer__link:hover, .kg-footer__link:focus {
      text-decoration: underline; }

.kg-footer__social {
  list-style: none;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .kg-footer__social li {
    margin: 0 0 0 30px;
    padding: 0; }
    .kg-footer__social li:first-child {
      margin-left: 0; }
  .kg-footer__social__link {
    width: 21px;
    height: 21px;
    display: block; }
    .kg-footer__social__link img {
      width: 100%;
      height: 100%;
      display: block; }
  @media (max-width: 61.99em) {
    .kg-footer__social {
      margin-bottom: 20px; } }  
`;

const Footer = () => (
    <>
      <FooterContainer>
        <footer class="kg-footer">
                <div class="kg-footer__inner">
                    <div class="kg-footer__content">
                    <a href="/" class="kg-footer__logo" aria-label="Konrad - Home">
                        <svg xmlns="http://www.w3.org/2000/svg" class="kg-logo__k" width="30" height="30" viewBox="0 0 30 30">
                <path class="kg-logo__k__fill" fill-rule="evenodd" d="M0 0l14.997 14.498L30 29h-7.9L11.048 18.318 0 7.638V0zm0 30V19l5.5 5.5L11 30H0zM11 0h16l-8 8-8-8z"></path>
            </svg>
          </a>
          <div class="kg-footer__blurb">
            <p class="kg-footer__blurb-large">
              UpShell<sup>®</sup>
            </p>
            <p class="kg-footer__blurb-small">
              By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.
            </p>
          </div>
          <nav class="kg-footer__nav">
            <ul class="kg-footer__nav-group">
              <li><span class="kg-footer__nav-group-title">Global Offices</span></li>
            </ul>
            <ul class="kg-footer__nav-group">
              <li><span class="kg-footer__nav-group-title">Capabilities</span></li>
              <li><a href=" " class="kg-footer__link">Strategy</a></li>
              <li><a href=" " class="kg-footer__link">Design</a></li>
              <li><a href=" " class="kg-footer__link">Technology</a></li>
            </ul>
            <ul class="kg-footer__nav-group">
              <li><span class="kg-footer__nav-group-title">UpShell</span></li>
              <li><a href=" " class="kg-footer__link">About</a></li>
              <li><a href=" " class="kg-footer__link">Careers</a></li>
              <li><a href=" " class="kg-footer__link">Scholarships</a></li>
              <li><a href=" " class="kg-footer__link">Contact</a></li>
              <li><a href=" " class="kg-footer__link">Accessibility</a></li>
            </ul>
          </nav>
        </div>
        <div class="kg-footer__meta">
          <div class="kg-footer__disclaimer">
            UpShell. All Rights Reserved.
          </div>
          <ul class="kg-footer__social">
            <li>
              <a href=" " class="kg-footer__social__link" rel="noreferrer noopener" target="_blank">
                <img src=" " alt="Twitter"/>
              </a>
            </li>
          </ul>
        </div>
        </div>
        </footer>
      </FooterContainer>
    </>
)

export default Footer;