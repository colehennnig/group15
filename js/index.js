console.log("loaded lab 2 js");

var rawData;
var complete = false;
//$("#activate").click(function() {getAPI()});

//("#activate").click(function() {getAPI()});
// Using the core $.ajax() method
getAPI();

function getAPI() {
  complete = false
  ajax();
}

function ajax() {
  $.ajax({
      url: "https://en.wikipedia.org/api/rest_v1/page/summary/Phobia?redirect=false",
      data: {},
      type: "GET",
      dataType : "json",
      success: function(data) {
        rawData = data;
        console.log(data);
        parseJson(data);

      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
      },
      complete: function() {
        complete = true;
        console.log("done n done");
      }
  })
  console.log("lmao");
}

function parseJson(data) {
  let imgLink = rawData.originalimage.source;
  let desc = rawData.extract;
  let title = rawData.displaytitle;
  let date = rawData.description;
  console.log(imgLink);
  console.log(desc);
  $("#apodImage").attr("src",imgLink);
  $("#apodDesc").html(desc);
  $("#apodDate").html(date);
  $("#apodTitle").html(title);
}
