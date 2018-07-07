// NodeJS Sayfa Yönetim Sistemi Çekirdeği (Mustafa ÖZVER)
console.log("NodeJS Sayfa Yönetim Sistemi Çekirdeği\nV1.00 (C) 2018 Mustafa ÖZVER\nYol : " + __dirname);
// node D:\m\a\b.js
/*
npm install child_process
npm install path
*/


var ATA = {};
ATA.system_port = 8080;
ATA.yol = "" + __dirname + "\\";
ATA.Domain = "http://localhost:" + ATA.system_port;


ATA.kurulum = function() {
 console.log("Ayarlamalar yapılıyor...");
 eval(""+ATA.dosyaislemleri.oku(ATA.yol + "\\Ayarlar.js"));
 console.log("Eklentiler çalıştırılıyor...");
 var dosyalar = ATA.fs.readdirSync(ATA.yol + "\\_eklentiler\\");
 for (var i in dosyalar) {
  require(ATA.yol + "\\_eklentiler\\" + dosyalar[i]);
  console.log("Eklenti çalıştırıldı : " + dosyalar[i]);
 }
 setInterval(function(){ATA.devriye();},10000);
 console.log("\nKurulum Tamamlandı.");
};
ATA.devriye = function() {};

ATA["Rastgele"] = function(plength,h,trk) {
var keylist = "1234567890";
 if (h == 1 ) {
  keylist += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (trk) {
   keylist += "ÇĞİÖŞÜ";
  }
 } else if (h == 2) {
  keylist += "abcdefghijklmnopqrstuvwxyz";
  if (trk) {
   keylist += "çğıöşü";
  }
 } else if (h == 3) {
  keylist += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (trk) {
   keylist += "ÇĞİÖŞÜçğıöşü";
  }
 }
var temp = "";
 for (i=0;i<plength;i++) {
  temp += "" + keylist.charAt(Math.floor(Math.random()*keylist.length)) + "";
 }
return temp;
};


// Modüller
ATA.http = require("http");
ATA.fs = require("fs");
ATA.path = require("path");
ATA.cp = require("child_process");


ATA.dosyaislemleri = {};
ATA.dosyaislemleri.oku = function(oUrl) {
 try {return ATA.fs.readFileSync(oUrl);}
 catch (e){ return "";}
};


ATA.Sayfa = {};
ATA.Sayfa.degiskenler = {};
ATA.Sayfa.degiskenler._deg = {};
ATA.Sayfa.degiskenler.oku = function(oDeg) {
 return ATA.Sayfa.degiskenler._deg["_" + oDeg];
};
ATA.Sayfa.degiskenler.yaz = function(oDeg, oVeri) {
 ATA.Sayfa.degiskenler._deg["_" + oDeg] = oVeri;
};
ATA.Sayfa.yol = ATA.yol + "_dosyalar";var __sayfasayisi__ = 0;
ATA.Sayfa.Hata = function(oHata) {
 switch (oHata) {
  case 404:return ATA.dosyaislemleri.oku(ATA.yol + "_dosyalar\\404.html");break;
  case 0:return "Javascript Kodlama Hatası\nYazım hatası, erişim hatası vb. bir hata oluştu.";break;
 }
};
ATA.Sayfa.Sayfalar = {};
ATA.Sayfa.Olustur = function() {
 var _Sayfa = {};
 _Sayfa.Kimlik = "Sayfa_" + ATA["Rastgele"](11,1,false) + "_" + (__sayfasayisi__++);
 _Sayfa.url = ""; // gerekli değişkenler
 _Sayfa.ext = "";
 _Sayfa.dosya = "";
 _Sayfa.mime = "text/html";
 _Sayfa.Domain = ATA.Domain;
 
 _Sayfa.ATA = null; // Güvenlik
 _Sayfa._Sayfa = null;
 _Sayfa.process = null;
 _Sayfa.confirm = null;
 _Sayfa.console = null;
 _Sayfa.prompt = null;
 _Sayfa.ActiveXObject = null;
 //_Sayfa.Date = null;
 _Sayfa.Error = null;
 _Sayfa.eval = null;
 _Sayfa.GetObject = null;
 _Sayfa.Math = null;
 //_Sayfa.setInterval = null;
 //_Sayfa.setTimeout = null;
 
 _Sayfa.dosya_oku = function(oUrl) {
  return ATA.dosyaislemleri.oku(oUrl);
 };
 _Sayfa.dosya_ekle = function(oUrl) {
  try {return eval("with (ATA.Sayfa.Sayfalar[\"_"+this.Kimlik+"\"]) {"+ATA.dosyaislemleri.oku(oUrl)+"}");}
  catch (e) {with(this) return require(oUrl);}
 };
 _Sayfa.Gdegisken_oku = function(oDeg) {
  try {return ATA.Sayfa.degiskenler.oku(oDeg);}
  catch (e) {return false;}
 };
 _Sayfa.Gdegisken_yaz = function(oDeg, oVeri) {
  ATA.Sayfa.degiskenler.yaz(oDeg, oVeri);
 };
 _Sayfa.HTML = function() { // fonksiyonlar
  return "";
 };
 ATA.Sayfa.Sayfalar["_" + _Sayfa.Kimlik] = _Sayfa;
 return _Sayfa;
};


// ayarlamalar
ATA.http.createServer(function (request, response) {
 var _Sayfa = new ATA.Sayfa.Olustur();
 _Sayfa.aaaa = request.url.split("/");
 _Sayfa.url = ATA.Sayfa.yol + request.url.split("/").join("\\");
 _Sayfa.dosya = _Sayfa.url + "\\0.js"
 if (ATA.fs.existsSync(_Sayfa.dosya)) {
  try {eval("with (_Sayfa) {"+ATA.fs.readFileSync(_Sayfa.dosya)+"}");}
  catch (e) {_Sayfa.html = function() {return ATA.Sayfa.Hata(0)};}
  response.writeHead(200,{"Content-Type":_Sayfa.mime});
  response.end(_Sayfa.HTML());
 } else if (ATA.Sayfa.Sayfalar["" + request.url.split("/")[1].toUpperCase()]) {
  ATA.Sayfa.Sayfalar["" + request.url.split("/")[1].toUpperCase()].Ac(request,response);
 }else {
  response.writeHead(200,{"Content-Type":_Sayfa.mime});
  response.end(ATA.Sayfa.Hata(404) + " -- " + request.url.split("/")[1].toUpperCase()); //1234567890
 }
}).listen(ATA.system_port);console.log("Bildiri : Sunucu kuruldu.\n Sunucu : localhost:" + ATA.system_port + "");
/*
ATA.proc = cp.spawn(ATA.yol + "_exec\\deneme1.exe");
*/
setTimeout(function(){ATA.kurulum();},2000);
