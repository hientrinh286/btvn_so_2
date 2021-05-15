var today = new Date ();
let namsinh = +prompt('Nhập năm sinh của bạn:');
tuoi = today.getFullYear() - namsinh;
alert('Tuổi hiện tại của bạn là: '+tuoi);