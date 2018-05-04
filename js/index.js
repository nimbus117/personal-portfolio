var logo = new Image();
logo.src = "images/logo.png";

$(document).ready(function () {

  $('body').scrollspy({ target: '.navbar' })

  var markup = "";
  for (var x = 0; x < portData.length; x++) {
    markup += `
    <div class="col-sm-6 col-lg-4">
      <div class="card n-d1-b">
        <div class="img-thumbnail n-d1-b">
          <a id="card-image" data-toggle="modal" href="#portModal${x}">
            <img class="img-fluid" 
                 src="${portData[x].image}" 
                 alt="${portData[x].alt}" 
                 title="${portData[x].title}">
          </a>
          <p id="card-caption" class="text-center text-truncate n-l2-t">
            ${portData[x].title}
          </p>
        </div>
      </div>
      <div id="portModal${x}" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header n-d1-b">
              <h5 class="modal-title n-l1-t">${portData[x].title}</h5>
              <button type="button" class="close" data-dismiss="modal">
              <span class="n-l1-t">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img id="modal-image" class="img-fluid img-thumbnail n-d1-b" 
                   src="${portData[x].image}" 
                   alt="${portData[x].alt}" 
                   title="${portData[x].alt}">
              <p><strong>${portData[x].date}</strong> - ${portData[x].caption}</p>
              <a role="button" class="btn btn-outline-info btn-block" 
                 href="${portData[x].link}" 
                 target="_blank">Visit Page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById("modal-row").innerHTML = markup;
});
