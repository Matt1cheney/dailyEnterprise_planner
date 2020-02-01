$(function() {
  const todaysDate = $("#currentDay");
  const whatTimeIsIt = moment().format("MMMM Do YYYY");
  console.log(moment());
  todaysDate.text(whatTimeIsIt);
  let timeVal = [
    moment().hour(05),
    moment().hour(06),
    moment().hour(07),
    moment().hour(08),
    moment().hour(09),
    moment().hour(10),
    moment().hour(11),
    moment().hour(12),
    moment().hour(13),
    moment().hour(14),
    moment().hour(15),
    moment().hour(16),
    moment().hour(17),
    moment().hour(18),
    moment().hour(19),
    moment().hour(20)
  ];
  
  // i need to tell the computer what time the timeblocks represent by calling a function that differentiates the times.
  if (timeVal[15] < moment()) {
    console.log("itworkingyo");
  }
 // moment().hour(10).diff(moment("hours"))
  // moment.duration().hours();
  // moment.duration().asHours();

  function hourChange() {
    let description = $("textarea");
    // let thePastHour = false;
    //  let thePresentHour = false;
    // let theFutureHour = false;
    timeVal.forEach(hour => {
      
      
      if (timeVal < moment(0).diff(moment("hours"))
        description.addClass("past");
      } else if (timeVal > moment().startOf(timeVal).fromNow) {
        description.addClass("future");
        // theFutureHour == true;
        console.log("nowhere");
      } else if (timeVal === moment()) {
        description.addClass("present");
      }
    });
  }

  hourChange();
});
