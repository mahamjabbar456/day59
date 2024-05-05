let num = 2 + 6;

switch (num) {
    case 4:
        console.log("Number is 4");
        break;

    case 5:
        console.log("Number is 5");
        break;

    case 7:
        console.log("Number is 7");
        break;

    default:
        console.log(num);
        break;
}

let browser = "Chrome";
switch (browser) {
    case 'Edge':
      console.log( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      console.log( 'Okay we support these browsers too' );
      break;
  
    default:
      console.log( 'We hope that this page looks ok!' );
  }