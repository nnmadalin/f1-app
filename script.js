var jfile;

$.getJSON('https://ergast.com/api/f1/2023/3/results.json', function(jfile) {
   console.log(jfile);
   var dir = jfile["MRData"]["RaceTable"]["Races"]["0"]["Results"];
   var dir2 = jfile["MRData"]["RaceTable"]["Races"]["0"];
   console.log(jfile["MRData"]["RaceTable"]["Races"]["0"]["Results"])
   for(let i = 19; i >= 0; i--){
      var table = document.getElementById("race_results");
      var row = table.insertRow(0);
      var POS = row.insertCell(0);
      var NO = row.insertCell(1);
      var DRIVER = row.insertCell(2);
      var CAR = row.insertCell(3);
      var LAPS = row.insertCell(4);
      var TIME = row.insertCell(5);
      var PTS = row.insertCell(6);
      POS.innerHTML = i + 1;
      NO.innerHTML = dir[i]["number"]; 
      DRIVER.innerHTML = dir[i]["Driver"]["givenName"] + " " + dir[i]["Driver"]["familyName"];
      CAR.innerHTML = dir[i]["Constructor"]["name"];
      LAPS.innerHTML = dir[i]["laps"];
      if(dir[i]["Time"])
         TIME.innerHTML = dir[i]["Time"]["time"];
      else
         TIME.innerHTML = "DNF";
      PTS.innerHTML = dir[i]["points"];
   }
   var x;
   $.getJSON('https://api.open-meteo.com/v1/forecast?latitude='+dir2["Circuit"]["Location"]["lat"]+'&longitude='+dir2["Circuit"]["Location"]["long"]+'&current_weather=true', function(x) {
      console.log(x);
      document.getElementById("grade").innerHTML=x["current_weather"]["temperature"] + "°C";

      
   });

});


