var infoCountrie;
var name;
var capital;
var area;
var currencies_name;
var population;
var flag;



function showCountries(){
  $.get("http://api.population.io:80/1.0/countries", function(data, status){
        $("#searchBox1").autocomplete({
                source:data.countries
              });
          });
          $.get("https://restcountries.eu/rest/v2/all", function(data, status){

                        infoCountrie=data;

                  });
}

function getCountriesInfo(){
  drawBasic();

          for(var a in infoCountrie){
            if(infoCountrie.hasOwnProperty(a)){
                          if(infoCountrie[a].name==document.getElementById("searchBox1").value||infoCountrie[a].altSpellings[1]==document.getElementById("searchBox1").value){
              name=infoCountrie[a].name;
              capital=infoCountrie[a].capital;
              area=infoCountrie[a].area;

              flag=infoCountrie[a].flag;
              population=infoCountrie[a].population;
            }

          }
        }

          $("#countryName").text(name);
          $("#countryCapital").text("Capital city: "+capital);
          $("#countryArea").text("Area: "+area);
          $("#countryPopul").text("Population: "+population);

          $("#countryFlag").attr("src",flag);


}
