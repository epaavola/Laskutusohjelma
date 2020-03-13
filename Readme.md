Laskutusohjelma

Laskutusohjelma on suunniteltu yrityksille ja yksityisille elinkeinonharjoittajille. Tuotteesta hyˆtyv‰t
eniten pienyritt‰j‰t, jotka joutuisivat muuten tekem‰‰n laskut esimerkiksi k‰sin. Valmis laskupohja
tarjoaa tuotteen k‰ytt‰j‰lle mahdollisuuden t‰ytt‰‰ sujuvasti asiakkaan tiedot laskuun ja tulostaa tai
tallentaa lasku helposti l‰hetett‰v‰‰n muotoon. Asiakkaiden tietojen tallennus j‰rjestelm‰‰n
nopeuttaa laskutusta entisest‰‰n, ja kuukausittainen laskunmuodostus tarjoaa l‰hes
automatisoidun laskutuksen.

Ohjelman kehityksess‰ k‰ytettiin Visual Studio Codea ja Eclipse‰. 
Tietokantana toimi MySQL. 
Backend tehtiin Javalla Sparkia, Hibernatea, Apache Commonsia ja gson:ia k‰ytt‰en.
Frontend tehtiin React.js:ll‰, k‰ytettiin Material-ui-kirjastoa.

Asennus- ja konfigurointiohjeita:

Ensimm‰iseksi suorita git clone osoitteesta https://gitlab.com/OTP-Ryhma10/laskutusohjelma.git

1) Backend
	- Valitse projekti Eclipsess‰ ja valitse "Build path". T‰m‰n j‰lkeen korvaa nykyiset hibernatetiedostojen polut koneeltasi lˆytyvill‰ poluilla.
	- Suorita main-tiedosto

2) Frontend
	- Siirry reactapp-hakemistoon ja hae npm-konfigurointi "npm install" -komennolla
	- Voit k‰ynnist‰‰ frontendin komennolla "npm start"