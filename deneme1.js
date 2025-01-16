//while döngüsü prtaikleri . while da sadece koşul yapısı vardır 
let sayac = 1;
while (sayac <= 10) {
    //burda demek istediğin 10 a kadar sayac sayıcak ama hep 1 çıkııcak sonsuz döngü olucak bu teklikeli bir şey bilgisayarı kitler.
    console.log(sayac);
    //bunları yazdırsan sonusz döngüye girer.
    sayac++;
    //bunu yaparsan eğer sayac 10 a kadar devam eder ve döngü durur.
    //for döngüsüne benzer.
}

let sayacı = 1;
while (sayacı <= 10) {
    if (sayac % 2 == 0) { //her rakamı ikiye böler ve yazar 
        console.log(sayac);
    }
    sayacı++;

}
let sayacım = 1;
while (true) {
    //bu sonsuz bir döngü
    console.log(sayacım);
    if (sayacım == 7) {
        break; //sayac birden başlar ve 7 ye kadar saymaya başlar daha sonra da 7 ye geldipinde döngü kırılır .ünkü break yazdık burda . sonsuz döngüden kurtulmuş olur.
    }
    sayacım++;

}


// do ve do while döngüsü örnekleri:
let sayacimi = 1;
do {
    console.log(sayacimi);
    sayacimi++;//artırarak sonsuz döngüden kurtulur. 

} while (sayacimi <= 10);// her gelen sayı  10 dan küçük mü şeklinde bakılır. 10 a kadar yazar ekrana.


let yas = 23;
do {
    console.log("ehkiyetiniz alabilirinsiz.");
    //koşul sağlamadığı halde console log önce yazıldığı için bir kere de olsa ekrana console yazılır .
} while (yas >= 25);


let sayacimi = 1;
let toplam = 0;
do {
    if (sayacimi % 2 == 1) {
        toplam += sayacimi;

    }
    sayacimi++; //sayacı sürekli topluyor ve 21 e kadar döngü devam eder ve heğsini azdırır.

} while (sayacimi <= 20);
console.log("toplam:", toplam);

//daha fazla örnekler yappalım
//kullanıcıdan doğru şifre girilene kadar şifreyi tekrar isteme kodu yazalım 
let pasaword;
do {
    pasaword = prompt("lütfen şifrenizi girniz:");

}
while (pasaword != "şifrembu");
console.log("Doğru Şifre ");
//bu kod pasaword kodundaki şifreyi alana kadar şifre istiycek.


//rastgele sayı üretme uygulaması 
let randomNumber;
do {
    randomNumber = Math.floor(Math.random() * 10);//0 ile 9 arasında bir sayı üretir.
    console.log("üretilen sayı", randomNumber);

}
while (randomNumber !== 7);
console.log("7 bulundu döngü sona erdi.");
//7 yi bulduğu anda bu yazı gelicek ve döngü durucak 


//negatif sayı girilene kadar toplama hesaplama 
let toplam = 0;
let sayi;
do {
    sayi = parseInt(prompt("bir sayı giriniz(negatif sayı girilene kadar döngü devam edecek)"));
    toplam += sayi;

} while (sayi >= 0);
console.log("Toplam:", toplam);
//burda kulllanıcı pozitif sayı girip işlem yaptıkca toplama yapar ve döngü devam eder eğer negatif bir sayı girerse toplama durur ve döngü kapanır.



//FOR EACHE hakkında deneme örenkleri;
const sayilar = [10, 30, 59, 39, 40];
let toplam = 0;
sayilar.forEach(function (sayi) {
    toplam += sayi;

});
console.log("toplam:" toplam);
//bu kod burdaki tanımallnaman sayilar toplanır.



//bir dizideki elemanların harf rakamını bulma .isimlerin harflerini hesaplar.
const isimler = ["ahmet", "ayşe", "fatma", "hayriye"];
isimler.forEach(function (isim) {
    console.log(`${isim}  uzunluğu: ${isim.length}`);

});


//mesela şöyle bir örnek . bu tanımlananlar yan yana gelince çokgüzel gözükücek ekranda.
const ogrenciler = [
    { isim: "ali", yaş: 20 },
    { isim: "ayşe", yaş: 30 },
    { isim: "fatma", yaş: 50 }

];
ogrenciler.forEach(function (ogrenci) {
    console.log(`${ogrenci.isim} ${ogrenci.yas} yaşında.`)
});



