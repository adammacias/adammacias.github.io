(function($) {
	"use strict";

  // FORM CONTACT BASIC
  var hiddenInputs = "#in-email, #in-subject, #in-budget, #in-budget-money, #in-budget-message, #in-message, #btn-form-contact, #btn-form-budget",
      getNameValue = ".getNameValue",
      //inName = "#in-name",
      inNameValue = '#in-name-value',
      inEmail = "#in-email",
      inEmailValue = '#in-email-value',
      inSubject = "#in-subject",
      //inSubjectValue = 'input[name="in-subject-value"]',
      inSubjectLabelMessage = "#in-subject-label-message", //$('input[name="in-subject-value-message"]');
      inSubjectLabelBudget = "#in-subject-label-budget",
      inMessage = "#in-message",
      btnMessage = '#btn-form-contact',
      inBudget = "#in-budget",
      inBudgetMoney = "#in-budget-money",
      inBudgetMessage = "#in-budget-message",
      btnBudget = '#btn-form-budget';

  $(hiddenInputs).hide();

  function showInputsMessage() {
    $(inBudget).hide();
      $(inBudgetMessage).hide();
      $(inBudgetMoney).hide();
      $(btnBudget).hide();
      $(inMessage).show();
      $(btnMessage).show();
  }

  function showInputsBudget() {
     $(inMessage).hide();
     $(btnMessage).hide();
     $(inBudget).show();
     $(inBudgetMessage).show();
     $(inBudgetMoney).show();
     $(btnBudget).show();


  }

  $('#in-name-value, #in-email-value').keyup(function(){
      if( $(inNameValue).val().length!==0 ){

        $(inEmail).show();
        $(getNameValue).html( $(inNameValue).val() );
        if( $(inEmailValue).val().length!==0 ){
          $(inSubject).show();
          showInputsMessage();
        }
      }
      else {
        $(inEmail).hide();
        $(inSubject).hide();
        //showInputsBudget();
      }
  });

  //$(inSubjectValue).change(function() {
  $(inSubjectLabelMessage).click(function() {
    showInputsMessage();
  });

  $(inSubjectLabelBudget).click(function() {
    showInputsBudget();
  });


  /*
  $(inSubjectValue).click(function() {
    if( $(inSubjectValueMessage).is(':checked') ) {
      console.log("it's checked MESSAGEM");
    }
    else {
      console.log("it's checked ORCAAA");
    }
  });
*/


}(jQuery));

// jQuery(document).ready(function() { $("time").timeago(); });


  /*-----------------------------------------------------------------------
  = PARALAX SHARK
  -----------------------------------------------------------------------
  $(document).mousemove(function(e){
  var xMouse = e.pageX;
  var xCenter = $(window).width()/2;
  var offset = xMouse - xCenter;
    //$(".content-bg img").css({"left": -offset*0.03});
    $(".content-bg img").css({"bottom": -offset*0.03});
  })//end mouse move

*/
