/*

    ? Suallar
    1-AZƏRBAYCAN Dili 40    -4 bal ...
    2-RİYAZİYYAT 40
    3-İNGİLİS DİLİ 20 
    4-FİZİKA 20

    ---->100 balı DİM verir
    ---->Məktəb balı max 60 verir

*/


let azDoğru, azYanlış = 0;
let riyaziyyatDoğru, riyaziyyatYanlış = 0;
let inDoğru, inYanlış = 0;
let fizikaDoğru, fizikaYanlış = 0;
let bal = 0;
let məktəbBalı = 0;

let yeniSətir = "\r\n";
let mesaj = "DİM Bal hesablama səhifəsinə xoş gəldiniz!" + yeniSətir

    + " 1-Bal hesabla" + yeniSətir
    + " 2-Çıxış et";

// alert(mesaj);

let seçim = prompt(mesaj);

switch (seçim) {

    case "1":

        məktəbBalı = Number(prompt("Məktəb Balnızı daxil edin"));

        azDoğru = Number(prompt("Azərbaycan dili doğru sayı"));
        azYanlış = Number(prompt("Azərbaycan dili yanlış sayı"));

        riyaziyyatDoğru = Number(prompt("Riyaziyyat doğru sayı"));
        riyaziyyatYanlış = Number(prompt("Riyaziyyat yanlış sayı"));

        inDoğru = Number(prompt("İngilis dili doğru sayı"));
        inYanlış = Number(prompt("İngilis dili yanlış sayısı"));

        fizikaDoğru = Number(prompt("Fizika doğru sayı"));
        fizikaYanlış = Number(prompt("Fizika yanlış sayı"));

        //28  8/4 = 2 yanlış
        let doğruSayı = azDoğru + riyaziyyatDoğru + inDoğru + fizikaDoğru;

        let yanlışSayı = azYanlış + riyaziyyatYanlış + inYanlış + fizikaYanlış;

        let qalanDoğruSayı = doğruSayı - (yanlışSayı / 4);

        bal = (qalanDoğruSayı * 4) + 100 + məktəbBalı;
        alert("Toplam Balınız : " + bal);
        console.log("Toplam Balınız : " + bal);
        break;

    case "2":
        alert("Programdan çıxış olundu...");
        console.log("Programdan çıxış olundu...");
        break;

    default:
        alert("Zəhmət olmasa düzgün dəyər daxil edin!");
        console.log("Zəhmət olmasa düzgün dəyər daxil edin!");
        break;
}