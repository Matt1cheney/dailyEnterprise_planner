$(function() {
  //create twos constants for the date display
  const todaysDate = $("#currentDay");
  const whatTimeIsIt = moment().format("MMMM Do YYYY");
  //applying the date to the HTML page
  todaysDate.text(whatTimeIsIt);
  //creating an array of "moment" objects
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

  // creating a function to apply classes to the appropriate hour blocks
  function hourChange() {
    // Retrieve
    //$(document).getItem(`.hour-${thisTextBlock.format("HH")} `);
    //.innerHTML = localStorage.getItem("lastname");
    //create variable for looping through hour blocks that start at 5 AM
    let forHourCounter = 5;

    //start forEach loop to evaluate what hour it is and apply the past, present, or future classes
    timeVal.forEach(hour => {
      // someMomentHour is grabbing the current hour and passing in forHourCounter created above
      let thisTextBlock = moment().hour(forHourCounter);
      // forming my hour-x class to be able to reference each time block
      let referredBlock = `.hour-${thisTextBlock.format("HH")} `;

      let myElement = $(referredBlock);
      // if 0 is greater than any hour past the current apply this class
      if (0 > hour.diff(moment(), "hours")) {
        myElement.addClass("past");
        //if 0 is less than any hourblock from the current moment, apply this class
      } else if (0 < hour.diff(moment().startOf("hour"), "hours")) {
        myElement.addClass("future");
        // anything 0 is current, apply this class
      } else {
        myElement.addClass("present");
      }
      forHourCounter++;
    });
    let thisTextBlock = moment().hour(forHourCounter-1);
      // forming my hour-x class to be able to reference each time block
      let referredBlock = $(`.hour-${thisTextBlock.format("HH")}`).val() ;
        $(document).on("click",".saveBtn", function() {
          $(".fa-save")
            .addClass("animated")
            .addClass("wobble");
            // $(".fa-save").removeClass("animated").removeClass("wobble");
          // Store
          //get the text
          // get the text
          // var textSave = $(".hour-05").text(textSave)
    
          localStorage.setItem('planSave', $(JSON.stringify(referredBlock.innerText)));
          console.log(`.hour-${thisTextBlock.format("HH")} `)
          
            // test if it works
          });
    //});
  }

  hourChange();

});
