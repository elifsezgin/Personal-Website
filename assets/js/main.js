/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#header" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
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
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #header, #wrapper')
						.css('transition', 'none');

	});

})(jQuery);

let $name = $('input[name="name"]');
let $email = $('input[name="email"]');
let $subject = $('input[name="subject"]');
let $message = $('input[name="message"]');
let $submit = $('#submit');

let data = {
	'name': null,
	'email': null,
	'subject': null,
	'message': null
};

function update(field, value) {
	data[field] = value;
}
console.log($name);
// debugger;
$name.on('input', (e) => {
	update('name', e.target.value);
});
$email.on('input', (e) => {
	update('email', e.target.value);
});
$subject.on('input', (e) => {
	update('subject', e.target.value);
});
$message.on('input', (e) => {
	update('message', e.target.value);
});

$submit.on('click', (e) => {
	debugger;
	emailjs.send("gmail","template_Roq16NhR",{
  name: "Elif",
  notes: "Check this out!"
	});
});

function sendMail(e) {
  debugger;
  $.ajax({
    type: 'POST',
    url: 'https://api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0@api.mailgun.net/v3/samples.mailgun.org/messages',
		headers: {"Access-Control-Allow-Headers": "Authorization"},
    data: {
      "from": "Mailgun Sandbox <postmaster@sandbox213b4c5914174bf2bc82132b3f377be8.mailgun.org>",
      "to": "Elif <elifsezgin1234@gmail.com>",
      "subject": "Hello Elif",
      "text": "Congratulations Elif, you just sent an email with Mailgun!  You are truly awesome!  You can see a record of this email in your logs: https://mailgun.com/cp/log .  You can send up to 300 emails/day from this sandbox server.  Next, you should add your own domain so you can send 10,000 emails/month for free."
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });
}
