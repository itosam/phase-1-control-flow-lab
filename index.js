function scuberGreetingForFeet(someNumber){
  // Write your code here!

  if (someNumber <= 400) {
    return 'This one is on me!';
  } else if (someNumber <= 2000) {
    return 'That will be twenty bucks.'
  } else if(someNumber > 2000 && someNumber <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {someNumber > 2500} {
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.' : 'No go.'
  }
  // Write your code here!


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return "Thank you so much."
    case 'not as generous' :
    return 'Thank you.'
   default:
    return 'Bye.'
  }
}