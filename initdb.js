const sql = require("better-sqlite3");
const db = sql("gallery.db");

const zavjese = [
  {
    order: 0,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese1.jpg",
  },
  {
    order: 1,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese2.jpg",
  },
  {
    order: 2,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese3.jpg",
  },
  {
    order: 3,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese4.jpg",
  },
  {
    order: 4,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese5.jpg",
  },
  {
    order: 5,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese6.jpg",
  },
  {
    order: 6,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese7.jpg",
  },
  {
    order: 7,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese8.jpg",
  },
  {
    order: 8,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese9.jpg",
  },
  {
    order: 9,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese10.jpg",
  },
  {
    order: 10,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese11.jpg",
  },
  {
    order: 11,
    title: "Slika zavjese.",
    src: "/images/webImages/zavjese/zavjese12.jpg",
  },
];

const rolice_paneli = [
  {
    order: 0,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli1.jpg",
  },
  {
    order: 1,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli2.jpg",
  },
  {
    order: 2,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli3.jpg",
  },
  {
    order: 3,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli4.jpg",
  },
  {
    order: 4,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli5.jpg",
  },
  {
    order: 5,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli6.jpg",
  },
  {
    order: 6,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli7.jpg",
  },
  {
    order: 7,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli8.jpg",
  },
  {
    order: 8,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli9.jpg",
  },
  {
    order: 9,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli10.jpg",
  },
  {
    order: 10,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli11.jpg",
  },
  {
    order: 11,
    title: "Slika rolice i paneli.",
    src: "/images/webImages/rolice_paneli/rolice_paneli12.jpg",
  },
];

const prateca_dekoracija = [
  {
    order: 0,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija1.jpg",
  },
  {
    order: 1,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija2.jpg",
  },
  {
    order: 2,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija3.jpg",
  },
  {
    order: 3,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija4.jpg",
  },
  {
    order: 4,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija5.jpg",
  },
  {
    order: 5,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija6.jpg",
  },
  {
    order: 6,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija7.jpg",
  },
  {
    order: 7,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija8.jpg",
  },
  {
    order: 8,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija9.jpg",
  },
  {
    order: 9,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija10.jpg",
  },
  {
    order: 10,
    title: "Slika prateća dekoracija.",
    src: "/images/webImages/prateca_dekoracija/prateca_dekoracija11.jpg",
  },
];

const dekoracija = [
  {
    order: 0,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija1.jpg",
  },
  {
    order: 1,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija2.jpg",
  },
  {
    order: 2,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija3.jpg",
  },
  {
    order: 3,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija4.jpg",
  },
  {
    order: 4,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija5.jpg",
  },
  {
    order: 5,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija6.jpg",
  },
  {
    order: 6,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija7.jpg",
  },
  {
    order: 7,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija8.jpg",
  },
  {
    order: 8,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija9.jpg",
  },
  {
    order: 9,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija10.jpg",
  },
  {
    order: 10,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija11.jpg",
  },
  {
    order: 11,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija12.jpg",
  },
  {
    order: 12,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija13.jpg",
  },
  {
    order: 13,
    title: "Slika dekoracija.",
    src: "/images/webImages/dekoracija/dekoracija14.jpg",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS zavjese (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       "order" INTEGER UNIQUE,
       title TEXT NOT NULL,
       src TEXT NOT NULL UNIQUE
    )
  `
).run();

db.prepare(
  `
     CREATE TABLE IF NOT EXISTS rolice_paneli (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         "order" INTEGER UNIQUE,
         title TEXT NOT NULL,
         src TEXT NOT NULL UNIQUE
      )
    `
).run();

db.prepare(
  `
     CREATE TABLE IF NOT EXISTS prateca_dekoracija (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         "order" INTEGER UNIQUE,
         title TEXT NOT NULL,
         src TEXT NOT NULL UNIQUE
      )
    `
).run();

db.prepare(
  `
     CREATE TABLE IF NOT EXISTS dekoracija (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         "order" INTEGER UNIQUE,
         title TEXT NOT NULL,
         src TEXT NOT NULL UNIQUE
      )
    `
).run();

async function initData() {
  // zavjese
  const stmtZavjese = db.prepare(`
      INSERT INTO zavjese VALUES (
         null,
         @order,
         @title,
         @src
      )
   `);

  for (const el of zavjese) {
    stmtZavjese.run(el);
  }

  // rolo i panelei
  const stmtRolice = db.prepare(`
    INSERT INTO rolice_paneli VALUES (
       null,
       @order,
       @title,
       @src
    )
 `);

  for (const el of rolice_paneli) {
    stmtRolice.run(el);
  }

  // dekoracija
  const stmtDekoracija = db.prepare(`
    INSERT INTO dekoracija VALUES (
       null,
       @order,
       @title,
       @src
    )
 `);

  for (const el of dekoracija) {
    stmtDekoracija.run(el);
  }

  // prateca dekoracija
  const stmtPrateca = db.prepare(`
    INSERT INTO prateca_dekoracija VALUES (
       null,
       @order,
       @title,
       @src
    )
 `);

  for (const el of prateca_dekoracija) {
    stmtPrateca.run(el);
  }
}

initData();
