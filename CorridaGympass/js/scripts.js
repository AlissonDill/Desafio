//variavel global
var contPiloto1Distancia = 772;
var contPiloto2Distancia = 772;
var contPiloto3Distancia = 772;
var contPiloto4Distancia = 772;
var contPiloto5Distancia = 772;

//quantidade de random ate completar uma volta
var contTempoPiloto1 = 0;
var contTempoPiloto2 = 0;
var contTempoPiloto3 = 0;
var contTempoPiloto4 = 0;
var contTempoPiloto5 = 0;

//quantidade de voltas de cada piloto
var numeroVoltaPiloto1 = 0;
var numeroVoltaPiloto2 = 0;
var numeroVoltaPiloto3 = 0;
var numeroVoltaPiloto4 = 0;
var numeroVoltaPiloto5 = 0;

//Salvar o melhor tempo de volta de cada piloto
var melhorTempoDeVolta1 = 0;
var melhorTempoDeVolta2 = 0;
var melhorTempoDeVolta3 = 0;
var melhorTempoDeVolta4 = 0;
var melhorTempoDeVolta5 = 0;

//Tempo total de cada piloto
var somaTempoTotal1 = "00:00:00.000";
var somaTempoTotal2 = "00:00:00.000";
var somaTempoTotal3 = "00:00:00.000";
var somaTempoTotal4 = "00:00:00.000";
var somaTempoTotal5 = "00:00:00.000";

//calcular as horas para o relatorio - arquivo log
var horasPiloto1 = "12:00:00.000";
var horasPiloto2 = "12:00:00.000";
var horasPiloto3 = "12:00:00.000";
var horasPiloto4 = "12:00:00.000";
var horasPiloto5 = "12:00:00.000";

//Velocidade Media dos Pilotos
var velMediaGeralPiloto1 = 0;
var velMediaGeralPiloto2 = 0;
var velMediaGeralPiloto3 = 0;
var velMediaGeralPiloto4 = 0;
var velMediaGeralPiloto5 = 0;

//Historico dos titulos [ primeiro lugar, segundo lugar, terceiro lugar]
var vitoriasPiloto1 = [0,0,0]
var vitoriasPiloto2 = [0,0,0]
var vitoriasPiloto3 = [0,0,0]
var vitoriasPiloto4 = [0,0,0]
var vitoriasPiloto5 = [0,0,0]

var pontosPiloto1 = 0;
var pontosPiloto2 = 0;
var pontosPiloto3 = 0;
var pontosPiloto4 = 0;
var pontosPiloto5 = 0;

var flgRegistrado1 = false;
var flgRegistrado2 = false;
var flgRegistrado3 = false;
var flgRegistrado4 = false;
var flgRegistrado5 = false;

//contador de classificação (primeiro, segundo e terceiro)
var contClassificacao = 0;

//linha para o relatorio - arquivo log
var linha = 1;

setTimeout(function() {
    var pista = document.querySelector('.pista');
    pista.className += ' largada';
}, 1000);


function Mudarestado(el) {

   var display = document.getElementById(el).style.display;
   
   document.getElementById("cadastrar-piloto").style.display = 'none';
   document.getElementById("inicio-corrida").style.display = 'none';
   document.getElementById("historico-corrida").style.display = 'none';
   document.getElementById("classificacao-corrida").style.display = 'none';
   document.getElementById("titulos-pilotos").style.display = 'none';
   document.getElementById("home-introducao").style.display = 'none';
   
   if(display == "none")
      document.getElementById(el).style.display = 'block';
   else
      document.getElementById("home-introducao").style.display = 'block';
   
   if(el == "titulos-pilotos"){
      listaDeTitulos();
   }
   
}

function registroSorte(piloto, distancia, numSorte, numVoltas, contTempo) {
   var tempo = "00:00:000";
   var flgGravar = false;
   //segundo é só dois digitos
   if(numSorte == 100){
      numSorte = 0;
   }
   
   if( ((distancia <= 543) && (numVoltas == 0)) || 
       ((distancia <= 362) && (numVoltas == 1)) || 
       ((distancia <= 181) && (numVoltas == 2)) || 
       ((distancia <= 35) && (numVoltas == 3)) ){
      
      /*
      if(numVoltas == 0){
         txtSegundos = 543 - distancia;
      }else if (numVoltas == 1){
         txtSegundos = 362 - distancia;
      }else if (numVoltas == 2){
         txtSegundos = 181 - distancia;
      }else if (numVoltas == 3){
         txtSegundos = 35 - distancia;
      }
      */
      
      contMinutos = 1;
      txtSegundos = contTempo * 5;
      
      while(txtSegundos > 59) {
         txtSegundos = txtSegundos - 60;
         contMinutos++;
      }
      now = new Date();
      
      tempo = String(contMinutos).padStart(2, '0') + ":" + String(txtSegundos).padStart(2, '0') + "." + String(now.getMilliseconds()).padStart(3, '0');
      
      flgGravar = true;
      
      //exemplo do formato
      txtTempoHora = "12:00:00.000";
      
      //console.log(piloto);
      //console.log("Numero de Voltas: " + numVoltas);
      //console.log(tempo);
      
      if(piloto == "piloto 1"){
         nomePiloto = document.getElementById("numeroPiloto1").value + " - " + document.getElementById("nomePiloto1").value;
         numeroVoltaPiloto1 = numVoltas + 1;
         txtTemp = "00:" + tempo;
         
         if (melhorTempoDeVolta1 == 0){
            melhorTempoDeVolta1 = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
         }else{
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            if (mTempo < melhorTempoDeVolta1){
               melhorTempoDeVolta1 = parseInt(mTempo);
            }
         }
         
         mDistancia = 181; //distancia de cada volta
         velMedia = parseFloat((mDistancia / (mTempo/100000))).toFixed(2);
         
         somaTempoTotal1 = somaHoraCompleta(somaTempoTotal1,txtTemp);
         horasPiloto1 = somaHoraCompleta(horasPiloto1,txtTemp);
         txtTempoHora = horasPiloto1;
         contTempoPiloto1 = 0;
         
      }else if (piloto == "piloto 2"){
         nomePiloto = document.getElementById("numeroPiloto2").value + " - " + document.getElementById("nomePiloto2").value;
         numeroVoltaPiloto2 = numVoltas + 1;
         txtTemp = "00:" + tempo;
         
         if (melhorTempoDeVolta2 == 0){
            melhorTempoDeVolta2 = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
         }else{
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            if (mTempo < melhorTempoDeVolta2){
               melhorTempoDeVolta2 = mTempo;
            }
         }
         
         mDistancia = 181; //distancia de cada volta
         velMedia = parseFloat((mDistancia / (mTempo/100000))).toFixed(2);
         
         somaTempoTotal2 = somaHoraCompleta(somaTempoTotal2,txtTemp);
         horasPiloto2 = somaHoraCompleta(horasPiloto2,txtTemp);
         txtTempoHora = horasPiloto2;
         contTempoPiloto2 = 0;
         
      }else if (piloto == "piloto 3"){
         nomePiloto = document.getElementById("numeroPiloto3").value + " - " + document.getElementById("nomePiloto3").value;
         numeroVoltaPiloto3 = numVoltas + 1;
         txtTemp = "00:" + tempo;
         
         if (melhorTempoDeVolta3 == 0){
            melhorTempoDeVolta3 = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
         }else{
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            if (mTempo < melhorTempoDeVolta3){
               melhorTempoDeVolta3 = mTempo;
            }
         }
         
         mDistancia = 181; //distancia de cada volta
         velMedia = parseFloat((mDistancia / (mTempo/100000))).toFixed(2);
         
         somaTempoTotal3 = somaHoraCompleta(somaTempoTotal3,txtTemp);
         horasPiloto3 = somaHoraCompleta(horasPiloto3,txtTemp);
         txtTempoHora = horasPiloto3;
         contTempoPiloto3 = 0;
         
      }else if (piloto == "piloto 4"){
         nomePiloto = document.getElementById("numeroPiloto4").value + " - " + document.getElementById("nomePiloto4").value;
         numeroVoltaPiloto4 = numVoltas + 1;
         txtTemp = "00:" + tempo;
         
         if (melhorTempoDeVolta4 == 0){
            melhorTempoDeVolta4 = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
         }else{
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            if (mTempo < melhorTempoDeVolta4){
               melhorTempoDeVolta4 = mTempo;
            }
         }
         
         mDistancia = 181; //distancia de cada volta
         velMedia = parseFloat((mDistancia / (mTempo/100000))).toFixed(2);
         
         somaTempoTotal4 = somaHoraCompleta(somaTempoTotal4,txtTemp);
         horasPiloto4 = somaHoraCompleta(horasPiloto4,txtTemp);
         txtTempoHora = horasPiloto4;
         contTempoPiloto4 = 0;
         
      }else if (piloto == "piloto 5"){
         nomePiloto = document.getElementById("numeroPiloto5").value + " - " + document.getElementById("nomePiloto5").value;
         numeroVoltaPiloto5 = numVoltas + 1;
         txtTemp = "00:" + tempo;
         
         if (melhorTempoDeVolta5 == 0){
            melhorTempoDeVolta5 = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
         }else{
            mTempo = parseInt(txtTemp.replace(".","").replace(":","").replace(":",""));
            if (mTempo < melhorTempoDeVolta5){
               melhorTempoDeVolta5 = mTempo;
            }
         }
         
         mDistancia = 181; //distancia de cada volta
         velMedia = parseFloat((mDistancia / (mTempo/100000))).toFixed(2);
         
         somaTempoTotal5 = somaHoraCompleta(somaTempoTotal5,txtTemp);
         horasPiloto5 = somaHoraCompleta(horasPiloto5,txtTemp);
         txtTempoHora = horasPiloto5;
         contTempoPiloto5 = 0;
         
      }
   }
   
   if (flgGravar){
      
      campoName1 = "linha" + linha;
      campoName2 = "hora" + linha;
      campoName3 = "piloto" + linha;
      campoName4 = "volta" + linha;
      campoName5 = "tempo" + linha;
      campoName6 = "media" + linha;
      txtNumeroVoltas = numVoltas + 1;
      
      document.getElementById(campoName1).style.display = 'table-row';
      document.getElementById(campoName2).innerHTML = txtTempoHora;
      document.getElementById(campoName3).innerHTML = nomePiloto;
      document.getElementById(campoName4).innerHTML = txtNumeroVoltas;
      document.getElementById(campoName5).innerHTML = tempo;
      document.getElementById(campoName6).innerHTML = velMedia;
      
      
      //========================================================================================== 
      //tabela melhor tempo de volta de cada piloto
      //==========================================================================================
      var arrayMelhorVolta = [];
      
      arrayMelhorVolta.push(melhorTempoDeVolta1 + 0.1); 
      arrayMelhorVolta.push(melhorTempoDeVolta2 + 0.2);
      arrayMelhorVolta.push(melhorTempoDeVolta3 + 0.3);
      arrayMelhorVolta.push(melhorTempoDeVolta4 + 0.4);
      arrayMelhorVolta.push(melhorTempoDeVolta5 + 0.5);
      
      arrayMelhorVolta.sort();
      
      //o piloto que tá na frente é o primeiro pra fazer o registro, assim a lista fica certo
      for (x = 0; x < arrayMelhorVolta.length; x++) {
         
         cp1 = "nomeDoPiloto" + (x+1);
         cp2 = "tempoDeVolta" + (x+1);
         
         if(arrayMelhorVolta[x] == (melhorTempoDeVolta1 + 0.1) ){
            nomePiloto = document.getElementById("numeroPiloto1").value + " - " + document.getElementById("nomePiloto1").value;
            tp = melhorTempoDeVolta1;
            
         }else if(arrayMelhorVolta[x] == (melhorTempoDeVolta2 + 0.2) ){
            nomePiloto = document.getElementById("numeroPiloto2").value + " - " + document.getElementById("nomePiloto2").value;
            tp = melhorTempoDeVolta2;
            
         }else if(arrayMelhorVolta[x] == (melhorTempoDeVolta3 + 0.3) ){
            nomePiloto = document.getElementById("numeroPiloto3").value + " - " + document.getElementById("nomePiloto3").value;
            tp = melhorTempoDeVolta3;
            
         }else if(arrayMelhorVolta[x] == (melhorTempoDeVolta4 + 0.4) ){
            nomePiloto = document.getElementById("numeroPiloto4").value + " - " + document.getElementById("nomePiloto4").value;
            tp = melhorTempoDeVolta4;
            
         }else if(arrayMelhorVolta[x] == (melhorTempoDeVolta5 + 0.5) ){
            nomePiloto = document.getElementById("numeroPiloto5").value + " - " + document.getElementById("nomePiloto5").value;
            tp = melhorTempoDeVolta5;
            
         }
         
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = fomatacao_minuto(tp.toString());
         
      }
      
      //==========================================================================================
      //tabela de classificação geral
      //==========================================================================================
      var arrayClassificacaoGeral = [];
      
      cg1 = parseInt(somaTempoTotal1.replace(".","").replace(":","").replace(":",""));
      cg2 = parseInt(somaTempoTotal2.replace(".","").replace(":","").replace(":",""));
      cg3 = parseInt(somaTempoTotal3.replace(".","").replace(":","").replace(":",""));
      cg4 = parseInt(somaTempoTotal4.replace(".","").replace(":","").replace(":",""));
      cg5 = parseInt(somaTempoTotal5.replace(".","").replace(":","").replace(":",""));
      
      arrayClassificacaoGeral.push(cg1 + 0.1); 
      arrayClassificacaoGeral.push(cg2 + 0.2);
      arrayClassificacaoGeral.push(cg3 + 0.3);
      arrayClassificacaoGeral.push(cg4 + 0.4);
      arrayClassificacaoGeral.push(cg5 + 0.5);
      
      arrayClassificacaoGeral.sort();
      
      var arrayVelocidadeMedia = [];
      
      //o piloto que tá na frente é o primeiro pra fazer o registro, assim a lista fica certo
      for (x = 0; x < arrayClassificacaoGeral.length; x++) {
         
         cp1 = "nomeDoPilotoVeloc" + (x+1);
         cp2 = "idTempoGeral" + (x+1);
         cp3 = "idGAP" + (x+1);
         img = "imgCarro" + (x+1);
         
         if(arrayClassificacaoGeral[x] == (cg1 + 0.1) ){
            nomePiloto = document.getElementById("numeroPiloto1").value + " - " + document.getElementById("nomePiloto1").value;
            tp = cg1;
            imgValue = "images/C1.png";
            mDistancia = distanciaPercorrida(numeroVoltaPiloto1);
            velMedia = parseFloat((mDistancia / (tp/100000))).toFixed(2);
            velMediaGeralPiloto1 = velMedia;
            arrayVelocidadeMedia.push(velMediaGeralPiloto1 + 0.1); 
            
            //registrar vitoria - numero do piloto, numero da volta) 
            registrarVitoria("1", numeroVoltaPiloto1);
            
            if(x==0){
               tempoPrimeiroLugar = cg1;
               gaps = 0;
            }else{
               gaps = cg1 - tempoPrimeiroLugar;
            }
            
         }else if(arrayClassificacaoGeral[x] == (cg2 + 0.2) ){
            nomePiloto = document.getElementById("numeroPiloto2").value + " - " + document.getElementById("nomePiloto2").value;
            tp = cg2;
            imgValue = "images/C2.png";
            mDistancia = distanciaPercorrida(numeroVoltaPiloto2);
            velMedia = parseFloat((mDistancia / (tp/100000))).toFixed(2);
            velMediaGeralPiloto2 = velMedia;
            arrayVelocidadeMedia.push(velMediaGeralPiloto2 + 0.2); 
            
            //registrar vitoria - numero do piloto, numero da volta, posição no ranking) 
            registrarVitoria("2", numeroVoltaPiloto2);
            
            if(x==0){
               tempoPrimeiroLugar = cg2;
               gaps = 0;
            }else{
               gaps = cg2 - tempoPrimeiroLugar;
            }
            
         }else if(arrayClassificacaoGeral[x] == (cg3 + 0.3) ){
            nomePiloto = document.getElementById("numeroPiloto3").value + " - " + document.getElementById("nomePiloto3").value;
            tp = cg3;
            imgValue = "images/C3.png";
            mDistancia = distanciaPercorrida(numeroVoltaPiloto3);
            velMedia = parseFloat((mDistancia / (tp/100000))).toFixed(2);
            velMediaGeralPiloto3 = velMedia;
            arrayVelocidadeMedia.push(velMediaGeralPiloto3 + 0.3); 
            
            //registrar vitoria - numero do piloto, numero da volta, posição no ranking) 
            registrarVitoria("3", numeroVoltaPiloto3);
            
            if(x==0){
               tempoPrimeiroLugar = cg3;
               gaps = 0;
            }else{
               gaps = cg3 - tempoPrimeiroLugar;
            }
            
         }else if(arrayClassificacaoGeral[x] == (cg4 + 0.4) ){
            nomePiloto = document.getElementById("numeroPiloto4").value + " - " + document.getElementById("nomePiloto4").value;
            tp = cg4;
            imgValue = "images/C4.png";
            mDistancia = distanciaPercorrida(numeroVoltaPiloto4);
            velMedia = parseFloat((mDistancia / (tp/100000))).toFixed(2);
            velMediaGeralPiloto4 = velMedia;
            arrayVelocidadeMedia.push(velMediaGeralPiloto4 + 0.4); 
            
            //registrar vitoria - numero do piloto, numero da volta, posição no ranking) 
            registrarVitoria("4", numeroVoltaPiloto4);
            
            if(x==0){
               tempoPrimeiroLugar = cg4;
               gaps = 0;
            }else{
               gaps = cg4 - tempoPrimeiroLugar;
            }
            
         }else if(arrayClassificacaoGeral[x] == (cg5 + 0.5) ){
            nomePiloto = document.getElementById("numeroPiloto5").value + " - " + document.getElementById("nomePiloto5").value;
            tp = cg5;
            imgValue = "images/C5.png";
            mDistancia = distanciaPercorrida(numeroVoltaPiloto5);
            velMedia = parseFloat((mDistancia / (tp/100000))).toFixed(2);
            velMediaGeralPiloto5 = velMedia;
            arrayVelocidadeMedia.push(velMediaGeralPiloto5 + 0.5); 
            
            //registrar vitoria - numero do piloto, numero da volta, posição no ranking) 
            registrarVitoria("5", numeroVoltaPiloto5);
            
            if(x==0){
               tempoPrimeiroLugar = cg5;
               gaps = 0;
            }else{
               gaps = cg5 - tempoPrimeiroLugar;
            }
            
         }
         
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = fomatacao_minuto(tp.toString());
         document.getElementById(cp3).innerHTML = fomatacao_minuto(gaps.toString());
         document.getElementById(img).src = imgValue;
         
      }
      
      arrayVelocidadeMedia.sort(sortNumber); //Ordem do maior para o menor
      
      //ordem da velocidade media, as mais rapida
      for (x = 0; x < arrayVelocidadeMedia.length; x++) {
         
         cp4 = "nomeDoPilotoVeloc" + (x+1);
         cp5 = "idMediaVeloc" + (x+1);
         
         if(arrayVelocidadeMedia[x] == (velMediaGeralPiloto1 + 0.1) ){
            nomePiloto = document.getElementById("numeroPiloto1").value + " - " + document.getElementById("nomePiloto1").value;
            velMedia = velMediaGeralPiloto1;
         }
         else if(arrayVelocidadeMedia[x] == (velMediaGeralPiloto2 + 0.2) ){
            nomePiloto = document.getElementById("numeroPiloto2").value + " - " + document.getElementById("nomePiloto2").value;
            velMedia = velMediaGeralPiloto2;
         }
         else if(arrayVelocidadeMedia[x] == (velMediaGeralPiloto3 + 0.3) ){
            nomePiloto = document.getElementById("numeroPiloto3").value + " - " + document.getElementById("nomePiloto3").value;
            velMedia = velMediaGeralPiloto3;
         }
         else if(arrayVelocidadeMedia[x] == (velMediaGeralPiloto4 + 0.4) ){
            nomePiloto = document.getElementById("numeroPiloto4").value + " - " + document.getElementById("nomePiloto4").value;
            velMedia = velMediaGeralPiloto4;
         }
         else if(arrayVelocidadeMedia[x] == (velMediaGeralPiloto5 + 0.5) ){
            nomePiloto = document.getElementById("numeroPiloto5").value + " - " + document.getElementById("nomePiloto5").value;
            velMedia = velMediaGeralPiloto5;
         }
         
         document.getElementById(cp4).innerHTML = nomePiloto;
         document.getElementById(cp5).innerHTML = velMedia;
         
      }
      
      
      linha = linha + 1.
      
   }
   
}

function push(){
     
   //543 - primeira volta
   //362 - segunda volta
   //181 - terceira volta
   
   //console.log(contPiloto1Distancia);
   
   var flgVerificar = verificarCampo();
   
   if (flgVerificar){
      alert("ERRO: No Cadastro do Piloto existe algum campo em branco!");
      return;
   }
   
   var flgFimDaCorrida = verificarCorrida();
   
   if (flgFimDaCorrida){
      alert("Corrida Encerrada!");
      
      return;
   }
   
   var arrayContSorte = [];
   
   numSortePiloto1 = Math.floor(Math.random() * 100);
   numSortePiloto2 = Math.floor(Math.random() * 100);
   numSortePiloto3 = Math.floor(Math.random() * 100);
   numSortePiloto4 = Math.floor(Math.random() * 100);
   numSortePiloto5 = Math.floor(Math.random() * 100);
   
   arrayContSorte.push(numSortePiloto1 + 0.1);
   arrayContSorte.push(numSortePiloto2 + 0.2);
   arrayContSorte.push(numSortePiloto3 + 0.3);
   arrayContSorte.push(numSortePiloto4 + 0.4);
   arrayContSorte.push(numSortePiloto5 + 0.5);
   
   arrayContSorte.sort(sortNumber); //Ordem do maior para o menor
   
   contOrdemPiloto1 = numSortePiloto1 + 0.1;
   contOrdemPiloto2 = numSortePiloto2 + 0.2;
   contOrdemPiloto3 = numSortePiloto3 + 0.3;
   contOrdemPiloto4 = numSortePiloto4 + 0.4;
   contOrdemPiloto5 = numSortePiloto5 + 0.5;
   
   txt1 = "35px";
   txt2 = "35px";
   txt3 = "35px";
   txt4 = "35px";
   txt5 = "35px";
   
   //o piloto que tá na frente é o primeiro pra fazer o registro, assim a lista fica certo
   for (i = 0; i < arrayContSorte.length; i++) {
      
      if(arrayContSorte[i] == contOrdemPiloto1){
         
         //piloto 1
         if (contPiloto1Distancia > 35){
            
            numSorte = numSortePiloto1 - 0.1;
            
            if (contPiloto1Distancia - 35 > numSorte){
               soma = contPiloto1Distancia - numSorte;
            }else{
               soma = 35; //35px
            }
            
            contPiloto1Distancia = soma;
            
            contTempoPiloto1 = contTempoPiloto1 + 1;
            
            registroSorte("piloto 1", contPiloto1Distancia, numSorte, numeroVoltaPiloto1, contTempoPiloto1);
            
            txt1 = soma.toString() + "px";
            
         }
         
      }
      else if (arrayContSorte[i] == contOrdemPiloto2){
         
         //piloto 2
         if (contPiloto2Distancia > 35){
            
            numSorte = numSortePiloto2 - 0.2;
            
            if (contPiloto2Distancia - 35 > numSorte){
               soma = contPiloto2Distancia - numSorte;
            }else{
               soma = 35; //35px
            }
            
            contPiloto2Distancia = soma;
            
            contTempoPiloto2 = contTempoPiloto2 + 1;
            
            registroSorte("piloto 2", contPiloto2Distancia, numSorte, numeroVoltaPiloto2, contTempoPiloto2);
            
            txt2 = soma.toString() + "px";
            
         }
         
      }
      else if (arrayContSorte[i] == contOrdemPiloto3){
         
         //piloto 3
         if (contPiloto3Distancia > 35){
            
            numSorte = numSortePiloto3 - 0.3;
            
            if (contPiloto3Distancia - 35 > numSorte){
               soma = contPiloto3Distancia - numSorte;
            }else{
               soma = 35; //35px
            }
            
            contPiloto3Distancia = soma;
            
            contTempoPiloto3 = contTempoPiloto3 + 1;
            
            registroSorte("piloto 3", contPiloto3Distancia, numSorte, numeroVoltaPiloto3, contTempoPiloto3);
            
            txt3 = soma.toString() + "px";
            
         }
         
      }
      else if (arrayContSorte[i] == contOrdemPiloto4){
         
         //piloto 4
         if (contPiloto4Distancia > 35){
            
            numSorte = numSortePiloto4 - 0.4;
            
            if (contPiloto4Distancia - 35 > numSorte){
               soma = contPiloto4Distancia - numSorte;
            }else{
               soma = 35; //35px
            }
            
            contPiloto4Distancia = soma;
            
            contTempoPiloto4 = contTempoPiloto4 + 1;
            
            registroSorte("piloto 4", contPiloto4Distancia, numSorte, numeroVoltaPiloto4, contTempoPiloto4);
            
            txt4 = soma.toString() + "px";
            
         }
         
      }
      else if (arrayContSorte[i] == contOrdemPiloto5){
         
         //piloto 5
         if (contPiloto5Distancia > 35){
            
            numSorte = numSortePiloto5 - 0.5;
            
            if (contPiloto5Distancia - 35 > numSorte){
               soma = contPiloto5Distancia - numSorte;
            }else{
               soma = 35; //35px
            }
            
            contPiloto5Distancia = soma;
            
            contTempoPiloto5 = contTempoPiloto5 + 1;
            
            registroSorte("piloto 5", contPiloto5Distancia, numSorte, numeroVoltaPiloto5, contTempoPiloto5);
            
            txt5 = soma.toString() + "px";
            
         }
         
      }
      else{
         console.log("ERRO -> " + arrayContSorte[i]);
      }
      
   }
   
   $(document).ready(function () {
      var categorydivs1 = $("#carro1");
      var categorydivs2 = $("#carro2");
      var categorydivs3 = $("#carro3");
      var categorydivs4 = $("#carro4");
      var categorydivs5 = $("#carro5");
      
      if(txt1 != ""){
         $.each(categorydivs1, function (index, div) {
            $(this).css("right", txt1);
         });
      }
      
      if(txt2 != ""){
         $.each(categorydivs2, function (index, div) {
            $(this).css("right", txt2);
         });
      }
      
      if(txt3 != ""){
         $.each(categorydivs3, function (index, div) {
            $(this).css("right", txt3);
         });
      }
      
      if(txt4 != ""){
         $.each(categorydivs4, function (index, div) {
            $(this).css("right", txt4);
         });
      }
      
      if(txt5 != ""){
         $.each(categorydivs5, function (index, div) {
            $(this).css("right", txt5);
         });
      }
      
   });
      
}

function sortNumber(a,b) {
   return b - a;
}

function somaHora(hrA, hrB, zerarHora) {
   if(hrA.length != 5 || hrB.length != 5) return "00:00";

   temp = 0;
   nova_h = 0;
   novo_m = 0;
   
   hora1 = hrA.substr(0, 2) * 1;
   hora2 = hrB.substr(0, 2) * 1;
   minu1 = hrA.substr(3, 2) * 1;
   minu2 = hrB.substr(3, 2) * 1;
   
   temp = minu1 + minu2;
   while(temp > 59) {
      nova_h++;
      temp = temp - 60;
   }
   
   novo_m = temp.toString().length == 2 ? temp : ("0" + temp);
   
   temp = hora1 + hora2 + nova_h;
   while(temp > 23 && zerarHora) {
          temp = temp - 24;
   }
   nova_h = temp.toString().length == 2 ? temp : ("0" + temp);
   
   return nova_h + ":" + novo_m;
}

function somaHoraCompleta(hrA, hrB) {
   //23:49:08.277 
   if(hrA.length != 12 || hrB.length != 12) return "00:00:00.000";
   
   temp = 0;
   nova_h = 0;
   novo_m = 0;
   novo_s = 0;
   novo_ms = 0;
   
   hora1 = hrA.substr(0, 2) * 1;
   hora2 = hrB.substr(0, 2) * 1;
   minu1 = hrA.substr(3, 2) * 1;
   minu2 = hrB.substr(3, 2) * 1;
   
   seg1 = hrA.substr(6, 2) * 1;
   seg2 = hrB.substr(6, 2) * 1;
   
   milliseg1 = hrA.substr(9, 3) * 1;;
   milliseg2 = hrB.substr(9, 3) * 1;;
   
   temp = milliseg1 + milliseg2;
   while(temp > 999) {
      novo_s++;
      temp = temp - 1000;
   }
   
   novo_ms = String(temp).padStart(3, '0');
   
   temp = seg1 + seg2 + novo_s;
   while(temp > 59) {
      novo_m++;
      temp = temp - 60;
   }
   
   novo_s = String(temp).padStart(2, '0');
   
   temp = minu1 + minu2 + novo_m;
   while(temp > 59) {
      nova_h++;
      temp = temp - 60;
   }
   
   novo_m = String(temp).padStart(2, '0');
   
   temp = hora1 + hora2 + nova_h;
   while(temp > 23 && zerarHora) {
          temp = temp - 24;
   }
   
   nova_h = String(temp).padStart(2, '0');
   
   return nova_h + ":" + novo_m + ":" + novo_s + "." + novo_ms;
}


function reset(){
   
   $("#carro1").css("right", "772px");
   $("#carro2").css("right", "772px");
   $("#carro3").css("right", "772px");
   $("#carro4").css("right", "772px");
   $("#carro5").css("right", "772px");
   
   contPiloto1Distancia = 772;
   contPiloto2Distancia = 772;
   contPiloto3Distancia = 772;
   contPiloto4Distancia = 772;
   contPiloto5Distancia = 772;
   
   document.getElementById('linha1').style.display = 'none';
   document.getElementById('linha2').style.display = 'none';
   document.getElementById('linha3').style.display = 'none';
   document.getElementById('linha4').style.display = 'none';
   document.getElementById('linha5').style.display = 'none';
   document.getElementById('linha6').style.display = 'none';
   document.getElementById('linha7').style.display = 'none';
   document.getElementById('linha8').style.display = 'none';
   document.getElementById('linha9').style.display = 'none';
   document.getElementById('linha10').style.display = 'none';
   document.getElementById('linha11').style.display = 'none';
   document.getElementById('linha12').style.display = 'none';
   document.getElementById('linha13').style.display = 'none';
   document.getElementById('linha14').style.display = 'none';
   document.getElementById('linha15').style.display = 'none';
   document.getElementById('linha16').style.display = 'none';
   document.getElementById('linha17').style.display = 'none';
   document.getElementById('linha18').style.display = 'none';
   document.getElementById('linha19').style.display = 'none';
   document.getElementById('linha20').style.display = 'none';
   document.getElementById('linha21').style.display = 'none';

   contTempoPiloto1 = 0;
   contTempoPiloto2 = 0;
   contTempoPiloto3 = 0;
   contTempoPiloto4 = 0;
   contTempoPiloto5 = 0;

   numeroVoltaPiloto1 = 0;
   numeroVoltaPiloto2 = 0;
   numeroVoltaPiloto3 = 0;
   numeroVoltaPiloto4 = 0;
   numeroVoltaPiloto5 = 0;
   
   melhorTempoDeVolta1 = 0;
   melhorTempoDeVolta2 = 0;
   melhorTempoDeVolta3 = 0;
   melhorTempoDeVolta4 = 0;
   melhorTempoDeVolta5 = 0;
   
   velMediaGeralPiloto1 = 0;
   velMediaGeralPiloto2 = 0;
   velMediaGeralPiloto3 = 0;
   velMediaGeralPiloto4 = 0;
   velMediaGeralPiloto5 = 0;
   
   horasPiloto1 = "12:00:00.000";
   horasPiloto2 = "12:00:00.000";
   horasPiloto3 = "12:00:00.000";
   horasPiloto4 = "12:00:00.000";
   horasPiloto5 = "12:00:00.000";
   
   flgRegistrado1 = false;
   flgRegistrado2 = false;
   flgRegistrado3 = false;
   flgRegistrado4 = false;
   flgRegistrado5 = false;
   
   contClassificacao = 0;
   
   linha = 1;
   
}

function verificarCampo() {
   var flgErro = false;
   
   if( document.getElementById("numeroPiloto1").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("nomePiloto1").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("numeroPiloto2").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("nomePiloto2").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("numeroPiloto3").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("nomePiloto3").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("numeroPiloto4").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("nomePiloto4").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("numeroPiloto5").value.trim() == ""){
      flgErro = true;
   }
   if( document.getElementById("nomePiloto5").value.trim() == ""){
      flgErro = true;
   }
   
   return flgErro;
   
}

function fomatacao_minuto(arg) {
   
   if (arg.length == 7){
      fMinutos = arg.substr(0, 2) * 1;
      fSegundos = arg.substr(2, 2) * 1;
      fMiliseg = arg.substr(4, 3) * 1;
      
   }
   else if (arg.length == 6){
      fMinutos = arg.substr(0, 1) * 1;
      fSegundos = arg.substr(1, 2) * 1;
      fMiliseg = arg.substr(3, 3) * 1;
      
   }
   else if (arg.length == 5){
      fMinutos = "0";
      fSegundos = arg.substr(0, 2) * 1;
      fMiliseg = arg.substr(2, 3) * 1;
      
   }
   else if (arg.length == 4){
      fMinutos = "0";
      fSegundos = arg.substr(0, 1) * 1;
      fMiliseg = arg.substr(1, 3) * 1;
      
   }
   else if ((arg.length == 3) || (arg.length == 2) || (arg.length == 1)){
      fMinutos = "0";
      fSegundos = "0"
      fMiliseg = arg;
      
   }
   else{
      fMinutos = "0";
      fSegundos = "0"
      fMiliseg = "0";
   }
   
   return fMinutos + ":" + String(fSegundos).padStart(2, '0') + "." + String(fMiliseg).padStart(3, '0');
   
}

function distanciaPercorrida(numVolta) {
   var distanciaPistaTotal = 772;
   
   if(numVolta == 1){
      return distanciaPistaTotal - 543;
   }
   else if (numVolta == 2){
      return distanciaPistaTotal - 362; 
   } 
   else if(numVolta == 3){
      return distanciaPistaTotal - 181;
   } 
   else if(numVolta == 4){
      return distanciaPistaTotal - 35;
   }
   
}

function verificarCorrida() {
   //verificar se é o fim da corrida
   if( (numeroVoltaPiloto1 == 4) &&
       (numeroVoltaPiloto2 == 4) &&
       (numeroVoltaPiloto3 == 4) &&
       (numeroVoltaPiloto4 == 4) &&
       (numeroVoltaPiloto5 == 4) ){
     
     return true;
      
   }
       
}


function registrarVitoria(piloto, numVolta) {
   
   if ( (numVolta == 4) && ((contClassificacao == 0) || (contClassificacao == 1) || (contClassificacao == 2)) ){
      
      if((piloto == 1) && (flgRegistrado1 == false)){
         contClassificacao++;
         vitoriasPiloto1[contClassificacao-1] = vitoriasPiloto1[contClassificacao-1] + 1;
         pontosPiloto1 = pontosPiloto1 + pontoTitulo(contClassificacao);
         flgRegistrado1 = true;
         
      }
      else if((piloto == 2) && (flgRegistrado2 == false)){
         contClassificacao++;
         vitoriasPiloto2[contClassificacao-1] = vitoriasPiloto2[contClassificacao-1] + 1;
         pontosPiloto2 = pontosPiloto2 + pontoTitulo(contClassificacao);
         flgRegistrado2 = true;
         
      }
      else if((piloto == 3) && (flgRegistrado3 == false)){
         contClassificacao++;
         vitoriasPiloto3[contClassificacao-1] = vitoriasPiloto3[contClassificacao-1] + 1;
         pontosPiloto3 = pontosPiloto3 + pontoTitulo(contClassificacao);
         flgRegistrado3 = true;
         
      }
      else if((piloto == 4) && (flgRegistrado4 == false)){
         contClassificacao++;
         vitoriasPiloto4[contClassificacao-1] = vitoriasPiloto4[contClassificacao-1] + 1;
         pontosPiloto4 = pontosPiloto4 + pontoTitulo(contClassificacao);
         flgRegistrado4 = true;
         
      }
      else if((piloto == 5) && (flgRegistrado5 == false)){
         contClassificacao++;
         vitoriasPiloto5[contClassificacao-1] = vitoriasPiloto5[contClassificacao-1] + 1;
         pontosPiloto5 = pontosPiloto5 + pontoTitulo(contClassificacao);
         flgRegistrado5 = true;
         
      }
      
   }
   
}

function pontoTitulo(posicao) {
   if(posicao == 1){
      return 70;
   }
   else if(posicao == 2){
      return 35;
   }
   else if(posicao == 3){
      return 15;
   }
}


var vitoriasPiloto1 = [0,0,0]
var vitoriasPiloto2 = [0,0,0]
var vitoriasPiloto3 = [0,0,0]
var vitoriasPiloto4 = [0,0,0]
var vitoriasPiloto5 = [0,0,0]

var pontosPiloto1 = 0;
var pontosPiloto2 = 0;
var pontosPiloto3 = 0;
var pontosPiloto4 = 0;
var pontosPiloto5 = 0;

function listaDeTitulos(argument) {
   
   var arrayTitulos = [];
      
   cg1 = pontosPiloto1;
   cg2 = pontosPiloto2;
   cg3 = pontosPiloto3;
   cg4 = pontosPiloto4;
   cg5 = pontosPiloto5;
   
   arrayTitulos.push(cg1 + 0.1); 
   arrayTitulos.push(cg2 + 0.2);
   arrayTitulos.push(cg3 + 0.3);
   arrayTitulos.push(cg4 + 0.4);
   arrayTitulos.push(cg5 + 0.5);
   
   arrayTitulos.sort(sortNumber); //Ordem do maior para o menor
   
   //o piloto que tá na frente é o primeiro pra fazer o registro, assim a lista fica certo
   for (x = 0; x < arrayTitulos.length; x++) {
      
      cp1 = "nomeDoCampeaoPiloto" + (x+1);
      cp2 = "idOuro" + (x+1);
      cp3 = "idPrata" + (x+1);
      cp4 = "idBronze" + (x+1);
      
      if(arrayTitulos[x] == (cg1 + 0.1) ){
         nomePiloto = document.getElementById("numeroPiloto1").value + " - " + document.getElementById("nomePiloto1").value;
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = vitoriasPiloto1[0];
         document.getElementById(cp3).innerHTML = vitoriasPiloto1[1];
         document.getElementById(cp4).innerHTML = vitoriasPiloto1[2];
         
      }else if(arrayTitulos[x] == (cg2 + 0.2) ){
         nomePiloto = document.getElementById("numeroPiloto2").value + " - " + document.getElementById("nomePiloto2").value;
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = vitoriasPiloto2[0];
         document.getElementById(cp3).innerHTML = vitoriasPiloto2[1];
         document.getElementById(cp4).innerHTML = vitoriasPiloto2[2];
         
      }else if(arrayTitulos[x] == (cg3 + 0.3) ){
         nomePiloto = document.getElementById("numeroPiloto3").value + " - " + document.getElementById("nomePiloto3").value;
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = vitoriasPiloto3[0];
         document.getElementById(cp3).innerHTML = vitoriasPiloto3[1];
         document.getElementById(cp4).innerHTML = vitoriasPiloto3[2];
         
      }else if(arrayTitulos[x] == (cg4 + 0.4) ){
         nomePiloto = document.getElementById("numeroPiloto4").value + " - " + document.getElementById("nomePiloto4").value;
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = vitoriasPiloto4[0];
         document.getElementById(cp3).innerHTML = vitoriasPiloto4[1];
         document.getElementById(cp4).innerHTML = vitoriasPiloto4[2];
         
      }else if(arrayTitulos[x] == (cg5 + 0.5) ){
         nomePiloto = document.getElementById("numeroPiloto5").value + " - " + document.getElementById("nomePiloto5").value;
         document.getElementById(cp1).innerHTML = nomePiloto;
         document.getElementById(cp2).innerHTML = vitoriasPiloto5[0];
         document.getElementById(cp3).innerHTML = vitoriasPiloto5[1];
         document.getElementById(cp4).innerHTML = vitoriasPiloto5[2];
         
      }
      
      
   }
   
   
}