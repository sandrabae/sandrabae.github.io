Gallery = function(_parentElement, _data, _attrConfig) {
  this.data = _data;
  this.attrConfig = _attrConfig;

  this.settings = {
    parentElement: _parentElement,
  }

  this.initVis();
}


Gallery.prototype.initVis = function() {
  var vis = this;

  vis.wrangleDataAndUpdate();
}

Gallery.prototype.wrangleDataAndUpdate = function() {
  var vis = this;
  vis.data.nodes = vis.data.nodes.sort((a, b) => (a.group < b.group) ? -1 : ((a.group > b.group) ? 1 : 0));
  vis.updateVis();

}

Gallery.prototype.updateVis = function() {
  var vis = this;

  vis.my_galleryitems = d3.select("#" + vis.settings.parentElement).selectAll(".gallery-item-block")
    .data(vis.data.nodes);

  vis.my_galleryitems.exit().remove();

  var galleryItem_enter = vis.my_galleryitems.enter().append("div")
    .attr("class", "gallery-item-block uk-height-small");

  galleryItem_enter.merge(vis.my_galleryitems)
    .html(function(d) {
      var methodThumbnail = '<div class="uk-cover-containerx gallery-item__thumbnail"><img src="./images/' + d.figure + '" alt=""></div>';

      return '<div class="gallery-item uk-card uk-card-default uk-card-small uk-height-small" data-method="' + d.id + '" data-method-id="' + d.id + '" id="g-item' + d.number + '">' +
        '<div class="gallery-item__header uk-padding-small">' + d.id + '</div>' +
        methodThumbnail +
        '</div>';
    })
    .on('mouseover', function(d) {
      d3.select("#g-item" + d.number).style('border-style', 'solid').style('border-width', 'thin').style('border-color', 'grey');
    })
    .on('mouseout', function(d) {
      d3.select("#g-item" + d.number).style('border-style', 'none');
    })
    .on('click', function(d) {
      showLocomotionModal(d.id, d, vis.attrConfig)
    });
}