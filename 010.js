// Tugas 1
let transformArrToLowerCase = arr => {
  return arr.map(content => content.toLowerCase());
  // Ubah setiap element array menjadi lowercase!
};

console.log(transformArrToLowerCase(['Udin', 'Reane', 'Budi','Agus','Sari','Ririn', 'Dessy']));


// Tugas 2
let filterArrUnder21 = arr => {
  return arr.filter(content => content < 21);
  // Filter setiap element array yang nilainya dibawah 21, sisakan yang 21 ke atas!
};

console.log(filterArrUnder21([12, 51, 34, 16, 19,20,23])); 

