/*
Sayfa Örneği

Parametreler
url = Drequest.url.split("/")_dosyalar\
mime = text/html
dosya = D:\m\a\_dosyalar\\0.js
Domain = localhost:8080

Fonksiyonlar
Gdegisken_yaz("Merhaba", "ve aleyküm selam"); Gdegisken_oku("Merhaba");
*/

// Değişkenler




HTML = function() {
 ATA = {};

 ATA.cikti = ""; // ayarlamalar
 ATA.Uygulama = "ATA V2.0";
 ATA.Baslik = "Örnek Başlık";
 ATA.Tanim = "Örnek Sayfa";
 ATA.Anahtarlar = ["Örnek", "Sayfa", "Anahtar", "Kelimeler"];
 ATA.Yazar = "Mustafa ÖZVER";
 ATA.Sahip = "Mustafa ÖZVER";
 ATA.Telif = "2018 (C) Mustafa ÖZVER";

 ATA.ATA = {}; // ortak ögeler

 dosya_ekle(url + "head.js"); // Sayfa kurulumu
 dosya_ekle(url + "bas.js");
 dosya_ekle(url + "govde.js");
 dosya_ekle(url + "alt.js")
 return ATA.cikti;
};

