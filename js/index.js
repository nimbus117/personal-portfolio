$(document).ready(function(){  
  $('body').scrollspy({ target: '.navbar'})
  var markup = "";
  for (var x = 0 ; x < modalData.length ; x++) {
    markup += `
    <div class="col-sm-6 col-lg-4">
      <a data-toggle="modal" href="#portfolioModal${x}">
        <img class="img-fluid img-thumbnail" src="${modalData[x].image}" alt="${modalData[x].alt}" title="${modalData[x].title}">
      </a>
      <div id="portfolioModal${x}" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${modalData[x].title}</h5>
              <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img class="img-fluid img-thumbnail" src="${modalData[x].image}" alt="${modalData[x].alt}" title="${modalData[x].alt}">
              <p><strong>${modalData[x].date}</strong> - ${modalData[x].caption}</p>
            </div>
            <div class="modal-footer">
              <a role="button" class="btn btn-dark" href="${modalData[x].link}" target="_blank">Visit Page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }
  document.getElementById("modal-row").innerHTML = markup;
});
