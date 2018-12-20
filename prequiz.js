/* 
                STAMPA STORAGE- Questa funzione stampa tutti i risultati salvati nello storage */

                function stampaStorageTabella(){
                    if (typeof(localStorage.punteggi) == "undefined" || JSON.parse(localStorage.punteggi).length == 0) {
                        alert("Non ci sono risultati da stampare");
                        return false;
                    }
                    var u = JSON.parse(localStorage.punteggi);
                    var l = u.length;
                    var s = new String("<h3>Ultimi Punteggi:</h3>");
                    s +="<table border=1><tr><th>Punteggi Recenti</th></tr>";
                    for (i=l-1;i>=0;i--) {
                        s += "<tr><td>"+u[i].p+"</td></tr>";
                    }
                    s += "</table>";
                    document.getElementById("risultato").innerHTML = s;
                    return true;
                }

                /* 
                SVUOTA STORAGE- Questa funzione cancella tutti i risultati salvati nello storage */

                function clearStoragePunteggi(){
                    if (typeof(localStorage.punteggi) == "undefined" || JSON.parse(localStorage.punteggi).length == 0) {
                        alert("Non ci sono risultati salvati");
                        return false;
                    }
                    localStorage.punteggi="[]";
                }
                   
                /* 
                CREA STORAGE -  Questa funzione è da chiamare appena il documento è pronto. 
                                Controlla che non ci sia un Local Storage già presente e in caso ne inizializza uno nuovo */

                function inizializzaStoragePunteggi(){
                    if (typeof(localStorage.punteggi) == "undefined") {
                    localStorage.punteggi="[]";
                    }
                }