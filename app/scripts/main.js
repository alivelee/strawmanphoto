/*!
  // Your custom JavaScript goes here
  *
  *  Web Starter Kit
  *  Copyright 2015 Google Inc. All rights reserved.
  *
  *  Licensed under the Apache License, Version 2.0 (the "License");
  *  you may not use this file except in compliance with the License.
  *  You may obtain a copy of the License at
  *
  *    https://www.apache.org/licenses/LICENSE-2.0
  *
  *  Unless required by applicable law or agreed to in writing, software
  *  distributed under the License is distributed on an "AS IS" BASIS,
  *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  *  See the License for the specific language governing permissions and
  *  limitations under the License
  *
  */
  /* eslint-env browser */
  (function() {
    'use strict';

    // Check to make sure service workers are supported in the current browser,
    // and that the current page is accessed from a secure origin. Using a
    // service worker from an insecure origin will trigger JS console errors. See
    // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
    var menuIcon = document.querySelectorAll('.menu-link')[0];
    function toggleOverlay(e) {
      e.preventDefault();
      var menuOverlay = document.querySelectorAll('.menu-overlay')[0];
      var menu = document.querySelectorAll('.menu')[0];
      menu.classList.toggle('open');
      menuOverlay.classList.toggle('open');
    }
    menuIcon.addEventListener("click",toggleOverlay,false);
    // console.log(menuIcon);
    // var menuOverlay = document.querySelectorAll('.menu-overlay')[0];
    // var aboutLink = menuOverlay.children[0];
    // var protfolioLink = menuOverlay.children[1];
    // var contactLink = menuOverlay.children[2];
    // function redirectPageUseAjax(e) {
    //   e.preventDefault();
    //   $('body').load('./protfolio.html');
    // }
    // protfolioLink.addEventListener("click",redirectPageUseAjax,false);
})();
