//* Libreria dedicata alla gestione automatizzata dei temi utente attraverso a perfers-color-scheme e preferenze utente
//todo: Picking tema e accento da impostazioni e salvataggio e sincronizzazione con cloud e localStorage per bypassare limitazioni dovute ai Cookies
//todo: Gestione sensata colori con oggetti chiaramente nominati e facilmente gestibili e sostituibili

export const t_Light = {
   background: "#ffffff",
   text: "#000000",
   secondary: "#d6d6d6",
   accent: [
      "#aeefff", //azzurro pastello
      "#ffb871", //arancio pastello
      "#eac6f1", //rosa pastello
      "#ad2e2e", //rosso pastello
      "#a9ffb8", //verde pastello
      "#fff27a"  //giallo pastello
   ]
}

export const t_Dark = {
   background: "#292933",
   text: "#ffffff",
   secondary: "#323236",
   accent: [ //todo: impostare colori solidi per dark e midnight
      "#0ea9cf", //azzurro pastello
      "#d86c00", //arancio pastello
      "#c70bec", //rosa pastello
      "#9b1616", //rosso pastello
      "#129728", //verde pastello
      "#e6bb00"  //giallo pastello
   ]
}

export const t_Midnight = {
   background: "#000000",
   text: "#ffffff",
   secondary: "#242429",
   accent: [ //todo: impostare colori solidi per dark e midnight
      "#0ea9cf", //azzurro pastello
      "#d86c00", //arancio pastello
      "#c70bec", //rosa pastello
      "#9b1616", //rosso pastello
      "#129728", //verde pastello
      "#e6bb00"  //giallo pastello
   ]
}

const setRootTheme = (bkg, snd, txt, acc) => {
   document.documentElement.style.setProperty("--bkg", bkg);
   document.documentElement.style.setProperty("--secondary", snd);
   document.documentElement.style.setProperty("--text", txt);
   document.documentElement.style.setProperty("--accent", acc);
}

export const setThemePropriety = (propriety, value) => {
   document.documentElement.style.setProperty(propriety, value);
   console.log(propriety + "\n" + value)
}
export const getTheme = {
   propriety: (value) => {
      document.documentElement.style.getPropertyValue("--" + value);
   },
   scheme: () => {
      switch(document.documentElement.style.getPropertyValue("--bkg")){
         case("#ffffff"):
            return 0;
         case("#292933"):
            return 1;
         case("#000000"):
            return 2;
         default:
            return undefined;
      }
   },
   localTheme: () => {
      if(!localStorage.getItem("theme")) return 0;
      return Math.floor(localStorage.getItem("theme"));
   },
   accent: () => {
      if(!localStorage.getItem("accent")) return 1;
      return Math.floor(localStorage.getItem("accent"));
   }
}

export const setTheme = (scheme, accent) => {
   setRootTheme(scheme.background, scheme.secondary, scheme.text, scheme.accent[accent]);
   localStorage.setItem("theme", getTheme.scheme());
   localStorage.setItem("accent", accent);
}

export const setAccent = (accent) => {
   let tmp = getTheme.localTheme();
   console.log(1);
   switch(tmp){
      case 0:
         setTheme(t_Light, accent);
         return;
      case 1:
         setTheme(t_Dark, accent);
         return;
      case 2:
         setTheme(t_Midnight, accent);
         return;
      default:
         return;
   }
}