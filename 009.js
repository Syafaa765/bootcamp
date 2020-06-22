const array = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];
// membuat data set 
const uniqueSet = new Set(array);
// mengembalikan format object set ke array
const backToArray = [...uniqueSet];

console.log(backToArray);
