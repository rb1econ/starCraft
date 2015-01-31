var username1 = [];
var fullname1 = [];
var region1 = [];
var race1 = [];
var wins1 = [];
var losses1 = [];

$(document).on('ready', function() {
  
  $('#page1').on('click', function(){
      page1Func = function(dataRR){
                  return dataRR.slice(0,20)
               }
      var pageData = page1Func(dataJS);
      

      var oneMapd = pageData.map(function(person){
         username1.push(person[0]);
         fullname1.push(person[1]);
         region1.push(person[2]);
         race1.push(person[3]);
         wins1.push(person[4]);
         losses1.push(person[5]);
      })
      for (var i = 0; i < username1.length; i++) {

         $("<td id='username"+i+"'>username1[i]</td>")
               .after('#rowH');
      }

      // .appendTo("<tr id='row"+i+"'></tr>")
      // "username1[i]" (goes in td^); 
      // $("<div class='pageDataC'>"+username1[k]+"</div>").appendTo('.container');
  console.log(username1);
  });
















});