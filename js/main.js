// all modal IDs, for external links
modalIds = [];

// generate html for blog cards/modals, uses blogContent from data-blog.js
var blogHtml = "";
blogContent.forEach(function (item, index) {
    modalIds.push("#" + item.guid);
    var paragraphs = "";
    item.text.forEach(function (paragraph) {
        paragraphs += `<p>${paragraph}</p>`
    });
    blogHtml += `
		<div class="col-lg-6">
			<div class="card">
				<div class="card-header">
					<h5>${("0" + (blogContent.length - index)).slice(-2)} - ${item.title}</h5>
				</div>
				<a class="card-blog-link" data-toggle="modal" href="#${item.guid}">
					<div class="card-body">
						<p><strong>${item.date}</strong> - ${item.text[0].substring(0, 150).trim()}...</p>
					</div>
				</a>
			</div>
			<div id="${item.guid}" class="modal fade">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">${item.title}</h5>
							<button type="button" class="close" data-dismiss="modal">
							<span>&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p><strong>${item.date}</strong></p>
							${paragraphs}
							<a class="my-btn" data-dismiss="modal" href="#">Close</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
});

// generate html for portfolio cards/modals, uses portContent from data-portfolio.js
var portHtml = "";
portContent.forEach(function (item) {
    modalIds.push("#" + item.guid);
    portHtml += `
		<div class="col-sm-6 col-lg-4">
			<div class="card pfolio-card">
				<div class="img-thumbnail">
					<a class="card-pfolio-link" data-toggle="modal" href="#${item.guid}">
						<img class="img-fluid" src="${item.image}" alt="${item.alt}">
					</a>
					<p class="card-caption-text text-center text-truncate">
						${item.title}
					</p>
				</div>
			</div>
			<div id="${item.guid}" class="modal fade">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title">${item.title}</h5>
							<button type="button" class="close" data-dismiss="modal">
							<span>&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<img class="img-thumbnail modal-image" src="${item.image}" alt="${item.alt}">
							<p><strong>${item.date}</strong> - ${item.caption}</p>
							<a role="button" class="my-btn" href="${item.link}" target="_blank">Visit Page</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;
});


$(document).ready(function () {
    // set content of #portfolio-row
    document.getElementById("portfolio-row").innerHTML = portHtml;
    // set content of #blog-row
    document.getElementById("blog-row").innerHTML = blogHtml;
    // enable scrollspy
    $("body").scrollspy({target: ".navbar"})
    // scroll for navbar links
    $(".navbar a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // collape navbar on click
    $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    // external link to modal
    if (window.location.hash && modalIds.includes(window.location.hash)) {
        $(window.location.hash).modal();
    }
});
