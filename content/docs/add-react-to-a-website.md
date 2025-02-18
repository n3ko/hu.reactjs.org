---
id: add-react-to-a-website
title: React hozzáadása egy weblaphoz
permalink: docs/add-react-to-a-website.html
redirect_from:
  - "docs/add-react-to-an-existing-app.html"
prev: getting-started.html
next: create-a-new-react-app.html
---

Használj pont annyi Reactet, amennyit szeretnél. Se többet, se kevesebbet.

A React a kezdetektől fogva úgy lett tervezve, hogy fokozatosan lehessen adoptálni és **pontosan annyi Reactet kelljen használnod, amennyire szükség van**. Talán csak néhány "csipetnyi interaktivitást" szeretnél hozzáadni egy meglévő oldalhoz. A React komponensek erre tökéletesen megfelelnek.

A legtöbb weblap nem single-page alkalmazás, és nem is kell annak lenniük. Próbáld a Reactet **csak pár sornyi kóddal és bárminemű kód transzformáló eszköz nélkül** hozzáadni a weblapod egy kis részéhez. Eztután fokozatosan tudod növelni a jelenlétét, vagy megtarthatod néhány dinamikus widgetként.

---

- [React hozzáadása egy perc alatt](#add-react-in-one-minute)
- [Választható: Próbáld ki a Reactet JSX-el](#optional-try-react-with-jsx) (csomagoló nem szükséges!)

## React hozzáadása egy perc alatt {#add-react-in-one-minute}

Ebben a fejezetben megmutatjuk, hogyan adhatsz hozzá egy React komponenst egy meglévő HTML oldalhoz. Tarts velünk a saját weboldaladdal, vagy készíts egy üres HTML fájlt a gyakorláshoz.

Nem lesz szükség komplikált eszközökre vagy követelmények telepítésére -- **ahhoz, hogy be tudd fejezni ezt a fejezetet, csak internetelérésre lesz szükség és egy szabad percedre.**

Választható: [Töltsd le a teljes példát (Tömörítve 2KB)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)

### Első lépés: Adj hozzá egy DOM konténert a HTML-hez {#step-1-add-a-dom-container-to-the-html}

Először nyisd meg a HTML oldalt, amit szerkeszteni szeretnél. Adj hozzá egy üres `<div>` címkét és jelöld meg azt a helyet, ahol valamit Reacttel szeretnél megjeleníteni. Például:

```html{3}
<!-- ... meglévő HTML ... -->

<div id="like_button_container"></div>

<!-- ... meglévő HTML ... -->
```

Ennek a `<div>`-nek adtunk egy egyedi `id` HTML attribútumot. Ez lehetővé teszi számunkra, hogy ezt később könnyen megtaláljuk JavaScript kódból, és egy React komponenst jelenítsünk meg benne.

>Tipp
>
> Egy ilyen `<div>` "konténert" **bárhol** elhelyezhetsz a `<body>` címkén belül. Használj annyi különálló DOM konténert egy oldalon, ahányat szeretnél. Ezek általában üresek -- a React ki fogja cserélni a DOM konténerek meglévő tartalmát.

### Második lépés: Add hozzá a script címkéket {#step-2-add-the-script-tags}

A következőben adj hozzá három `<script>` címkét közvetlenül a záró `</body>` címke előtt:

```html{5,6,9}
  <!-- ... más HTML ... -->

  <!-- A React betöltése. -->
  <!-- Megjegyzés: publikáláskor, cseréld le a "development.js"-t "production.min.js"-re. -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- A React komponensünk betöltése. -->
  <script src="like_button.js"></script>

</body>
```

A két első címke a Reactet töltik be. A harmadik a komponensed kódját fogja betölteni.

### Harmadik lépés: Készíts egy React komponenst {#step-3-create-a-react-component}

Készíts egy fájlt a HTML oldalad mellett és nevezd el `like_button.js`-nek.

Nyisd meg **[ezt a kezdő kódot](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** és másold be a tartalmát a fájlba, amit készítettél.

>Tipp
>
> Ez a kód egy `LikeButton` nevű React komponenst definiál. Ne aggódj, ha még nem érted -- később át fogjuk venni a React építőelemeit a [gyakorlati tutoriálunkban](/tutorial/tutorial.html) és a [főbb koncepciók útmutatónkban](/docs/hello-world.html). Egyelőre elég, ha meggyőződünk róla, hogy megjelenik a képernyőn!


Adj hozzá két sort a `like_button.js` alján **[a kezdő kód](https://gist.github.com/gaearon/0b180827c190fe4fd98b4c7f570ea4a8/raw/b9157ce933c79a4559d2aa9ff3372668cce48de7/LikeButton.js)** után:

```js{3,4}
// ... a kezdő kód, amit bemásoltál ...

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

Ez a két sor kód megtalálja a `<div>`-et, amit a HTML-hez adtunk az első lépésben, és megjeleníti benne a "Tetszik" React komponens gombunkat.

### És ennyi! {#thats-it}

Nincs negyedik lépés. **Ezzel hozzáadtad az első React komponenst a weblapodhoz.**

Még több React integrálási tippért olvass tovább.

**[Nézd meg a példa teljes forráskódját](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605)**

**[Töltsd le a teljes példát (Tömörítve 2KB)](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605/archive/f6c882b6ae18bde42dcf6fdb751aae93495a2275.zip)**

### Tipp: Egy komponens újrafelhasználása {#tip-reuse-a-component}

Általában több helyen akarsz React komponenseket megjeleníteni a HTML oldaladon. Íme egy példa, ami a "Tetszik" gombot háromszor jeleníti meg és valamennyi adatot is átad neki:

[Nézd meg a példa teljes forráskódját](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda)

[Töltsd le a teljes példát (Tömörítve 2KB)](https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda/archive/9d0dd0ee941fea05fd1357502e5aa348abb84c12.zip)

>Megjegyzés
>
> Ez a stratégia akkor a leghatásosabb, ha az oldal Reacttel hajtott részei elzártak egymástól. A React kódon belül egyszerűbb inkább [komponens kompozíciót](/docs/components-and-props.html#composing-components) használni.

### Tipp: Csökkentsük a JavaScript méretét a publikáláshoz {#tip-minify-javascript-for-production}

Mielőtt a weboldalt végstádiumba publikálod, tartsd szem előtt, hogy a nem tömörített JavaScript kód jelentősen lelassíthatja az oldalad a felhasználók számára.

Ha már csökkented az alkalmazásod scriptjeinek a méretét, **az oldalad készen áll a végstádiumra**, amennyiben a publikált HTML oldalad a `production.min.js` végződésű React verziót tölti be:

```js
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

Ha nincs kódcsökkentő lépésed a scriptekhez, [itt egy módja, hogyan tudod ezt beállítani](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3).

## Választható: Próbáld ki a Reactet JSX-el {#optional-try-react-with-jsx}

A fenti példákban csak a böngészők által alapból támogatott funkciókra hagyatkoztunk. Ezért használtunk egy JavaScript függvény meghívást, hogy közöljük a Reacttel, mit jelenítsen meg:

```js
const e = React.createElement;

// Jeleníts meg egy "Tetszik" <button> gombot
return e(
  'button',
  { onClick: () => this.setState({ liked: true }) },
  'Like'
);
```

Azonban a React a [JSX](/docs/introducing-jsx.html) használatát is lehetővé teszi:

```js
// Jeleníts meg egy "Tetszik" <button> gombot
return (
  <button onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
```

Ez a két kódrészlet ekvivalens egymással. Bár **a JSX [teljesen szabadon választható](/docs/react-without-jsx.html)**, sok ember hasznosnak tartja felhasználói felület kód írásához -- mind a Reacttel és más könyvtárak esetében is.

A JSX-el [ennek az online konverternek](https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3) a segítségével játszadozhatsz egy kicsit.

### Próbáld ki a JSX-et gyorsan {#quickly-try-jsx}

Ha a leggyorsabban akarod kipróbálni a JSX-et a projektedben, add hozzá ezt a `<script>` címkét az oldaladhoz:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Eztuán bármelyik `<script>` címkében használhatsz JSX-et, amihez hozzáadtad a `type="text/babel"` attribútumot. Itt egy letölthető [HTML példafájl JSX-el](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html), játssz vele.

Ez a megközelítés nem rossz tanulás és egyszerű demók készítése esetén. Azonban lelassítja a weblapodat, és **alkalmatlanná teszi azt publikálásra**. Ha készen állsz a továbblépésre, távolítsd el a `<script>` címkét és a `type="text/babel"` attribútumot, amit az előbb hozzáadtál. Helyette a következő fejezetben beállítasz egy JSX preprocesszort, ami az összes `<script>` címkét automatikusan átalakítja.

### JSX hozzáadása egy projekthez {#add-jsx-to-a-project}

JSX-et hozzáadni egy projekthez nem igányel komplikált eszközöket, mint csomagolók vagy fejlesztői szerver. Alapjában véve a JSX hozzáadása **nagyon hasonló egy CSS preprocesszor hozzáadásához.** Az egyetlen követelmény a [Node.js](https://nodejs.org/) jelenléte a számítógépeden.

Menj a projekted mappájához a terminálban és másold be ezt a két parancsot:

1. **Első lépés:** Futtasd az `npm init -y` parancsot (ha sikertelen, [itt egy javítás](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d))
2. **Második lépés:** Futtasd az `npm install babel-cli@6 babel-preset-react-app@3` parancsot

>Tipp
>
> Itt **csak a JSX preprocesszor telepítéséhez használunk npm-et;** semmi másra nem lesz szükséged. Mind a React és az alkalmazásod kódja maradhat `<script>` címkékként bármilyen változtatás nélkül.

Gratulálunk! Ezzel **beállítottad a JSX publikálásra kész** használatát a projektedben.


### A JSX preprocesszor futtatása {#run-jsx-preprocessor}

Készíts egy `src` nevű mappát és futtasd az alábbi parancsot a terminálodban:

```
npx babel --watch src --out-dir . --presets react-app/prod 
```

>Megjegyzés
>
>Az `npx` az első sorban nem elírás -- ez egy [csomag futtató eszköz ami az npm 5.2 óta elérhető](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b).
>
> Ha egy hibaüzenetet látsz, ami ezt írja "You have mistakenly installed the `babel` package", valószínűleg kifelejtetted [az előző lépést](#add-jsx-to-a-project). Menj rajta végig ugyanabban a mappában és próbálkozz újra.

Ne várj a parancs lefutására -- ez a parancs egy automatikus JSX figyelőt indít el.

Ha most készítesz egy `src/like_button.js` nevű fájlt ezzel a **[JSX kezdő kóddal](https://gist.github.com/gaearon/c8e112dc74ac44aac4f673f2c39d19d1/raw/09b951c86c1bf1116af741fa4664511f2f179f0a/like_button.js)**, a figyelő egy előre feldolgozott `like_button.js` fájlt fog készíteni egyszerű JavaScript kóddal, ami a böngésző számára is olvasható. Amikor a JSX forrásfájlt szerkeszted, a konvertálás újra le fog futni automatikusan.

Bónuszként ez modern JavaScript szintaxis funkciók - mint például osztályok - használatát is lehetővé teszi anélkül, hogy régi böngészőkben esetlegesen fellépő hibáktól kéne tartanod. Az imént használt eszköz neve Babel, és ha többet akarsz tanulni róla, nézd meg [annak dokumentációját](https://babeljs.io/docs/en/babel-cli/).

Ha úgy érzed, hogy kezdesz megbarátkozni az építő eszközökkel és azt szeretnéd, hogy több munkát végezzenek el helyetted, [a következő fejezet](/docs/create-a-new-react-app.html) a legnépszerűbb és legkönnyebben megközelíthető eszközláncokat írja le. Ha még nem érzed magad készen -- azok a script címkék tökéletesen megfelelnek!
