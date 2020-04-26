---
title: "VueJS: Membuat Blog dengan VueJS dan NetlifyCMS."
excerpt: a
date: 2020-04-25T17:00:00.000Z
thumbnail: /uploads/external-content.duckduckgo.com.jpeg
---
Jika dulu bila ingin membuat sebuah website atau blog biasanya menggunakan Wordpress atau Blogspot, benar? Namun sekarang ini pendekatan yang dapat digunakan untuk membuat sebuah blog sangat banyak selain menggunakan Wordpress atau Blogspot. Salah satunya dengan hadirnya teknologi modern framework yang dapat di*convert* menjadi *static site.* Ada banyak pilihan teknologi yang dapat digunakan dalam membuat sebuah Blog, bila tidak ingin repot bisa menggunakan Jekyll, Hugo, Gatsby, atau VuePress. Namun kali ini saya akan menggunakan VueJS namun bukan VuePress melainkan Gridsome.

### **Lets get started!**

**Prerequisite:**

* Tahu sedikit VueJS/NuxtJS
* Tahu sedikit GraphQL
* Akun Github
* Akun Netlify
* Gridsome membutuhkan [Node.js](https://nodejs.org/) (v8.3+) dan juga NPM (saya pakai ini) atau YARN. 

**Apa itu Gridsome?**

Baca sendiri [disini](https://gridsome.org/docs/) yha. Dev yang baik harus pandai baca dokumentasi, jangan cuma mengandalkan stackoverflow. 😜

**Install GridsomeCLI**

Bila anda sudah pernah atau biasa pakai CLI apa itu React, Vue, atau Nuxt CLI maka Gridsome juga punya CLInya. Dengan adanya CLI ini maka dapat memudahkan dalam melakukan instalasi Gridsome jadi setelah install tinggal langsung pakai deh. Mau tanpa CLI bisa juga, tapi ya harus pasang struktur foldernya sendiri, udah daripada ribet pake CLI aja.

NPM

`npm install --global @gridsome/cli`

Yarn

`yarn global add @gridsome/cli`

Lalu tinggal install project Gridsomenya di directory yang anda mau. Ikuti command dibawah ini.

1. `gridsome create my-gridsome-site `untuk membuat projek Gridsome baru.
2. Kemudian buka directory projek Gridsome anda dan buka terminal
3. Lalu gunakan command `gridsome develop` untuk memulai server development project anda.

*Okay All is set,* project Gridsome anda sudah bisa digunakan. Tapi *objective* kita adalah membuat blog dengan menggunakan NetlifyCMS, benar?

```
.
├── package.json
├── gridsome.config.js
├── gridsome.server.js
├── static/
└── src/
    ├── main.js
    ├── layouts/
    │   └── Default.vue
    ├── pages/
    │   ├── Index.vue
    │   └── About.vue
    └── templates/
```

Strultur folder yang berhasil dibuat adalah seperti ini. Cukup mirip dengan NuxtJS. File `Index.vue `pada `src/pages` digunakan sebagai entry file dimana ini akan menjadi root URL `localhost:8080/`. 

Sampai disini anda bisa melakukan modifikasi pada `Index.vue` dan `About.vue` lalu setelah ini upload project anda ke Github. Ikuti langkahnya [disini](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line) untuk upload ke repo. 

Setelah upload ke Giithub, sekarang saatnya deploy project ke [Netlify](https://www.netlify.com/). Gampang kok tinggal klik-klik aja jika udah anda akan mendapatkan alamat website anda dari Netlify.

**Menghubungkan Dengan Netlify CMS**

Dari dokumentasi dari Gridsome sudah sangat jelas untuk menghubungkan project Gridsome dengan Netlify CMS. Bacanya bisa mulai dari [sini](https://gridsome.org/docs/guide-netlify-cms/#install-the-required-dependencies).

Udah? Sipp

**Membuat List Blog Posts**

**Membuat Single Page Blog Post**