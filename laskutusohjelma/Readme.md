Laskutusohjelma

Laskutusohjelma on suunniteltu yrityksille ja yksityisille elinkeinonharjoittajille. Tuotteesta hyötyvät
eniten pienyrittäjät, jotka joutuisivat muuten tekemään laskut esimerkiksi käsin. Valmis laskupohja
tarjoaa tuotteen käyttäjälle mahdollisuuden täyttää sujuvasti asiakkaan tiedot laskuun ja tulostaa tai
tallentaa lasku helposti lähetettävään muotoon. Asiakkaiden tietojen tallennus järjestelmään
nopeuttaa laskutusta entisestään, ja kuukausittainen laskunmuodostus tarjoaa lähes
automatisoidun laskutuksen.

Ohjelman tekemiseen on käytetty Eclipseä ja Visual Studiota. 

Tietokantana käytetään MySQL:ää.
Backend on tehty Javalla käyttäen Sparkia, Hibernatea Apache Commonsia sekä gson:ia.
Frontend on tehty React.js:llä käyttäen apuna Material-UI-kirjastoa.

Asennus- ja konfigurointiohjeita:

1) Suorita git clone osoitteesta https://gitlab.com/OTP-Ryhma10/laskutusohjelma.git

2) Backend
	- Avaa projektin build path Eclipsessä tai VSCodessa
	- Suorita main.java

3) Frontend
	- Siirry reactapp-hakemistoon ja avaa komentorivi. 
	- Hae npm-asennukset suorittamalla komenta "npm install"
	- Asenna tarvittaessa axios komennolla "npm install --save axios"
	- Voit käynnistää frontendin komennolla "npm start"