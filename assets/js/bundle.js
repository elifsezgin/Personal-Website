/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {

		var $body = $('body'),
		    $header = $('#header'),
		    $nav = $('#nav'),
		    $nav_a = $nav.find('a'),
		    $wrapper = $('#wrapper');

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
		});

		// Header.
		var ids = [];

		// Set up nav items.
		$nav_a.scrolly({ offset: 44 }).on('click', function (event) {

			var $this = $(this),
			    href = $this.attr('href');

			// Not an internal link? Bail.
			if (href.charAt(0) != '#') return;

			// Prevent default behavior.
			event.preventDefault();

			// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
			$nav_a.removeClass('active').addClass('scrollzer-locked');

			// Set active class on this link.
			$this.addClass('active');
		}).each(function () {

			var $this = $(this),
			    href = $this.attr('href'),
			    id;

			// Not an internal link? Bail.
			if (href.charAt(0) != '#') return;

			// Add to scrollzer ID list.
			id = href.substring(1);
			$this.attr('id', id + '-link');
			ids.push(id);
		});

		// Initialize scrollzer.
		$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

		// Title Bar.
		$('<div id="titleBar">' + '<a href="#header" class="toggle"></a>' + '<span class="title">' + $('#logo').html() + '</span>' + '</div>').appendTo($body);

		// Header.
		$('#header').panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'header-visible'
		});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
		if (skel.vars.os == 'wp' && skel.vars.osVersion < 10) $('#titleBar, #header, #wrapper').css('transition', 'none');
	});
})(jQuery);

var $name = $('input[name="from_name"]');
var $email = $('input[name="email"]');
var $subject = $('input[name="subject"]');
var $message = $('input[name="message"]');
var $form = $('form#email-form');
var $reset = $("#reset");

$form.submit(function (event) {
	event.preventDefault();

	var params = $form.serializeArray().reduce(function (obj, item) {
		obj[item.name] = item.value;
		return obj;
	}, {});

	var service_id = "gmail";

	var template_id = "template_Roq16NhR";
	$form.find("button").text("Sending...");
	emailjs.send(service_id, template_id, params).then(function () {
		alert("Sent!");
	}, function (err) {
		alert("Send email failed!\r\n Please send your email to elifmsezgin@gmail.com");
		$form.find("button").text("Send");
	});
	return false;
});

$reset.click(function (e) {
	$name.innerText = "";
	$email.innerText = "";
	$subject.innerText = "";
	$message.innerText = "";
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map