window.onload = function browserchecker(){
    var sBrowser, sUsrAg = navigator.userAgent;
    
        if(sUsrAg.indexOf("Firefox")> -1){
            sBrowser = "Mozilla Firefox";
        }
        else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
            sBrowser = "Samsung Internet";
    
        } 
        else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
            sBrowser = "Opera";
        } 
        else if (sUsrAg.indexOf("Trident") > -1) {
            sBrowser = "Microsoft Internet Explorer";
        }
        else if (sUsrAg.indexOf("Edge") > -1) {
            sBrowser = "Microsoft Edge";
        }
        else if (sUsrAg.indexOf("Chrome") > -1) {
            sBrowser = "Google Chrome or Chromium";
        }
        else if (sUsrAg.indexOf("Safari") > -1) {
            sBrowser = "Apple Safari";
            
        } else {
            sBrowser = "okänd";
        }
        document.getElementById("browserheader").innerHTML = "Du använder " + sBrowser;
        //Functions taken from Mozillas website 
        //I'm too lazy to not copy and paste a working function
        //Changed smaller bits for specific use and translation
   
}


