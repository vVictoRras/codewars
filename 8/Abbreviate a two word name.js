/*Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/
function abbrevName(name) {
   const arr = name.split(' ');
   const firstname = arr[0];
   const surname = arr[1];
   const result = firstname[0].toUpperCase() + '.' + surname[0].toUpperCase()+'.';
   return result;
  }
  console.log(abbrevName("Peter Parker"));