

console.log(233)



$.getScript('register.js', function() {
  console.log(active)
  if (login === true){
    document.querySelector('.user').innerHTML = 'Welcome: Guest1'
  } else {
    document.querySelector('.user').innerHTML = users[0].username
  }
})

$('#button').click(function(){
  $('#txt1').val("Button clicked");
})