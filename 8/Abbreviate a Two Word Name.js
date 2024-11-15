function abbrevName(name) {
   const arr = name.split(' ');
   const firstname = arr[0];
   const surname = arr[1];
   const result = firstname[0].toUpperCase() + '.' + surname[0].toUpperCase();
   return result;
 }