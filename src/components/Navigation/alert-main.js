import React from "react";
import styled from '@emotion/styled';

const MnAlertMainContainer = styled.header`
.header-top--row {
    z-index: 0;
    background-color:rgb(19, 170, 82);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;


const MnAlertMainComponent = () => (
    <>
        <MnAlertMainContainer>
            <div class="header-top--row">
                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                <div class="header-top--left__zone"><a href="#"><i class="fas fa-phone-square"></i><span>+1 (888) 123-4567</span></a><a href="#"></a></div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                <div class="header-top--right__zone"><a href="#"><i class="fas fa-sign-in-alt"></i><span>Customer Portal</span></a><a href="#"><i class="fas fa-comment-alt"></i><span>Chat now</span></a></div>
                </div>
            </div>
        </MnAlertMainContainer>
    </>
)


export default MnAlertMainComponent;