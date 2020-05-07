# Laskutusohjelma v.0.1.0

Ohjelmistotuotantoprojekti 1 ja 2 -kursseilla toteuttamamme sovellus on laskutusohjelma. 
Kyseessä on web-sovellus. Ohjelmalla voi luoda laskuja. Kohderyhmänä sovelluksella ovat yksityisyrittäjät ja yksityiset elinkeinonharjoittajat.
Ohjelmaan on tarkoitus tehdä käyttäjä, jolle tallennetaan laskuttajan tiedot. 
Ohjelmaan voi lisätä asiakkaita. Laskun luonnin yhteydessä asiakkaan voi valita suoraan tietokannasta tai kirjoittaa uudet laskutettavan tiedot. 
Ohjelma hakee laskuttajan tiedot laskulle automaattisesti. Myös vanhoja laskuja voi tallentaa arkistoon ja niitä voi tarkastella arkistosta. 
Ohjelma on todella näppärä työkalu laskutukseen

![Laskutusohjelma aloitusnäkymä](/doc/dashboard.jpg)

## Teknologiat

Ohjelman tekemiseen on käytetty Eclipseä ja Visual Studiota.
Tietokantana käytetään SQL pohjaista MariaDB:tä.
Backend on tehty Javalla käyttäen Spring bootia.
Frontend on tehty React.js:llä käyttäen apuna Material-UI-kirjastoa.

## Asennus
Tarvitset tietokoneellesi Javan ja node.js:n.

1. Suorita git clone osoitteesta https://gitlab.com/OTP-Ryhma10/laskutusohjelma.git

```bash
git init
git clone https://gitlab.com/OTP-Ryhma10/laskutusohjelma.git
```

2. Käynnistä backend

Avaa maven projekti haluamallasi IDE:llä ja aja laskutusApplication.java

3. Käynnistä Frontend

Siirry reactapp-hakemistoon ja avaa komentorivi.
Hae npm-asennukset suorittamalla komento "npm install"
```bash
npm install
```
Asenna tarvittaessa axios komennolla 
```bash
npm install --save axios
```

Asenna tarvittaessa react pdf komennolla 
```bash
npm install --save react-to-pdf
```
Voit käynnistää frontendin komennolla 
```bash
npm start
```

Siirry osoitteeseen localhost:3000

