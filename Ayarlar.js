// Ayarlar Dosyası

ATA.devriye = function() {
 // devriye atma
 console.log("\nZaman = " + (new Date()) + "\nDevriye Atıldı.");
};

ATA.VeriTabani = {};
ATA.VeriTabani.Host = "localhost";


ATA.Sayfa.Sayfalar["DOSYA"] = {};
ATA.Sayfa.Sayfalar["DOSYA"].Ac = function(request,response){
 var dosyayolu = ATA.yol + "_ekdosyalar" + request.url.toLowerCase().split("dosya")[1].split("/").join("\\");
 var extname = ATA.path.extname(dosyayolu);
 var mime = "text/html";
 switch (extname) {
  case ".js":mime = "text/javascript";
   break;
  case ".css":mime = "text/css";
   break;
  case ".png":mime = "image/png";
   break;      
  case ".jpg":mime = "image/jpg";
   break;
 }
 if (ATA.fs.existsSync(dosyayolu)) {
  ATA.fs.readFile(dosyayolu, function(error, content) {
   if (error) {
    response.writeHead(200,{"Content-Type":"text/html"});
    response.end("HATA!!! Dosya yok");
	return;
   }
   response.writeHead(200,{"Content-Type":mime});
   response.end(content);
  });
 } else {
  response.writeHead(200,{"Content-Type":"text/html"});
  response.end(ATA.Sayfa.Hata(404));
 }
};

ATA.Sayfa.Sayfalar["ADMIN"] = {};
ATA.Sayfa.Sayfalar["ADMIN"].Ac = function(request,response){
 var reqtext = "" + request.url.split("/").join("\\") + "";
 if (reqtext.split("gorev=").length>1) {
  var gorev = eval(reqtext.split("gorev=")[1].split(",")[0]);
  response.writeHead(200,{"Content-Type":"text/html"});
  response.end("true");
  switch(gorev) {
   default:console.log("Görev = " + gorev);break;
   case 0:
    process.exit();
	break;
  }
 } else if (ATA.fs.existsSync(ATA.yol + "_dosyalar\\index.html")) {
  ATA.fs.readFile(ATA.yol + "_dosyalar\\index.html", function(error, content) {
   response.writeHead(200,{"Content-Type":"text/html"});
   if (error) {
    response.end("false");
    return;
   }
   response.end(content);
  });
 }
};