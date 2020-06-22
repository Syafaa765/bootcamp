var tahun = 1998;
if ((tahun%4)===0){
  if ((tahun%100)!==0){
    alert(tahun + ' adalah tahun kabisat');
  }
  else {
    if((tahun%400)===0) {
      alert(tahun + ' adalah tahun kabisat');
    }
    else {
      alert(tahun + 'adalah bukan tahun kabisat');
    }
  }
}
else {
  alert(tahun + ' adalah bukan tahun kabisat');
}