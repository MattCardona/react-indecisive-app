 // var wow = "Wow";
 // var wow = "Boom";
 // console.log("wow = ", wow);
 let wow = "wow";
 wow = "boom";
 console.log("wow = ", wow);

 const nameConst = 'Bobby';
 console.log('nameConst = ', nameConst);

 //Block scope

 let fullName = 'R C';
 let fName = 'WOW';
 if(fullName){
  let firstName = fullName.split(' ')[0];
  let fName = 'Hans'
  console.log("firstName", firstName, "fullName", fName);
 }
 // console.log(firstName);