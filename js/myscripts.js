 function fun(){
  //Преобразуем слова из формы в JSON строку
  var event = {
    EngW: $('#Eng_Word').val(),
    RuW: $('#Ru_Word').val()
  }
    var data2 = JSON.stringify(event);
    var data = encodeURI(data2)
    $.ajax({
        type:"get",
        url: "myphp.php",
       // data: 'jsonData='+$.toJSON(event),
       data: "data="+data,
       /* success: function (msg){
            alert ("Data Saved: " + msg);
            }
            */
          success: function (){
            //$('.NewWords').css('background','green');
                //$('.NewWords').effect(pulsate,{},1500);
          }                
});
};

          
    


$(function(){

massEng1 =    ['cost', 'cut', 'let', 'put', 'read', 'build', 'feel', 'hear', 'get', 'keep', 'lend', 'lose', 'meet', 'send', 'sit','sleep', 'spend']; 
massEng1_2f = ['cost', 'cut', 'let', 'put', 'read', 'built', 'felt', 'heard', 'got', 'kept', 'lent', 'lost', 'met', 'sent', 'sat', 'slept', 'spent'];
massEng1_3f = ['cost', 'cut', 'let', 'put', 'read', 'built', 'felt', 'heard', 'got', 'kept', 'lent', 'lost', 'met', 'sent', 'sat', 'slept', 'spent'];

massEng2 =      ['win', 'bring', 'buy',    'catch',  'think',   'find',  'have', 'make', 'pay', 'sell', 'say', 'tell', 'understand', 'hang', 'hear', 'hold', 'feed', 'leave', 'stand', 'teach', 'tell'];
massEng2_2f = ['won', 'brougth', 'bought', 'caught', 'thought', 'found', 'had', 'made', 'paid', 'sold', 'said', 'told', 'understood', 'hung', 'heard', 'held', 'fed', 'left', 'stood', 'taught', 'told'];
massEng2_3f = ['won', 'brougth', 'bought', 'caught', 'thought', 'found', 'had', 'made', 'paid', 'sold', 'said', 'told', 'understood', 'hung', 'heard', 'held', 'fed', 'left', 'stood', 'taught', 'told'];

massEng3 =    ['become', 'come', 'work',   'travel',    'begin', 'breake', 'choose', 'drive', 'drink', 'eat',    'fall',   'fly',   'forget',    'be',       'do', 'go',         'give',  'grow', 'know',    'ring', 'see', 'speak', 'swim', 'take',    'wake', 'write', 'draw', 'run',   'ride',   'show',  'sing', 'throw', 'wear'];
massEng3_2f = ['became', 'came', 'worked', 'travelled', 'began', 'broke', 'chose',  'drove',  'drank', 'ate',    'fell',   'flew',  'forgot',    'was/were', 'did', 'went',      'gave',   'grew', 'knew',   'rang', 'saw', 'spoke', 'swam', 'took',    'woke', 'wrote', 'drew', 'ran',   'rode',   'showed', 'sang', 'threw', 'wore'];
massEng3_3f = ['become', 'come', 'worked', 'travelled', 'begun', 'broken', 'chosen', 'driven', 'drunk', 'eaten', 'fallen', 'flown', 'forgotten', 'been',     'done', 'gone/been', 'given', 'grown', 'known', 'rung', 'seen', 'spoke', 'swum', 'taken', 'woken', 'written','drawn', 'run', 'ridden', 'shown', 'sung', 'thrown', 'worn'];

massRu1 = ['стоимость','вырезать','позволять','положить','читать','строить','чувствовать','услышать','получить','держать','давать(в долг)','потерять','встреча','послать','сидеть','спать','тратить'];
massRu2 = ['победа', 'приносить', 'купить', 'ловить', 'думать', 'искать', 'иметь', 'сделать', 'платить', 'продавать', 'сказать', 'рассказать', 'понимать', 'висеть', 'слышать', 'удерживать', 'кормить', 'уезжать', 'стоять', 'обучать', 'рассказывать', '', '', ''];
massRu3 = ['становиться', 'прийти', 'работать', 'путешествовать', 'начинать', 'перерыв', 'выбирать', 'ездить', 'пить', 'кушать', 'падать', 'летать', 'забывать', 'быть', 'делать', 'идти', 'давать', 'расти', 'знать', 'звенеть', 'видеть', 'говорить', 'плавать', 'взять', 'просыпаться', 'писать', 'рисовать', 'бежать', 'Ездить верхом', 'показывать', 'петь', 'бросать', 'носить'];

massPrepositionsEng = ['on','in',         'in front of','behind','out of',   'to/toward',       'away from','into',    'along','past','onto',     'off',           'down','through','across',     'up',   'not far from','far from','at,by,deside,next to','near','under','over',      'above','below',    'across from,opposite','between','among','in the middle of','straight ahead','on the left','turn right',   'round the corner','turn left',       'on the right','around','against'];
massPrepositionsRu =  ['на','в(комнате)', 'впереди',    'сзади', '(выйти)из','по направлению к','(идти)от', 'в(дверь)','вдоль','мимо','на (шкаф)','(спустить)вниз','вниз','сквозь', 'через(поле)','вверх','недалеко от', 'далеко от','совсем рядом',       'возле','под','через(холм)','выше','ниже/внизу','напротив',             'между', 'среди','посредине',       'напрямик',       'слева','повернуть направо','за углом',         'повернуть налево','справа',      'вокруг','кренится к/напротив'];

newMassEng = [];
newMassRu = [];
newEng2f = [];
newEng3f = []; 
var tempMass = new Array();
/*
massEng = massEng1.concat(massEng2,massEng3);
massEng2f = massEng1_2f.concat(massEng2_2f,massEng3_2f);
massEng3f = massEng1_3f.concat(massEng2_3f,massEng3_3f);
massRu = massRu1.concat(massRu2,massRu3);
*/
var mixEng = [];
var mixEng2f = [];
var mixEng3f = [];
var mixRu = [];


var repeat = [];
var translate = [];
var translate2f = [];
var translate3f = [];
 var j = 0;
 var none;
 
 
 //загрузка слов из файла в массив tempMass
function GetFromFile(){
    $.ajax({
        type:"get",
        url: "myphp2.php",
        success: function (json){
         var o = $.parseJSON(json);
           for (i in o){
            tempMass[i] = o[i];
           };
           alert('Новые слова загружены!');
          }
         })
    };   
    
    
 
 
$('#begin').click(function(){
$('#verification').removeClass('ShadowCheck');
$('#FormsVerbs').removeClass('shadowVerbs');
$('#WordsOrVerbs').text('три формы глагола'); 
           if($('#w1').is(":checked") && $('#w2').is(":checked") && $('#w3').is(":checked") ){
                alert("Вы активировали только глаголы");
                  massEng = massEng1.concat(massEng2,massEng3);
            massEng2f = massEng1_2f.concat(massEng2_2f,massEng3_2f);
            massEng3f = massEng1_3f.concat(massEng2_3f,massEng3_3f);
            massRu = massRu1.concat(massRu2,massRu3);
                }
                  else {
                    if($('#w1').is(":checked") && $('#w2').is(":checked") ){
                        alert("Вы активировали только первые две группы глаголов");
                        massEng = massEng1.concat(massEng2);
                        massEng2f = massEng1_2f.concat(massEng2_2f);
                        massEng3f = massEng1_3f.concat(massEng2_3f);
                        massRu = massRu1.concat(massRu2);
                      }
                       else {
                        if($('#w2').is(":checked") && $('#w3').is(":checked") ){
                        alert("Вы активировали только вторые две группы глаголов");
                        massEng = massEng1.concat(massEng3);
                        massEng2f = massEng2_2f.concat(massEng3_2f);
                        massEng3f = massEng2_3f.concat(massEng3_3f);
                        massRu = massRu2.concat(massRu3);
                      }
                       else {
                       if($('#w1').is(":checked") ){
                           alert("Вы активировали только первую группу глаголов");
                           massEng = massEng1;
                            massEng2f = massEng1_2f;
                            massEng3f = massEng1_3f;
                            massRu = massRu1;
                           }
                           else{
                             if($('#w2').is(":checked") ){
                                 alert("Вы активировали только вторую группу глаголов");
                                 massEng = massEng2;
                                    massEng2f = massEng2_2f;
                                    massEng3f = massEng2_3f;
                                    massRu = massRu2;
                             }
                             else{
                                if($('#w3').is(":checked") ){
                                 alert("Вы активировали только третью группу глаголов");
                                 massEng = massEng3;
                                    massEng2f = massEng3_2f;
                                    massEng3f = massEng3_3f;
                                    massRu = massRu3;
                                }
                                else{
                                    if($('#w4').is(":checked") ){
                                 alert("Вы активировали только предлоги");
                                 massEng = massPrepositionsEng;
                                 massRu = massPrepositionsRu;
                                 none ="";
                                    }
                                    else{
                                         if($('#w5').is(":checked") ){
                                 alert("Вы активировали новые слова");
                                 var q = $('#inpunCountWords').val();// q - кол-во слов из файла
                                 
                                 var CountLastWords = parseInt($('#inpunLastWords').val());// номер слова, с которого будет выборка до конца файла (повторить последние __ слов)
                                 var first = 0; // first - номер слова, с которого начинается выборка
                                 if ($('#CountLastWords').val() !== "")
                                 {
                                    first = tempMass.length-CountLastWords+1;
                                    q = CountLastWords;
                                    alert ('Прорабатываем последние ' + CountLastWords + 'слов');
                                 }
                                 
                                 if ($('#inpunFirstWord').val() !== "")
                                 {
                                    first = parseInt($('#inpunFirstWord').val());
                                    alert ('указано с ' + first);
                                 }
                                                                  
                                 massEngTemp = new Array(q);
                                 massRuTemp = new Array(q);
                                 
                                 for (i = 0; i < q; i++){
                                    massEngTemp[i] = tempMass[first+i-1].EngW;
                                    massRuTemp[i] = tempMass[first+i-1].RuW;
                                 }
                                 massEng = massEngTemp;
                                 massRu = massRuTemp;
                                 none ="";
                                 
                                    }
                                    else{
                                         alert("Вы не выбрали ни одной категории");        
                                    }        
                                    }
                                }   
                             }
                            
                                   
                           }
            }}}
            
 
 
        for (i = 0; i < massEng.length; i++){
            if($('#w4').is(":checked") || $('#w5').is(":checked")){
                           k=0;
            lenght_m = massEng.length;
            lenght_m2 = lenght_m; 
            for (i = 0; i < lenght_m2; i++){
                k = Math.floor( Math.random( ) * lenght_m);
                lenght_m--;
                mixEng[i] = massEng[k];
                massEng.splice(k,1);
                mixRu[i] = massRu[k];
                massRu.splice(k,1);
            }        
                              
                                    }
                                    else{
            k=0;
            lenght_m = massEng.length;
            lenght_m2 = lenght_m; 
            for (i = 0; i < lenght_m2; i++){
                k = Math.floor( Math.random( ) * lenght_m);
                lenght_m--;
                mixEng[i] = massEng[k];
                massEng.splice(k,1);
                mixEng2f[i] = massEng2f[k];
                massEng2f.splice(k,1);
                mixEng3f[i] = massEng3f[k];
                massEng3f.splice(k,1);
                mixRu[i] = massRu[k];
                massRu.splice(k,1);
            }   
        }};

   
$('#RuWord').text(mixRu[j]);
});
/*
  for (i = 0; i < massEng; i++){
    $('#EngWord').text(massEng[i]);
    }
 */  
 $('#RepeatError').hide();
 var t = 0;
 var state1 = 0;
 var state2 = 0;
 var state3 = 0;
 
 function Checking(){
         $('#counter').text(mixEng.length-j-1);
            var tempText = $('#inpunWord').val();
            var tempText2 = $('#inpunWord2').val();
            var tempText3 = $('#inpunWord3').val();
                    
        if (tempText == mixEng[j]) {
            $('#Rezult').css('background-color','green').text('Молодец! Правильный ответ!');$('#rightWord').text('');
            state1 = 1;                  
        }
        else {                  
            $('#Rezult').css('background-color','red').text('Неправильно! Правильный ответ: '); $('#rightWord').text(mixEng[j]);
            state1 = 0;  
        };
        if (tempText2 != none){
            if (tempText2 == mixEng2f[j]) {
            $('#Rezult2').css('background-color','green').text('Молодец! Правильный ответ!');
            $('#rightWord2').text('');
            $('#inpunWord2').val('');
            state2 = 1;       
        }
        else {                  
            $('#Rezult2').css('background-color','red').text('Неправильно! Правильный ответ: ');$('#rightWord2').text(mixEng2f[j]);
            state2 = 0;                
        };
        }
        
        if (tempText3 != none){
         if (tempText3 == mixEng3f[j]) {
            $('#Rezult3').css('background-color','green').text('Молодец! Правильный ответ!');
            $('#rightWord3').text('');
            $('#inpunWord3').val('');
            state3 = 1;       
        }
        else {                  
            $('#Rezult3').css('background-color','red').text('Неправильно! Правильный ответ: '); $('#rightWord3').text(mixEng3f[j]);
            state3 = 0;                
        };
        }
        if (none == ""){
            if (state1 == 1){
            j++;
            $('#RuWord').text(mixRu[j]);
            $('#inpunWord').val('').css('background-color','white'); 
            $('#inpunWord2').val('').css('background-color','white');
            $('#inpunWord3').val('').css('background-color','white');
        }
        else{
            $('#RuWord').text(mixRu[j]);
            
            repeat[t] = mixRu[j];
            translate[t] = mixEng[j];
            translate2f[t] = mixEng2f[j];
            translate3f[t] = mixEng3f[j];
            
            t++;
            $('#inpunWord').val('').css('background-color','white');
            $('#inpunWord2').val('').css('background-color','white');
            $('#inpunWord3').val('').css('background-color','white');
        }
        }
        else {
            if (state1 == 1 && state2 == 1 && state3 == 1){
            j++;
            $('#RuWord').text(mixRu[j]);
            $('#inpunWord').val('').css('background-color','white'); 
            $('#inpunWord2').val('').css('background-color','white');
            $('#inpunWord3').val('').css('background-color','white');
        }
        else{
            $('#RuWord').text(mixRu[j]);
            
            repeat[t] = mixRu[j];
            translate[t] = mixEng[j];
            translate2f[t] = mixEng2f[j];
            translate3f[t] = mixEng3f[j];
                        
            t++;
            $('#inpunWord').val('').css('background-color','white');
            $('#inpunWord2').val('').css('background-color','white');
            $('#inpunWord3').val('').css('background-color','white');
            
        }
        }
        
        
       if (j >= mixRu.length){
                alert('Все слова пройдены! Начинаем ещё раз! Количество пройденных слов: ' + j);
                j=0;
                $('#RuWord').text('');
                 if (t != 0 ){
                $('#RepeatError').show();
                
            }
            else {
                $('#RepeatError').hide();
                $('#RuWord').text('').css('background-color','#7700FF');;
            }
                }
 };
 
 $('#check').click(
 Checking
 );

$('.Input_Words').click(function(){
    $('#Rezult').text('');
    $('#Rezult2').text('');
    $('#Rezult3').text('');
    $('#rightWord').text('');
    $('#rightWord2').text('');
    $('#rightWord3').text('');
});

$('#RepeatError').click(function(){
    $('#RuWord').css('background-color','red');
    mixRu = [];
    mixEng = [];
    for (i = 0; i < repeat.length; i++){
        mixRu[i] = repeat[i];
        mixEng[i] = translate[i];     
        mixEng2f[i] = translate2f[i];
        mixEng3f[i] = translate3f[i];
             
    }
    j = 0;
    t = 0;
    $('#RuWord').text(mixRu[j]);
     repeat = [];
     translate = [];
})

$('#ShowAllWords').click(function(){  
    for (i = 0; i < mixEng.length; i++){
        $('#AllWords1').append(mixEng[i] + '<br>');
        $('#AllWords2').append(mixEng2f[i] + '<br>');
        $('#AllWords3').append(mixEng3f[i] + '<br>');
        $('#AllWordsRu').append(mixRu[i] + '<br>');      
    }
});







$('#GetNewWords').click(function(){  
    
    for (i = 0; i < tempMass.length; i++){
        $('#AllWords1').append(i+1 + '<br>');
        $('#AllWords2').append(tempMass[i].EngW + '<br>');
        $('#AllWords3').append(tempMass[i].RuW + '<br>');      
    }
});









var q; // длина массива с новыми словами

$('#InputInDB').click(function(){
    
  /* newMassEng[q] = */ /*newMassEng.push(temp);*/
  newMassEng[newMassEng.length] = $('#Eng_Word').val();
   newMassRu[newMassRu.length] = $('#Ru_Word').val();
   $('#Eng_Word').val('');
   $('#Ru_Word').val('');
   // alert('слово '+ temp+' успешно добавлено '); 
   NewEng = document.getElementById("Eng_Word");
   NewRu = document.getElementById('Ru_Word');
  //Преобразуем слова из формы в JSON строку

});

$('#WordsInDB').click(function(){
    for (i = 0; i < newMassEng.length; i++){
       var value = $('#ShowNewWords').text() + newMassEng[i] +' '+ newMassRu[i] +'\n';
       $('#ShowNewWords').text(value);
       // newMassEng[i].appendTo($('#ShowNewWords'));        
    } 
    
});




$('#InputInDB2').click(fun);

/*
$('#LoadNewWords').click(function(){
    GetFromFile();
    
    alert('Новые слова загружены!');
});
*/

$('#LoadNewWords').click( 
GetFromFile

);


 
$('#Testing').click(function(){

for (i in massEng1){
    tempMass[i] = {
       EngW : massEng1[i],
       RuW : massRu1[i]
    }
}  
var data2 = JSON.stringify(tempMass);

var data3 = $.parseJSON(data2);


for (i in data3){
    alert (data3[i].RuW);
}
});

$('#w5').click(function(){
    if($('#w5').is(":checked") )
      { 
        $('.shadow_block').css('display','block');
        $('.ShadowCheck').css('display','block');
        $('#WordsOrVerbs').text('перевод для слова');
      }                           
    
    else
   { 
        $('.shadow_block').css('display','none');
        $('.ShadowCheck').css('display','none');
   }
      
});

$('.verbs').click(function(){
    if($('.verbs').is(":checked") )
      { $('.shadow_block2').css('display','block');}                           
    
    else
   { $('.shadow_block2').css('display','none');}
      
});

$('.NewWords').keypress(function(event){
    if (event.which == '13') {
  fun();
  $('#Eng_Word').focus();
  $('.NewWords').val('');
  
  }
});
//функция, которая вводит данные по нажатию на Enter
$('.Input_Words').keypress(function(event){
    if (event.which == '13') {
  Checking();
  $('#inpunWord').focus();
  $('.Input_Words').val('');
  
  }
});

$('#Eng_Word').click(function(){
    $(this).val('');
});
$('#Ru_Word').click(function(){
    $(this).val('');
});
$('#Tinting').click(function(){
    $(this).addClass('shadow_InputBlock');
    $('#InputWords').addClass('shadow_InputBlock');
});
$('#StartNewWords').click(function(){
    $('#Tinting').removeClass('shadow_InputBlock');
    $('#InputWords').removeClass('shadow_InputBlock');
});


}); //конец JQuery кода

