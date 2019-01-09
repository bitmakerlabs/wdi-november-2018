 function fahToCel(fTemp) {
   return (fTemp - 32) * 5/9;
}

function celToFah(cTemp) {
  return cTemp * 9/5 + 32;
}

 module.exports = {fahToCel, celToFah};