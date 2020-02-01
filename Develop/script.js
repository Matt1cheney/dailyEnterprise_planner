$(function() {
  //create twos constants for the date display
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

 

  function hourChange() {
    let description = $("textarea");
    let descriptionNumber = 0;
    let forHourCounter = 5;
    
    console.log(moment().startOf("hour"));
    timeVal.forEach(hour => {
      

      let someMomentHour = moment().hour(forHourCounter);
      let selector = `.hour-${someMomentHour.format("HH")} `;

      let myElem = $(selector);

      if (0 > hour.diff(moment(), "hours")) {
        myElem.addClass("past");
      } else if (0 < hour.diff(moment().startOf("hour"), "hours")) {
        myElem.addClass("future");
      } else {
        myElem.addClass("present");
      }
      forHourCounter++;
    });
  }

  hourChange();
});
