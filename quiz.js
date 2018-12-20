//Script per il funzionamento del quiz

                var ans = new Array;
                var done = new Array;
                var stat = new Array;
                var score = 0;
                var count = 0;
                
                ans[1] = "a";
                ans[2] = "c";
                ans[3] = "c";
                ans[4] = "d";
                ans[5] = "b";
                ans[6] = "a";
                ans[7] = "c";
                ans[8] = "d";
                ans[9] = "a";
                ans[10] = "b";

                done[1] =0;
                done[2] =0;
                done[3] =0;
                done[4] =0;
                done[5] =0;
                done[6] =0;
                done[7] =0;
                done[8] =0;
                done[9] =0;
                done[10] =0;

                //AGGIUNGI PUNTEGGIO - Questa funzione permette di aggiungere un nuovo risultato a quelli precedentemente salvati in Local Storage */
                function inserisciPunteggio() {
                    var u = JSON.parse(localStorage.punteggi);
                    var nextpos = u.length;
                    var o = { p: score /* Cose da aggiungere(?) */ };
                    u[nextpos] = o;
                    localStorage.punteggi = JSON.stringify(u);
                    return true;
                }

                //Questa funzione è il cuore del quiz, calcola e determina il punteggio
                function Engine( question, answer ) {
                  if ( answer != ans[ question ] ) {
                      if ( ! done[ question ] ) {
                          done[ question ] = -1;
                          stat[ question ] = false;
                          count++;
                      }
                  } else {
                      if ( ! done[ question ] ) {
                          done[ question ] = -1;
                          stat[ question ] = true;
                          count++;
                          score++;
                      }
                      
                }
                
                if ( count == ans.length ) { ShowResult() }
                }

                //Chiamata dalla funzione precedente, questa funzione mostra un testo "personalizzato a seconda del punteggio conseguito"
                
                function ShowResult() {
                var htm = "Hai completato il quiz!<br>";      
                htm += "Il tuo punteggio è: " + score + " su 10 <br>";

                if (score <= 2){
                    htm +="<br><p>Hai molta strada da fare in ambito culinario. Non temere, provando varie ricette qui acquisirai più dimestichezza</p>";

                }
                if (score <= 5 && score > 2){
                    htm +="<br><p>Diciamo che non sei molto avvezzo a maneggiare utensili o cucinare per te, ma non sei del tutto inesperto. Continua e vedrai che inizierà a dare soddisfazioni</p>";
                
                }
                if (score <=7 && score>5){
                    htm +="<br><p>Sei in grado di cucinare un pasto decente, senza necessariamenente abbandonarti a eccessivi virtuosismi culinari, ma abbastanza da riuscire a non avvelenarti. Inizia a sperimentare con i sapori e vedrai che migliorerai sempre di più!</p>";

                }
                if (score <= 9 && score>7){
                    htm +="<br><p>Magari ti manca qualche conoscenza, ma improvvisare ai fornelli non ti spaventa e hai la situazione sotto controllo quando sei ai fornelli, ovvero il più delle volte in quanto cuoco delegato della situazione. Ottimo lavoro!</p>";

                }
                if (score == 10){
                    htm += "<br><p>Complimenti! Non hai bisogno di questo sito per imparare a cucinare.<br> La cucina è il tuo ambiente e sei a tuo agio nel mescolare spezie e sapori di vario genere. Se sei qui è sicuramente perchè ti servono ricette veloci, non facili</p>";
                }
                
                
                
                document.getElementById( 'risultato' ).innerHTML = htm;
                    inserisciPunteggio();
                }