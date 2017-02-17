let $name = $('#name');
let $email = $('#email');
let $subject = $('#subject');
let $message = $('#message');
let $submit = $('#submit');

$submit.click(() => sendMail());


function sendMail() {
  debugger;
  $.ajax({
    type: 'POST',
    url: 'https://api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0@api.mailgun.net/v3/samples.mailgun.org/messages',
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
// 'message': {
//   'from': 'elifsezgin1234@gmail.com',
//   'to': [
//       {
//         'email': `${$email.innerText}`,
//         'name': `${$name.innerText}`,
//         'type': 'to'
//       }
//     ],
//   'autotext': 'true',
//   'subject': `${$subject.innerText}`,
//   'html': `${$message.innerText}`
// }
