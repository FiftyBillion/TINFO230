var correctMatches = 0;

$(init);
 
function init() {
 
  // Hide the success and fact messages
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
  $('#message').hide();
  $('#message').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
  
  
  // Reset the game
  correctMatches = 0;
  var numOfMatches=5;
  
  $('#draggableBlocks').html( '' );
  
  $('#targetArea').html( '' );
  
  // Create the draggable blocks (Shuffled after every reset)
  var numbers = [ 1, 2, 3, 4, 5];
  
  var text = [ 'Run', 
  'Active Assailiant',
  'Help lower the body count by equipping people with the latest life-saving preparedness training.',
  'Because you will recognize when your survival instinct is taking over your thinking brain.',
  'An individual actively engaged in killing or attempting to kill people in a confined and populated area.'
  ];
  
 numbers.sort( function() { return Math.random() - .5 } );
 
  for ( var i=0; i<text.length; i++ ) {
    $('<div>' + text[numbers[i]-1] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'target'+numbers[i] ).appendTo( '#draggableBlocks' ).draggable( {
      //containment: '#content',
      stack: '#draggableBlocks div',
      cursor: 'move',
      revert: true,
      start:hideMessage
    } );
  }
 
  // Create the target placeholders
  var words = [ 'What is the first thing you should do during an active shooting event?',
  'What is another term that can be used to describe an active shooter?',
  'What is the goal of active shooter preparedness?',
  'Why is knowing your natural stress response key to surviving an active shooter event?', 
  'Define Active Shooter.'];
  
  for ( var i=1; i<=words.length; i++ ) {
    $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#targetArea' ).droppable( {
      accept: '#draggableBlocks div',
      hoverClass: 'hovered',
      drop: handleDrop
    } );
  }
 
}

function handleDrop( event, ui ) {

  var targetNumber = $(this).data( 'number' );
  var draggableBlockNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again
 
 if ( targetNumber == draggableBlockNumber ) {
 //provide some related facts
 if(targetNumber==1){
  $('#message').show().html("Correct. The first thing you want to do is run away from the situation to a safe place before proceeding with anything else. Learn more here: https://www.ready.gov/active-shooter");
  } 
  if(targetNumber==2){
  $('#message').show().html("Correct. Other terms for an active shooter include Active Killer and Violent Intruder. Learn more here: https://www.alicetraining.com/active-shooter/");
  } 
  if(targetNumber==3){
  $('#message').show().html("Correct. The goal of this training is to help you and keep others around you safe.Learn more here: https://vividlearningsystems.com/active-shooter-preparedness");
  } 
  if(targetNumber==4){
  $('#message').show().html("Correct. It is important to think rationally in these types of situations in order to be safe.");
	 } 
  if(targetNumber==5){
  $('#message').show().html("Correct. The definition of active shooter is an agreed-upon definition by US government agencies, including the White House, US Department of Justice, FBI, US Department of Education, US Department of Homeland Security, and Federal Emergency Management Agency.");
  } 
 /* if(targetNumber==6){
  $('#message').show().html("");
  } 
  if(targetNumber==7){
  $('#message').show().html("");
  } 
  if(targetNumber==8){
  $('#message').show().html("");
  } 
  if(targetNumber==9){
  $('#message').show().html("");
  } 
  if(targetNumber==10){
  $('#message').show().html("");
  } 
  if(targetNumber==11){
  $('#message').show().html("");
  } 
  if(targetNumber==12){
  $('#message').show().html("");
  } */
  
  animateMessage();
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctMatches++;
    
  } 
   
  // If all the blocks have been placed correctly then display a message
  // and reset the blocks for another go
 
  if ( correctMatches == 5 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }
 
}
function animateMessage(){
$('#message').animate( 
    {
      left: '180px',
      top: '200px',
      width: '600px',
      height: '100px',
      opacity: 1
    });
     
     }
function hideMessage(){
$('#message').animate( 
    {
      left: '220px',
      top: '700px',
      width: '600px',
      height: '100px',
      opacity: 0
    });
}