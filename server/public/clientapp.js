$(document).ready(function(){
  //creates object to send server side
  var calculator = {
    numA: undefined,
    numB: undefined,
    operation: undefined,
    answer: undefined
  };

  $('#submit').on('click', function(){ //press the equals button on calculator
    event.preventDefault();

    //places the numbers in the form fields into the object to send to server
    $.each($('#firstNum').serializeArray(), function(i, field){
      calculator.numA = field.value;
    })
    $.each($('#secondNum').serializeArray(), function(i, field){
      calculator.numB = field.value;
    })

    //send post request to whatever url is needed based on operation selected
    $.ajax({
      type: 'POST',
      url: '/' + calculator.operation,
      data: calculator,
      success: function (res) {
        console.log(res);
        $('h3').text('Answer: ' + res.answer);
      }
    })

    console.log('sending' + calculator);
  });

  //updates the calculator object with the type of operation to perform
  $('button').on('click', function(){
    calculator.operation = $(this).data('operator');
    console.log('operation = ' + calculator.operation);
  });

  //clear button
  $('#clear').on('click', function(){
    $('fieldset').find('input[type=number]').val('');
    calculator.numA = 0;
    calculator.numB = 0;
    //calculator.operation stays the same
    calculator.answer = 0;
    $('h3').text('Answer: ');
  });

});
