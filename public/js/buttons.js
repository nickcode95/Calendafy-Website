$('#annual').on("click", function() {
    $('#singlePrice').html('$48 <small class="text-muted"> / month </small>');
    $('#doublePlan').html('$89 <small class="text-muted"> / month </small>');
    $('#smallTeam').html('$125 <small class="text-muted"> / month </small>')
    $('#teamPlan').html('$249 <small class="text-muted"> / month </small>')

    // Change button colour to blue
    $('#monthly').removeClass().addClass("btn btn-light annual");
    $('#annual').removeClass().addClass("btn btn-primary");
  });

  // Change price to monthly

  $('#monthly').click(function() {
    $('#singlePrice').html('$55 <small class="text-muted"> / month </small>');
    $('#doublePlan').html('$105 <small class="text-muted"> / month </small>');
    $('#smallTeam').html('$150 <small class="text-muted"> / month </small>')
    $('#teamPlan').html('$300 <small class="text-muted"> / month </small>')

    // Change button colours
    $('#annual').removeClass().addClass("btn btn-light annual");
    $('#monthly').removeClass().addClass("btn btn-primary");
  })



$("#question1").on("click", function(){
  $("#answer1").toggleClass("answer-hidden");
})

$("#question2").on("click", function(){
  $("#answer2").toggleClass("answer-hidden");
})

$("#question3").on("click", function(){
  $("#answer3").toggleClass("answer-hidden");
})