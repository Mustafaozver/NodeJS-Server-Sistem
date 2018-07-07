// Başlık
var basliklar = [];
basliklar.push({URL:"",Ad:"Ana Sayfa"});
basliklar.push({URL:"admin",Ad:"Admin Paneli"});
basliklar.push({URL:"sayfa_ornek",Ad:"Sayfa Örnek"});
ATA.cikti += " <body style=\"background-color:#FFFFFF;color:#000000;\">\n";
ATA.cikti += "  <div class=\"bas\" style=\"background-color:#000000;color:#FFFFFF;position:fixed;left:0;top:0;width:100%;\">\n";
for (var t_ = 0;t_ < basliklar.length;t_++) ATA.cikti += "   <a href=\""+Domain+"/"+basliklar[t_]["URL"]+"\">"+basliklar[t_]["Ad"]+"</a>\n";
ATA.cikti += "  </div>\n";


// Kod sonu
;true