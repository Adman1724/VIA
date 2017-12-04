google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);
var chart;
var options;
var data;
var data1;
var total=0;
var from1=0;
function drawBasic() {

       data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Population');



          data.addRow();

       options = {

        backgroundColor:'#dedede',
        colors:['#54beb1','white'],
        hAxis: {
          color: 'white',
          title: 'Date'
        },
        vAxis: {
            color: 'white',
          title: 'Population'
        }
      };

       chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
    function reload(){

      var dataC=new Array();
      data1=data;
      var string1;
      var from=document.getElementById('from').value;
      var to=document.getElementById('to').value;
      for(;from<=to;from++){

        string1="http://api.population.io:80/1.0/population/"+from+"/"+document.getElementById("searchBox1").value+"/";
        var string2 = string1.replace(" ", "%20");
        request(string2,from);



      }


      chart = new google.visualization.LineChart(document.getElementById('chart_div'));

     chart.draw(data1, options);


    }
    function request(string3, from1){
      $.get(string3, function(date, status){
          dataC=date;



          for(var i = 0; i < dataC.length; i++){
            total+=Number(dataC[i].total);

          }

          data.addRow([Number(from1),total]);

          total=0;
              });


    }
