const fs = require('fs');

// 📄 Dosya oluşturma
fs.writeFile('ornek.txt', 'Merhaba Dünya! \n Emir', (err) => {
  if (err) throw err;
  console.log('Dosya oluşturuldu!');
  
});

//  Dosyayı okuma
fs.readFile('ornek.txt', 'utf8', (err, data) => {
   if (err) throw err;
  console.log('Dosya içeriği:', data);
 });

