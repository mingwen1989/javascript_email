var Message = require("./../js/message.js").Message;

$(document).ready(function() {
  $('#email').submit(function(event) {
    event.preventDefault();
      var toField = $("#to").val();
      var fromField = $("#from").val();
      var messageField = $("#message").val();

      var newMessage = new Message(toField, fromField, messageField);
      console.log(newMessage.read());
  });
});

exports.Message = function(to, from, messageText) {
  this.to = to;
  this.from = from;
  this.messageText = messageText;
};

exports.Message.prototype.read = function() {
  return "Dear " + this.to + ", " + this.messageText + ". Yours truly" + this.from;
};
