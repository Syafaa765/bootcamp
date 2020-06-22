const array =["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

array.reduce((unique, item) => {
    console.log(
                // value
                item, 
                // array hasil (akumulasi)
                unique, 
                // nilai yang dikembalikan (value hanya akan disertakan pada array jika nilai berupa false)
                unique.includes(item), 
                // array akhir
                unique.includes(item) ? unique : [...unique, item]
                );
    return unique.includes(item) ? unique : [...unique, item];
},[]);
