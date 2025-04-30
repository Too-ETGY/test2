function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let result = Math.ceil(Math.random() * 3600);

btn.onclick = function() {  
  wheel.play();
  container.style.transform = "rotate(" + result + "deg)";
  result += Math.ceil(Math.random() * 3600);


  // let rng = getRandomInt(1, 8);
  // let hasilAkhir='';
  // let gambarnya='';
  
  // if ( rng == 1 ) {
  //   hasilAkhir= 'Kamu akan belajar tentang kendaraan' + ', ' + '<a href="content/p.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else if ( rng == 2 ) {
  //   hasilAkhir= "Kamu akan belajar tentang makanan" + ', ' + '<a href="content/s.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else if ( rng == 3 ) {
  //   hasilAkhir= "Kamu akan belajar tentang profesi" + ', ' + '<a href="content/v.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else if ( rng == 4 ) {
  //   hasilAkhir= "Kamu akan belajar tentang warna" + ', ' + '<a href="content/n.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else if ( rng == 5 ) {
  //   hasilAkhir= "Kamu akan belajar tentang hewan" + ', ' + '<a href="content/m.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else if ( rng == 6 ) {
  //   hasilAkhir= "Kamu akan belajar tentang hobi" + ', ' + '<a href="content/l.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else if ( rng == 7 ) {
  //   hasilAkhir= "Kamu akan belajar tentang lagu" + ', ' + '<a href="content/b.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // } else {
  //   hasilAkhir= "Kamu akan belajar tentang hidup" + ', ' + '<a href="content/r.html">Mau Belajar Sekarang ?</a>'
  //   gambarnya='....';
  // }; 

  setTimeout(() => {
    applause.play();
    wheel.pause();
    wheel.currentTime = 0;
    Swal.fire({
      // title: "OORRRAAAAA",
      // text: "<img src=''>",
      imageUrl: './content/hora.png',
      imageWidth: 500,
      imageHeight: 500,
      imageAlt: "Custom image"
    });
  }, 5000);
};