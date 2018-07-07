if (annyang) {
 var cmds = {};
 cmds["Ata *"] = function(soz) {ATA.komut(soz);};// ses kontrol
 // cmds["Sistem *"] = function(soz) {Ata["_" + soz]();};
 annyang.setLanguage("tr");
 annyang.addCommands(cmds);
 annyang.start();
}