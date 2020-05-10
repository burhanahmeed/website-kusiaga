---
title: Dynamic Rendering, Solusi Sederhana untuk SPA Ketika Dibagikan ke Sosial Media
uniqueid: Dynamic Rendering, Solusi Sederhana untuk SPA Ketika Dibagikan ke Sosial Media
excerpt: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
date: 2020-05-10T13:13:54.729Z
thumbnail: /uploads/dynamic-rendering-.jpg
---
Dalam membuat sebuah website maka tujuannya adalah agar dikunjungi oleh orang lain. Ada berbagai macam cara agar website dikunjungi oleh orang lain. Yap salah satuya adalah dengan menggunakan SEO, hal ini merupakan bagaimana cara agar website anda mudah ditemukan hanya melalui mesin pencari seperti Google atau Duckduckgo.

Semuanya tidak akan menjadi masalah sampai anda sadar bahwa website anda dibangun dengan menggunakan Javascript dan sebagian besar konten di*generate* oleh Javascript. Namun tenang, bila mesin pencari dari Google sekarang sudah semakin canggih. Sejak Mei 2019 Google sudah menggunakan evergreen selengkapnya [bisa dibaca disini](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html), mereka mengklaim bot Evergreen terbaru milik Google sudah bisa dan lebih handal dalam merender konten Javascript, Googlebot terbaru kini menggunakan chrome versi 74 yang mana memiliki kemampuan yang sama seperti chrome browser anda dalam merender Javascript.

Yap itu Google, lalu bagaimana bila anda membagikan website anda ke sosial media?, bagaimana dengan crawler milih Facebook atau Twitter?

Jangan salah, tidak hanya Google, Bing, atau Duckduckgo saja yang memiliki crawer sosial media seperti Facebook dan Twitter juga memiliki crawler yang berfungsi untuk menampilkan sebuah object dari website yang dibagian ke sosial media.

![Gambar object sosial media](/uploads/screenshot-from-2020-05-10-14-47-29.png "Dokumentasi pribadi Kusiaga")

Bagaimana cara melakukan hal tersebut? 

Facebook dan Twitter memiliki tag tersendiri, hal ini agar bot mereka dapat mendeteksi dan membuat object data untuk ditampilakn seperti pada gambar diatas.

```django
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.io/">
<meta property="og:title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
<meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
<meta property="og:image" content="https://example.io/assets/meta-tag.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://example.io/">
<meta property="twitter:title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
<meta property="twitter:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
<meta property="twitter:image" content="https://example.io/assets/meta-tags.png">
```

TAPI, ketika website anda merupakan sebuah website berbasis *single page application* maka siap-siap saja bot Facebook maupun Twitter tidak dapat membaca meta tag atau content yang ada pada website anda. Berdasarkan eksperimen yang saya lakukan ketika artikel ini ditulis bulan Mei 2020, Facebook bot tidak dalam membaca website yang berbasis SPA atau website yang kontentnya digenerate oleh Javascript. Menyedihkan.

Lalu bagaimana?  

Dynamic Rendering bisa menajdi sahabat anda, meskipun ada cara lain yaitu dengan menjadikan website anda sebagai static site.

OK, anggap saja anda hanya mau SPA, dan harus kita lakukan dynamic rendering. 

**Jadi apa itu Dynamic Rendering?**

Dari namanya saja adalah dynamic atau dinamis, oh ya jangan lupa dengan menggunakan *dynamic rendering* maka anda membutuhkan server dalam kasus saya ini server yang mendukung NodeJS. Dengan dynamic rendering maka halaman web yang akan diberikan oleh server berbeda-beda tergantung dari *user-agent* yang terdeteksi.Bila terdeteksi yang mengakses ke website anda adalah sebuah bot maka halaman web yang akan diberikan ke klien adalah halaman yang berupa statis karena sebelum dikirimkan ke klien terlebih dahulu dilakukan rendering oleh Puppeteer. Namun bila yang mengakses terdeteksi adalah bukan bot alias manusia beneran, maka halaman yang akan dikimkan ke klien adalah html, js, dan css dan akan dirender di browser dari si pengakses.

![Dynamic rendering google](/uploads/how-dynamic-rendering-works.png "Sumber dari website milik Google")

**Bagaimana kita bisa mengimplementasikannya?**

Pertama anda membutuhkan sebuah server yang bisa mendukung NodeJS, jika tidak punya maka bisa anda gunakan Heroku.

Cara mudahnya ada dapat membuat folder project anda kemudian lakukan `npm init` dan install Expressjs dan Puppeteer didalamnya dengan command `npm install express`, `npm install puppeteer`.