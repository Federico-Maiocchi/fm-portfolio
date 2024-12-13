import { createSlice } from "@reduxjs/toolkit";

import spoti from "../../imgProjects/Spotiify.jpg";
import discord from "../../imgProjects/Discord.jpg";
import whats from "../../imgProjects/Whats Web.jpg";
import zala from "../../imgProjects/Zalando.jpg";
import travel1 from "../../imgProjects/travel-app-img/travel-app1.png";
import travel2 from "../../imgProjects/travel-app-img/travel-app2.png";
import travel3 from "../../imgProjects/travel-app-img/travel-app3.png";
import travel4 from "../../imgProjects/travel-app-img/travel-app4.png";
import travel5 from "../../imgProjects/travel-app-img/travel-app5.png";
import travel6 from "../../imgProjects/travel-app-img/travel-app6.png";
import travel7 from "../../imgProjects/travel-app-img/travel-app7.png";
import expense1 from "../../imgProjects/expense-app-img/expense-app1.png";
import expense2 from "../../imgProjects/expense-app-img/expense-app2.png";
import expense3 from "../../imgProjects/expense-app-img/expense-app3.png";
import expense4 from "../../imgProjects/expense-app-img/expense-app4.png";
import expense5 from "../../imgProjects/expense-app-img/expense-app5.png";
import expense6 from "../../imgProjects/expense-app-img/expense-app6.png";
import expense7 from "../../imgProjects/expense-app-img/expense-app7.png";
import expenseReact1 from "../../imgProjects/expense-app-react-img/expense-app-react1.png";
import expenseReact2 from "../../imgProjects/expense-app-react-img/expense-app-react2.png";
import expenseReact3 from "../../imgProjects/expense-app-react-img/expense-app-react3.png";
import expenseReact4 from "../../imgProjects/expense-app-react-img/expense-app-react4.png";
import expenseReact5 from "../../imgProjects/expense-app-react-img/expense-app-react5.png";
import expenseReact6 from "../../imgProjects/expense-app-react-img/expense-app-react6.png";
import expenseReact7 from "../../imgProjects/expense-app-react-img/expense-app-react7.png";
import bDoctors1 from "../../imgProjects/BDoctors-img/bDoctors1.png";
import bDoctors2 from "../../imgProjects/BDoctors-img/bDoctors2.png";
import bDoctors3 from "../../imgProjects/BDoctors-img/bDoctors3.png";
import bDoctors4 from "../../imgProjects/BDoctors-img/bDoctors4.png";
import bDoctors5 from "../../imgProjects/BDoctors-img/bDoctors5.png";
import bDoctors6 from "../../imgProjects/BDoctors-img/bDoctors6.png";
import bDoctors7 from "../../imgProjects/BDoctors-img/bDoctors7.png";
import bDoctors8 from "../../imgProjects/BDoctors-img/bDoctors8.png";
import bDoctors9 from "../../imgProjects/BDoctors-img/bDoctors9.png";
import bDoctors10 from "../../imgProjects/BDoctors-img/bDoctors10.png";
import bDoctors11 from "../../imgProjects/BDoctors-img/bDoctors11.png";
import bDoctors12 from "../../imgProjects/BDoctors-img/bDoctors12.png";
import bDoctors13 from "../../imgProjects/BDoctors-img/bDoctors13.png";
import bDoctors14 from "../../imgProjects/BDoctors-img/bDoctors14.png";
import bDoctors15 from "../../imgProjects/BDoctors-img/bDoctors15.png";
import bDoctors16 from "../../imgProjects/BDoctors-img/bDoctors16.png";
import bDoctors17 from "../../imgProjects/BDoctors-img/bDoctors17.png";
import bDoctors18 from "../../imgProjects/BDoctors-img/bDoctors18.png";
import bDoctors19 from "../../imgProjects/BDoctors-img/bDoctors19.png";
import bDoctors20 from "../../imgProjects/BDoctors-img/bDoctors20.png";
import bDoctors21 from "../../imgProjects/BDoctors-img/bDoctors21.png";
import bDoctors22 from "../../imgProjects/BDoctors-img/bDoctors22.png";
import bDoctors23 from "../../imgProjects/BDoctors-img/bDoctors23.png";
import bDoctors24 from "../../imgProjects/BDoctors-img/bDoctors24.png";
import bDoctors25 from "../../imgProjects/BDoctors-img/bDoctors25.png";
import bDoctors26 from "../../imgProjects/BDoctors-img/bDoctors26.png";

// Funzione per generare lo slug base
const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

// Funzione per generare uno slug unico
const generateUniqueSlug = (title, existingSlugs) => {
  let baseSlug = generateSlug(title);
  let uniqueSlug = baseSlug;
  let counter = 1;

  // Se lo slug esiste già, aggiungiamo un suffisso numerico
  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
};

const initialState = {
  //valori
  value: [
    {
      id: 0,
      title: "Discord Replica",
      slug: generateSlug("Discord Replica"), // slug
      description:
        "Il mio primo progetto di sviluppo frontend, in cui ho replicato la pagina principale di Discord. Questo progetto mi ha introdotto alle basi di HTML e CSS, con un focus sulla strutturazione degli elementi e l'applicazione degli stili.",
      image: [discord],
      technologies: ["Html", "Css"],
      isVisited: false,
    },
    {
      id: 1,
      title: "Spotify Replica",
      slug: generateSlug("Spotify Replica"), // slug
      description:
        "Progetto di sviluppo frontend in cui ho replicato il layout della piattaforma Spotify, focalizzandomi sull'organizzazione e la struttura principale di una web app. Ho progettato una sidebar navigabile e un'area principale per il contenuto, riproducendo la pagina delle playlist con i brani associati a diverse playlist dell'utente.",
      image: [spoti],
      technologies: ["Html", "Css"],
      isVisited: true,
    },
    {
      id: 2,
      title: "WhatsApp Web Replica",
      slug: generateSlug("WhatsApp Web Replica"), // slug
      description:
        "Ho replicato l'interfaccia e alcune funzionalità di WhatsApp Web dal punto di vista frontend, concentrandomi sull'implementazione di una finta chat interattiva. Il progetto include la creazione di una lista di utenti con conversazioni attive, dotata di una barra di ricerca per filtrare dinamicamente i nomi. Selezionando un utente, viene mostrata la chat corrispondente, con la possibilità di inviare messaggi tramite un input. I messaggi vengono visualizzati nel corpo della chat e, grazie a JavaScript, il sistema genera automaticamente una risposta preimpostata relativa all'utente selezionato.",
      image: [whats],
      technologies: ["Html", "Css", "Javascript"],
      isVisited: true,
    },
    {
      id: 3,
      title: "Zalando Replica",
      slug: generateSlug("Zalando Replica"), // slug
      description:
        "Ho replicato la parte frontend del sito Zalando utilizzando il framework Vue.js, suddividendo le diverse sezioni del sito vetrina in componenti modulari e passando i dati tra di essi tramite props. Per lo stile, ho utilizzato il pre-processore Sass, che mi ha permesso di ottimizzare il codice CSS con funzionalità avanzate come variabili e mixin. Inoltre, ho integrato chiamate API utilizzando Axios, per recuperare i dati dinamici e popolare le sezioni del sito con contenuti realistici.",
      image: [zala],
      technologies: ["Html", "Css", "Sass", "Vue.Js", "Javascript", "Axios"],
      isVisited: false,
    },
    {
      id: 4,
      title: "BDoctors",
      slug: generateSlug("BDoctors"), // slug
      description:
        "BDoctors è una web app progettata per facilitare la comunicazione tra pazienti e dottori, rendendo più semplice la ricerca e la gestione delle interazioni. La piattaforma è suddivisa in due parti principali: il front-end, pensato per i pazienti, e il back-end, dedicato ai medici. Nel front-end, i pazienti possono navigare attraverso una homepage che presenta diverse specializzazioni mediche e una classifica dei dottori in evidenza. È possibile accedere alla sezione 'I nostri medici', dove vengono elencati tutti i professionisti registrati, con la possibilità di filtrare la ricerca in base a criteri specifici. I medici sponsorizzati appaiono in primo piano, mentre gli altri seguono in ordine. Ogni medico ha un profilo dettagliato, che include informazioni complete, la possibilità di inviare messaggi diretti, leggere o lasciare recensioni. Nel back-end, i dottori possono creare e gestire il proprio profilo, aggiungendo dettagli personali come nome, cognome, luogo di lavoro e specializzazioni. Una dashboard consente loro di visualizzare e modificare i propri dati, oltre a consultare rapidamente i messaggi e le recensioni più recenti. La piattaforma include anche sezioni dedicate a statistiche, per analizzare messaggi e recensioni filtrandoli per anno, e una pagina abbonamenti, dove i medici possono scegliere tra tre piani diversi per aumentare la loro visibilità nella piattaforma.",
      image: [
        bDoctors1,
        bDoctors2,
        bDoctors3,
        bDoctors4,
        bDoctors5,
        bDoctors6,
        bDoctors7,
        bDoctors8,
        bDoctors9,
        bDoctors10,
        bDoctors11,
        bDoctors12,
        bDoctors13,
        bDoctors14,
        bDoctors15,
        bDoctors16,
        bDoctors17,
        bDoctors18,
        bDoctors19,
        bDoctors20,
        bDoctors21,
        bDoctors22,
        bDoctors23,
        bDoctors24,
        bDoctors25,
        bDoctors26,
      ],
      technologies: [
        "Html",
        "Css",
        "Javascript",
        "Sass",
        "Bootstrap",
        "Vue.Js",
        "Axios",
        "PHP",
        "Laravel",
      ],
      isVisited: false,
    },
    {
      id: 5,
      title: "Travel App",
      slug: generateSlug("Travel App"), // slug
      description:
        "Travel-App è una web app per la gestione di viaggi e tappe, sviluppata con .NET e ASP.NET MVC utilizzando il linguaggio C#. L’app consente agli utenti di creare e gestire viaggi, che rappresentano l'intervallo di tempo dall'inizio alla fine di un percorso, e tappe, che indicano i diversi luoghi visitati durante il viaggio. Ogni tappa include dettagli come nome, immagine, stato di visita e un voto valutativo. L’intero sistema è basato su operazioni CRUD (Create, Read, Update, Delete), offrendo agli utenti la possibilità di creare, modificare, visualizzare in dettaglio ed eliminare sia i viaggi che le tappe. Grazie all'integrazione con Leaflet, le tappe possono essere visualizzate direttamente su una mappa interattiva. Per il layout, è stata utilizzata la libreria AdminLTE 3, che garantisce un design moderno e responsivo, ideale per web app.",
      image: [travel1, travel2, travel3, travel4, travel5, travel6, travel7],
      technologies: [
        "Html",
        "Css",
        "Javascript",
        "Bootstrap",
        "C#",
        ".Net",
        "Asp.MVC",
        "AdminLTE 3",
        "Leaflet",
      ],
      isVisited: false,
    },
    {
      id: 6,
      title: "Expense App",
      slug: generateSlug("Expense App"), // slug
      description:
        "Expense-App è una web app per la gestione delle transazioni personali, sviluppata con .NET e ASP.NET MVC, utilizzando la libreria AdminLTE 3 per un layout moderno e responsivo. L'app consente agli utenti di tenere traccia delle proprie spese e redditi attraverso la creazione e gestione di categorie e transazioni. Le categorie includono dettagli come nome, icona e tipo (reddito o spesa), mentre le transazioni sono definite da data, importo, nota e tipo, derivato dalla categoria associata. Entrambi gli elementi sono completamente gestiti tramite operazioni CRUD (Create, Read, Update, Delete). La dashboard offre una visualizzazione grafica interattiva delle statistiche delle categorie e delle transazioni effettuate negli ultimi sette giorni, permettendo un monitoraggio chiaro e immediato delle finanze personali.",
      image: [
        expense1,
        expense2,
        expense3,
        expense4,
        expense5,
        expense6,
        expense7,
      ],
      technologies: [
        "Html",
        "Css",
        "Bootstrap",
        "C#",
        ".Net",
        "Asp.MVC",
        "AdminLTE 3",
      ],
      isVisited: false,
    },
    {
      id: 7,
      title: "Expense App (Front End)",
      slug: generateSlug("Expense App (Front End)"), // slug
      description:
        "Expense-App (React.js) è un front-end sviluppato in React e collegato a un back-end realizzato in .NET tramite chiamate API REST. L’app presenta un layout personalizzato per web app, caratterizzato da una sidebar navigabile e un corpo centrale dedicato alla visualizzazione dei dati delle varie viste. Per lo stile, ho utilizzato il pre-processore Sass, creando un design scalabile e ottimizzato. Ogni vista è composta da componenti React personalizzati, progettati per essere modulari e riutilizzabili grazie all’utilizzo di props. Ho sviluppato hook custom per migliorare la leggibilità e la pulizia del codice, oltre a implementare una gestione delle rotte chiara ed efficace, rendendo la navigazione intuitiva per l’utente. La gestione dello stato globale e delle chiamate API è stata affidata a Redux, assicurando una sincronizzazione fluida dei dati tra front-end e back-end e migliorando la reattività dell’applicazione.",
      image: [
        expenseReact1,
        expenseReact2,
        expenseReact3,
        expenseReact4,
        expenseReact5,
        expenseReact6,
        expenseReact7,
      ],
      technologies: ["Html", "Css", "Javascript", "Sass", "React.Js", "Redux"],
      isVisited: false,
    },
  ],
};

export const projectsSlice = createSlice({
  //name
  name: "projects",
  //state
  initialState,
  reducers: {
    add: (state, action) => {
      // Otteniamo tutti gli slug esistenti per controllare i duplicati
      const existingSlugs = state.value.map((project) => project.slug);

      // Creiamo il nuovo progetto con uno slug unico
      const newProject = {
        ...action.payload,
        slug: generateUniqueSlug(action.payload.title, existingSlugs),
      };

      // Aggiungiamo il nuovo progetto alla lista
      state.value.push(newProject);
    },
  },
});

export const { add } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
