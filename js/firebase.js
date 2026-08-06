import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getFunctions } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-functions.js";

const fleetConfig = {
  apiKey: "AIzaSyATRxOi-7i57Ks0g3eaq-CBPHij-1qxD84",
  authDomain: "tp-fuhrparkmanagement.firebaseapp.com",
  projectId: "tp-fuhrparkmanagement",
  storageBucket: "tp-fuhrparkmanagement.firebasestorage.app",
  messagingSenderId: "450043289471",
  appId: "1:450043289471:web:dca7fb4b1d959967ed044a",
  measurementId: "G-0J9YXHCEMX",
};

// Zentrales Blaze-Projekt für Cloud Functions und Dateiablage.
const blazeConfig = {
  apiKey: "AIzaSyCcHI5sGR7sFwrWRpo2uQ3Plm0HpTvqr30",
  authDomain: "kalkpro-4cc29.firebaseapp.com",
  projectId: "kalkpro-4cc29",
  storageBucket: "kalkpro-4cc29.firebasestorage.app",
  messagingSenderId: "185447466021",
  appId: "1:185447466021:web:e0d0720fae971b4ab52bcc",
  measurementId: "G-V4SF92V16K",
};

const fleetApp = initializeApp(fleetConfig);
const fleetAuth = getAuth(fleetApp);
const fleetDb = getFirestore(fleetApp);
const blazeApp = initializeApp(blazeConfig, "kalkproBlazeFuhrpark");
const blazeFunctions = getFunctions(blazeApp, "europe-west1");

export { fleetApp, fleetAuth, fleetDb, blazeApp, blazeFunctions };
