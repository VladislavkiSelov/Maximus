/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n\r\nconst blockHeader = document.querySelector('header')\r\nconst categoryList = document.querySelector('.list_category')\r\nconst categoryListAllLi = Array.from(categoryList.querySelectorAll('li'))\r\nconst btnMenu = document.querySelector('.humburger')\r\nconst parentBlock = document.createElement('div')\r\nconst btnClose = document.createElement('div')\r\nbtnClose.classList.add('btn_close')\r\nparentBlock.classList.add('modal_menu_box')\r\n\r\nbtnMenu.addEventListener('click', () => {\r\n    parentBlock.classList.remove('remove_modal_menu')\r\n    parentBlock.textContent = '';\r\n    categoryListAllLi.forEach((item) => {\r\n        const element = document.createElement('p');\r\n        element.textContent = item.textContent;\r\n        parentBlock.appendChild(element)\r\n    })\r\n    parentBlock.appendChild(btnClose)\r\n    blockHeader.appendChild(parentBlock)\r\n})\r\nbtnClose.addEventListener('click', () => {\r\n    parentBlock.classList.add('remove_modal_menu')\r\n})\n\n//# sourceURL=webpack://maximus/./js/script.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bush_on_the_left.png */ \"./img/bush_on_the_left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bush_on_the_right.png */ \"./img/bush_on_the_right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Clouds.png */ \"./img/Clouds.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bird.png */ \"./img/bird.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Horse.png */ \"./img/Horse.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Horse_small.png */ \"./img/Horse_small.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/barn.png */ \"./img/barn.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/Trees_on_the_left.png */ \"./img/Trees_on_the_left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.png */ \"./img/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ */\n/* v1.0 | 20080212 */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\n/* remember to define focus styles! */\n:focus {\n  outline: 0;\n}\n\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\n/* tables still need 'cellspacing=\"0\"' in the markup */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1200px;\n  padding: 0 15px;\n}\n\n.wraper_header {\n  padding-top: 10px;\n  padding-bottom: 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.wraper_header .header_righ_box {\n  display: flex;\n}\n.wraper_header > img {\n  display: block;\n  height: 50px;\n  width: auto;\n}\n.wraper_header ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 430px;\n  margin-right: 40px;\n}\n.wraper_header ul li {\n  font-size: 1.125rem;\n}\n.wraper_header .block_phone > a {\n  font-size: 1.125rem;\n  color: rgb(32, 32, 32);\n  text-decoration: none;\n  font-weight: 700;\n}\n.wraper_header .block_phone h4 {\n  padding-top: 10px;\n  font-size: 0.8125rem;\n  color: rgb(85, 86, 91);\n}\n.wraper_header .menu_humburger {\n  padding: 5px 5px;\n  display: block;\n}\n.wraper_header .humburger {\n  display: none;\n  cursor: pointer;\n  position: absolute;\n  padding: 5px 10px;\n  border: 2px solid rgb(0, 129, 57);\n  border-radius: 5px;\n  left: 200px;\n  top: 30px;\n}\n.wraper_header .humburger_line {\n  background-color: rgb(0, 129, 57);\n  display: block;\n  height: 2px;\n  position: relative;\n  width: 10px;\n}\n.wraper_header .humburger_line::after {\n  background-color: rgb(0, 129, 57);\n  content: \"\";\n  display: block;\n  position: absolute;\n  transition: all 0.3s;\n  width: 100%;\n  height: 100%;\n  top: -4px;\n}\n.wraper_header .humburger_line::before {\n  background-color: rgb(0, 129, 57);\n  content: \"\";\n  display: block;\n  position: absolute;\n  transition: all 0.3s;\n  width: 100%;\n  height: 100%;\n  top: 4px;\n}\n\n@media (max-width: 1000px) {\n  .wraper_header ul {\n    width: 350px;\n  }\n  .wraper_header ul li {\n    font-size: 0.875rem;\n  }\n  .wraper_header .block_phone > a {\n    font-size: 0.875rem;\n  }\n  .wraper_header .block_phone h4 {\n    font-size: 0.688rem;\n  }\n}\n@media (max-width: 768px) {\n  .wraper_header ul {\n    display: none;\n  }\n  .wraper_header .humburger {\n    display: flex;\n    align-items: center;\n  }\n}\n@media (max-width: 480px) {\n  .wraper_header .block_phone {\n    display: none;\n  }\n  .wraper_header .humburger {\n    left: auto;\n    right: 30px;\n  }\n}\n.main_top {\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 0 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 100% 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 0 100%/100% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_3___}) 90% 20%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_4___}) 85% 90%/35% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 50% 90%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 25% 95%/22% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_7___}) 0 90%/20% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_8___}) 0 0/cover no-repeat;\n}\n\n.main_top_text {\n  padding-top: 150px;\n  height: 100vh;\n}\n.main_top_text h1 {\n  font-family: \"Philosopher\", sans-serif;\n  font-weight: 700;\n  font-size: 3.4rem;\n  width: 615px;\n  margin-bottom: 40px;\n}\n.main_top_text > h2 {\n  font-family: \"Alegreya Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1.5rem;\n  width: 480px;\n  color: rgb(85, 86, 91);\n  line-height: 1.4;\n  margin-bottom: 40px;\n}\n\n@media (max-width: 1200px) {\n  .main_top {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 0 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 100% 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 0 100%/100% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_3___}) 90% 20%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_4___}) 85% 90%/35% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 50% 90%/115px 115px no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 25% 90%/260px 115px no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_7___}) 0 90%/20% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_8___}) 0 0/cover no-repeat;\n  }\n}\n@media (max-width: 1000px) {\n  .main_top_text h1 {\n    font-size: 2.31rem;\n    width: 510px;\n    margin-bottom: 20px;\n  }\n  .main_top_text > h2 {\n    font-size: 1rem;\n    width: 480px;\n    margin-bottom: 25px;\n  }\n}\n@media (max-width: 768px) {\n  .main_top_text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .main_top_text h1 {\n    text-align: center;\n  }\n  .main_top_text > h2 {\n    text-align: center;\n  }\n  .main_top {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 0 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 100% 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 0 100%/100% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_3___}) 10% 10%/100px auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_4___}) 85% 90%/35% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_5___}) 50% 90%/115px 115px no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 25% 90%/260px 115px no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_7___}) 0 90%/20% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_8___}) 0 0/cover no-repeat;\n  }\n}\n@media (max-width: 480px) {\n  .main_top_text h1 {\n    font-size: 1.5rem;\n    text-align: center;\n    width: 320px;\n  }\n  .main_top_text > h2 {\n    font-size: 0.813rem;\n    text-align: center;\n    width: 320px;\n  }\n  .main_top {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) 0 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_1___}) 100% 100%/10% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_2___}) 0 100%/100% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_3___}) 10% 10%/100px auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_4___}) 85% 90%/35% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_6___}) 25% 90%/260px 115px no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_7___}) 0 90%/20% auto no-repeat, url(${___CSS_LOADER_URL_REPLACEMENT_8___}) 0 0/cover no-repeat;\n  }\n}\n.main_top_tb1 {\n  padding-bottom: 185px;\n}\n.main_top_tb1 h2 {\n  font-family: \"Philosopher\", sans-serif;\n  font-size: 40px;\n  text-align: center;\n  margin-bottom: 70px;\n}\n.main_top_tb1 > div {\n  display: flex;\n  margin-bottom: 30px;\n}\n.main_top_tb1 > div img {\n  display: block;\n  width: 450px;\n}\n.main_top_tb1 .box_data_club {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.main_top_tb1 .box_data_club div {\n  width: 45%;\n}\n.main_top_tb1 .box_data_club div h3 {\n  font-size: 42px;\n  color: rgb(0, 129, 57);\n  margin-bottom: 15px;\n}\n.main_top_tb1 .box_data_club div p {\n  font-weight: 500;\n  max-width: 275px;\n  line-height: 1.5;\n}\n.main_top_tb1 > p {\n  color: rgb(85, 86, 91);\n  line-height: 1.5;\n}\n\n@media (max-width: 820px) {\n  .main_top_tb1 h2 {\n    font-size: 27px;\n  }\n  .main_top_tb1 > div img {\n    display: none;\n  }\n  .main_top_tb1 .box_data_club {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .main_top_tb1 .box_data_club div h3 {\n    font-size: 27px;\n    text-align: center;\n  }\n  .main_top_tb1 .box_data_club div p {\n    text-align: center;\n  }\n}\n@media (max-width: 420px) {\n  .main_top_tb1 h2 {\n    font-size: 21px;\n  }\n  .main_top_tb1 > div {\n    display: block;\n  }\n  .main_top_tb1 .box_data_club {\n    display: block;\n  }\n  .main_top_tb1 .box_data_club div {\n    width: auto;\n  }\n  .main_top_tb1 .box_data_club div p {\n    max-width: 100%;\n    margin-bottom: 35px;\n  }\n}\n.main_top_tb2 {\n  margin-bottom: 200px;\n}\n.main_top_tb2 h2 {\n  font-size: 2.5rem;\n  text-align: center;\n  margin-bottom: 110px;\n}\n.main_top_tb2 .box_services {\n  display: flex;\n  gap: 30px;\n}\n.main_top_tb2 .box_services h3 {\n  font-size: 1.188rem;\n  font-weight: 500;\n  text-align: center;\n  margin-bottom: 25px;\n}\n.main_top_tb2 .box_services p {\n  text-align: center;\n  color: rgb(85, 86, 91);\n}\n.main_top_tb2 .box_services .bl_img {\n  width: 200px;\n  height: 150px;\n  overflow: hidden;\n  margin: 0 auto;\n  margin-bottom: 25px;\n}\n.main_top_tb2 .box_services .bl_img img {\n  display: block;\n  margin: 0 auto;\n}\n\n@media (max-width: 1000px) {\n  .main_top_tb2 h2 {\n    font-size: 1.31rem;\n  }\n  .main_top_tb2 .box_services {\n    flex-wrap: wrap;\n  }\n  .main_top_tb2 .box_services div {\n    width: 45%;\n  }\n  .main_top_tb2 .box_services h3 {\n    font-size: 0.94rem;\n  }\n  .main_top_tb2 .box_services p {\n    font-size: 0.8125rem;\n    line-height: 1.54;\n  }\n}\n@media (max-width: 420px) {\n  .main_top_tb2 .box_services div {\n    width: 100%;\n  }\n}\nfooter {\n  background: black;\n  padding-top: 40px;\n  padding-bottom: 25px;\n}\n\n.wraper_footer {\n  display: flex;\n  flex-wrap: wrap;\n}\n.wraper_footer .footer_top_box {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.wraper_footer .footer_top_box img {\n  width: 160px;\n  display: block;\n  margin-bottom: 30px;\n}\n.wraper_footer .footer_top_box .footer_top_bl1 {\n  display: flex;\n  align-items: center;\n}\n.wraper_footer .footer_top_box .list_category {\n  display: flex;\n  justify-content: space-between;\n  width: 365px;\n}\n.wraper_footer .footer_top_box .list_category li {\n  color: rgb(239, 239, 239);\n  font-size: 0.875rem;\n}\n.wraper_footer .footer_top_box button {\n  color: rgb(239, 239, 239);\n  background: inherit;\n  margin-left: 30px;\n  min-width: 200px;\n  padding: 15px 40px;\n  border: 1px solid rgb(253, 231, 36);\n  border-radius: 5px;\n}\n.wraper_footer .footer_top_box button:hover {\n  background: rgb(253, 231, 36);\n  color: rgb(32, 32, 32);\n}\n.wraper_footer .footer_bottom a {\n  font-size: 0.875rem;\n  color: #7D808A;\n  text-decoration: none;\n}\n.wraper_footer .footer_bottom .first_a {\n  margin-right: 20px;\n}\n\n@media (max-width: 820px) {\n  .wraper_footer {\n    justify-content: center;\n  }\n  .footer_top_box {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n  .footer_top_box .footer_top_bl1 {\n    display: flex;\n    flex-direction: column;\n  }\n  .footer_top_box .footer_top_bl1 nav {\n    margin-bottom: 30px;\n  }\n  .footer_top_box .footer_top_bl1 button {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .footer_bottom a {\n    text-align: center;\n    display: block;\n    margin-bottom: 10px;\n  }\n}\n@media (max-width: 420px) {\n  .footer_top_box .footer_top_bl1 .list_category {\n    flex-direction: column;\n    height: 180px;\n    justify-content: space-between;\n    align-items: center;\n  }\n}\n.btn_record {\n  position: relative;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  padding: 20px 75px;\n  background: linear-gradient(180deg, #9BCFFF 0%, #FFF383 0.01%, #FFC700 100%);\n  border-radius: 5px;\n  border: none;\n  text-transform: uppercase;\n  color: rgb(106, 83, 0);\n  transform-style: preserve-3d;\n  transition: transform 0.3s;\n}\n.btn_record::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #C89C00;\n  border-radius: 5px;\n  transform: translate3d(0, 0.5em, -0.75em);\n  transition: transform 0.3s;\n}\n.btn_record:hover {\n  transform: translate(0, 0.25em);\n}\n.btn_record:hover::before {\n  transform: translate3d(0, 0.25em, -0.75em);\n}\n.btn_record:active {\n  transform: translate(0em, 0.75em);\n}\n.btn_record:active::before {\n  transform: translate3d(0, 0, -0.75em);\n}\n\n@media (max-width: 1000px) {\n  .btn_record {\n    padding: 10px 50px;\n    font-size: 0.625rem;\n  }\n}\n.modal_menu_box {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  background: #0D0D0D;\n  opacity: 0.95;\n  z-index: 5;\n  padding: 20px;\n  padding-top: 50px;\n}\n.modal_menu_box .btn_close {\n  position: absolute;\n  top: 30px;\n  right: 20px;\n  width: 24px;\n  height: 24px;\n  opacity: 0.2;\n  cursor: pointer;\n  transition: opacity ease 0.5s;\n}\n.modal_menu_box .btn_close::before, .modal_menu_box .btn_close::after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  display: block;\n  width: 24px;\n  height: 3px;\n  background: #ebe7e7;\n}\n.modal_menu_box .btn_close::before {\n  transform: rotate(45deg);\n}\n.modal_menu_box .btn_close::after {\n  transform: rotate(-45deg);\n}\n.modal_menu_box p {\n  color: white;\n  font-size: 1rem;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n\n.remove_modal_menu {\n  display: none;\n}\n\n@media (max-width: 480px) {\n  .modal_menu_box {\n    width: 100vw;\n  }\n}\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  color: rgb(32, 32, 32);\n}\n\n.common_block {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.img {\n  max-width: 100%;\n  height: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://maximus/./scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://maximus/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://maximus/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://maximus/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://maximus/./scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://maximus/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://maximus/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://maximus/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://maximus/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://maximus/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://maximus/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./img/Clouds.png":
/*!************************!*\
  !*** ./img/Clouds.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Clouds.png\";\n\n//# sourceURL=webpack://maximus/./img/Clouds.png?");

/***/ }),

/***/ "./img/Horse.png":
/*!***********************!*\
  !*** ./img/Horse.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Horse.png\";\n\n//# sourceURL=webpack://maximus/./img/Horse.png?");

/***/ }),

/***/ "./img/Horse_small.png":
/*!*****************************!*\
  !*** ./img/Horse_small.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Horse_small.png\";\n\n//# sourceURL=webpack://maximus/./img/Horse_small.png?");

/***/ }),

/***/ "./img/Trees_on_the_left.png":
/*!***********************************!*\
  !*** ./img/Trees_on_the_left.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Trees_on_the_left.png\";\n\n//# sourceURL=webpack://maximus/./img/Trees_on_the_left.png?");

/***/ }),

/***/ "./img/background.png":
/*!****************************!*\
  !*** ./img/background.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"background.png\";\n\n//# sourceURL=webpack://maximus/./img/background.png?");

/***/ }),

/***/ "./img/barn.png":
/*!**********************!*\
  !*** ./img/barn.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"barn.png\";\n\n//# sourceURL=webpack://maximus/./img/barn.png?");

/***/ }),

/***/ "./img/bird.png":
/*!**********************!*\
  !*** ./img/bird.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bird.png\";\n\n//# sourceURL=webpack://maximus/./img/bird.png?");

/***/ }),

/***/ "./img/bush_on_the_left.png":
/*!**********************************!*\
  !*** ./img/bush_on_the_left.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bush_on_the_left.png\";\n\n//# sourceURL=webpack://maximus/./img/bush_on_the_left.png?");

/***/ }),

/***/ "./img/bush_on_the_right.png":
/*!***********************************!*\
  !*** ./img/bush_on_the_right.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bush_on_the_right.png\";\n\n//# sourceURL=webpack://maximus/./img/bush_on_the_right.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;