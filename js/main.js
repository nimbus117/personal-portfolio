// generate html for portfolio cards/modals, uses portData from data.js
var portCards = "";
for (var x = 0; x < portData.length; x++) {
  portCards += `
  <div class="col-sm-6 col-lg-4">
    <div class="card">
      <div class="img-thumbnail">
        <a id="card-image" data-toggle="modal" href="#portModal${x}">
          <img class="img-fluid" 
               src="${portData[x].image}" 
               alt="${portData[x].alt}">
        </a>
        <p id="card-caption" class="text-center text-truncate">
          ${portData[x].title}
        </p>
      </div>
    </div>
    <div id="portModal${x}" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${portData[x].title}</h5>
            <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img id="modal-image" class="img-thumbnail" 
                 src="${portData[x].image}" 
                 alt="${portData[x].alt}">
            <p><strong>${portData[x].date}</strong> - ${portData[x].caption}</p>
            <a role="button" class="my-btn" 
               href="${portData[x].link}" 
               target="_blank">Visit Page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

$(document).ready(function () {
  // set content of #modal-row
  document.getElementById("modal-row").innerHTML = portCards;
  // enable scrollspy
  $("body").scrollspy({target: ".navbar"})
  // "scroll to" for navbar links
  $(".navbar a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  // collape navbar on click
  $(".navbar-collapse a").click(function(){
    $(".navbar-collapse").collapse("hide");
  });
});
