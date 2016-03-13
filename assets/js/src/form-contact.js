(function($) {
	"use strict";

  // FORM CONTACT BASIC
  var hiddenInputs = "#in-email, #in-subject, #in-budget, #in-budget-money, #in-budget-message, #in-message, #form-contact-submit, #form-budget-submit",
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
      btnMessage = '#form-contact-submit',
      inBudget = "#in-budget",
      inBudgetMoney = "#in-budget-money",
      inBudgetMessage = "#in-budget-message",
      btnBudget = '#form-budget-submit';

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

    $(function() {
        // Settings Form
        var form = $('#form-contact'),
            formRespond = $('#form-contact-respond'),
            formAction = 'http://www.adammacias.com.br/includes/ajax-form.php',
            formReset = $('#form-contact-reset'),
            formSubmit = $('#form-contact-submit'),
            formSubmitBudget = $('#form-budget-submit'),
            formDataRequired = $('input[name="name"], input[name="email"]'); // , , textarea[name="message"], textarea[name="budget-message"], input[name="budget-money"]
          // Validate Formddds
          formDataRequired.blur(function(){
              if ( $(this).val().length === 0 ) $(this).parent().addClass('has-danger');
              else $(this).parent().removeClass('has-danger');
          });
          // Send Form
          $(formSubmit).click(function (){
            var formData = {
                //action: '$('input[name="action"]').val()',// 'prefix_form',
                //security: $('input[name="security"]').val(),
                action: 'contact',
                data: $( ":input" ).serializeArray()
            }
            formRespond.html( '<div class="alert alert-info" role="alert"><i class="fa fa-spinner fa-spin"></i> Enviando dados... </div>');
              $(formSubmit).prop('disabled', true);
              $.ajax({ type: 'POST', dataType: 'json', url: formAction, data: formData,
                  success: function (data, textStatus, XMLHttpRequest) {
                    console.log(formData);
                    console.log(data +'---' + textStatus  +'---' + XMLHttpRequest);
                    console.log( data.status +  ':' + data.text);
                      if ( data.status == 'error' ) {
                        formRespond.html( '<div class="alert alert-danger" role="alert">' + data.text + '</div>');
                      } else if ( data.status == 'success' ) {
                        formRespond.html( '<div class="alert alert-success" role="alert">' + data.text + '</div>');
                        formReset.trigger( "click" );
                      }
                      $(formSubmit).prop('disabled', false);
                  }
              });
          });

          $(formSubmitBudget).click(function (){
            var formData = {
                //action: '$('input[name="action"]').val()',// 'prefix_form',
                //security: $('input[name="security"]').val(),
                action: 'budget',
                data: $( ":input" ).serializeArray()
            }
            formRespond.html( '<div class="alert alert-info" role="alert"><i class="fa fa-spinner fa-spin"></i> Enviando dados... </div>');
              $(formSubmit).prop('disabled', true);
              $.ajax({ type: 'POST', dataType: 'json', url: formAction, data: formData,
                  success: function (data, textStatus, XMLHttpRequest) {
                    console.log(formData);
                    console.log(data +'---' + textStatus  +'---' + XMLHttpRequest);
                    console.log( data.status +  ':' + data.text);
                      if ( data.status == 'error' ) {
                        formRespond.html( '<div class="alert alert-danger" role="alert">' + data.text + '</div>');
                      } else if ( data.status == 'success' ) {
                        formRespond.html( '<div class="alert alert-success" role="alert">' + data.text + '</div>');
                        formReset.trigger( "click" );
                      }
                      $(formSubmit).prop('disabled', false);
                  }
              });
          });

      })




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
