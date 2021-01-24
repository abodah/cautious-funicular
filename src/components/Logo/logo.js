import React from 'react';
import styled from '@emotion/styled';


const svg= styled.svg`
  overflow: hidden;
`;


const Logo = () => (
    <>
        <section class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" class="kg-logo__k" width="30" height="30" viewBox="0 0 30 30">
            <path class="kg-logo__k__fill" fill-rule="evenodd" d="M0 0l14.997 14.498L30 29h-7.9L11.048 18.318 0 7.638V0zm0 30V19l5.5 5.5L11 30H0zM11 0h16l-8 8-8-8z"/>
        </svg>
        </section>
    </>
)

export default Logo;