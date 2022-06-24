//* This JS library exports useful values, states and functions
//* Please document all changes made to any value and announce any updates
//* Please add @return and @params states to new functions to ease up development

//* Do whatever you want with this spaghetti, just add my github somewhere visible and say thanks for my work :)


//* ///////////////////////////
//* Device and user states   //
//* ///////////////////////////
/**
 * @return {deviceType.deviceString} String, Returns the User Agent string
 * @return {deviceType.isMobile} Boolean
 */
export const deviceType = () => {
   let tmpDevType = {}
   tmpDevType.deviceString = navigator.userAgent;
   tmpDevType.isMobile = Boolean(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
   return tmpDevType;
};

export const settings = {
   accessibility: {
      useReducedMotion: [false],
      useHighContrast: [false],
      useDyslexiaFont: [false],
      useAccessibilityMenu: [false],
      useTextInIcons: [false],
      fontSize: [false],
   }
}

//* ///////////////////////////
//* Useful functions         //
//* ///////////////////////////

export const setAccessibilityParameter = (param) => {
   if(param === "menu"){
      settings.accessibility.useAccessibilityMenu[0] = !settings.accessibility.useAccessibilityMenu[0]
   }
   alert("Still broken not working")
}



export const setPageTitle = (title) => {
   document.title = title;
}

export const goBack = () => {
   window.history.back()
}

export const wait = (timeMS) => {
   return new Promise(resolve => setTimeout(resolve, timeMS));
}

export const currentPos = () => {
   let tmp = window.location.pathname.split("/");
   if(tmp.indexOf("rassegna")>-1) return 2;
   if(tmp.indexOf("proiezione")>-1) return 1;
   if(tmp.indexOf("info")>-1) return 3;
   else return 0;  
}

//* ///////////////////////////
//* Verification functions   //
//* ///////////////////////////

export const emailVerify = (email) => {
   let error = {message: null, code: null};
   if(! /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)){
      error.message = "L'email non è valida"
      error.code = 1;
   }
   return error;
}

export const passwordVerify = (password) => {

   return;
}



//* ///////////////////////////
//* Development states       //
//* ///////////////////////////

export const isDeveloping = Boolean(window.location.hostname === "localhost");
