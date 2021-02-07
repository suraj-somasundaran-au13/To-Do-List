

exports.getDate = function(){  //to export the date.js to app.js
    var today = new Date();   //basic JS syntax
    var options = {
      weekday : "long",
      day : "numeric",   //refer to the .tolocaleDateString in mdn to know more to get the dates
      month : "long"
  };
    return today.toLocaleDateString("en-US",options);  // to get the date and the year
}




exports.getDay = function(){
    var today = new Date();   //basic JS syntax
    var options = {
      weekday : "long",  //refer to the .tolocaleDateString in mdn to know more to get the date
  };
    return today.toLocaleDateString("en-US",options);  // to get the date and the year
}