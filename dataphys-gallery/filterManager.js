FilterManager = function(_defaultConfig, _data) {
  this.filters = _defaultConfig.attributes;
  this.data = _data;
  this.settings = {
    contextHeight: 50,
    margin: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    padding: {
      left: 0,
      right: 5
    }
  };

  this.activeFilters = [];

  this.updateFilters();
}

FilterManager.prototype.updateFilters = function() {
  var manager = this;

  manager.filters = manager.filters.filter(function(d) {
    return d.filter == true;
  });

  manager.nestedFilters = d3.nest()
    .key(function(d) {
      return d.parent;
    })
    .entries(manager.filters);

  $("#filter-controls").empty();

  manager.nestedFilters.forEach(function(filterGroup) {

    // Append new accordion child element for each filter group
    $("#filter-controls").append('<div id="' + filterGroup.key + '"></div><hr>');

    filterGroup.values.forEach(function(filterElem) {
      switch (filterElem.type) {
        case "range_slider":
          manager.createRangeSlider(filterElem, filterGroup.key);
          break;
        case "multi_select":
          manager.createMultiSelect(filterElem, filterGroup.key);
          break;
        case "checkbox":
          manager.createCheckboxFilter(filterElem, filterGroup.key);
          break;
        default:
          console.log("do nothing");
      }
    });
  });
}

FilterManager.prototype.createMultiSelect = function(filterElem, filterGroup) {
  var manager = this;

  var multiSelectButtons = "";

  filterElem.values.forEach(function(filterOptions) {
    var activeClass = filterOptions.checked ? "active" : "";
    multiSelectButtons += '<button class="uk-button uk-button-small uk-width-1-1 ' + activeClass + '" data-value="' + filterOptions.value + '" style="line-height: 1.1; padding-top: 2px; padding-bottom: 2px;  word-break: break-all;"><span style="margin: 3px;">' + filterOptions.title + '</span></button>';
  });

  var titleWidth = filterElem.customWidth ? filterElem.customWidth.title : "uk-width-1-1";
  var uiWidth = filterElem.customWidth ? filterElem.customWidth.ui : "uk-width-3-6";
  var customizeMargins = "";
  var filterTitle = filterElem.title;
  var valueMatching = filterElem.valueMatching ? 'data-matching="' + filterElem.valueMatching + '"' : "";

  console.log(filterElem.values.length);
  // var filterResult = '<div class="filter filter-multi-select" uk-grid>\
  //   <div class="' + titleWidth + ' filter-title uk-margin-right">' + filterTitle + '</div>\
  //   <div class="' + uiWidth + ' uk-button-group filter-button-group uk-child-width-1-' + filterElem.values.length + ' ' + customizeMargins + ' " uk-grid-collapse uk-grid data-filter="' + filterElem.key + '" ' + valueMatching + '>' + multiSelectButtons + '</div>\
  // </div>';
  var filterResult = '<div class="filter filter-multi-select" uk-grid>\
    <div class="' + titleWidth + ' filter-title uk-margin-small-right">' + filterTitle + '</div>\
    <div class="' + uiWidth + ' uk-button-group uk-width-1-1 filter-button-group uk-margin-small' + customizeMargins + ' " uk-grid-collapse data-filter="' +
    filterElem.key + '" ' + valueMatching + '>' + multiSelectButtons + '</div>\
  </div>';

  $('[id="' + filterGroup + '"]').append(filterResult);
}

FilterManager.prototype.createCheckboxFilter = function(filterElem, filterGroup) {
  var manager = this;

  var checkboxFilterDomain = manager.data.nodes.map(d => d[filterElem.key]);
  checkboxFilterDomain = [].concat.apply([], checkboxFilterDomain);
  checkboxFilterDomain = [...new Set(checkboxFilterDomain)].sort();

  var checkboxes = "";

  var elementsPerColumn = checkboxFilterDomain.length / 2;

  checkboxFilterDomain = checkboxFilterDomain.filter(function(d) {
    return d != null;
  });

  checkboxFilterDomain.forEach(function(filterValue, index) {
    checkboxes += '<div><label class="filter-checkbox-label"><input class="uk-checkbox checkbox-small" value="' + filterValue + '" type="checkbox" checked> <span>' + filterValue + '</span></label></div>';
  });

  var filterResult = '<div class="filter filter-checkboxes filter-checkboxes-full" data-filter="' + filterElem.key + '"><div class="filter-title">' + filterElem.title + '</div><div class="uk-grid-small" uk-grid>' + checkboxes + '</div></div>';

  $('[id="' + filterGroup + '"]').append(filterResult);
}

FilterManager.prototype.createRangeSlider = function(filterElem, filterGroup) {
  var manager = this;


  methodsWYear = manager.data.nodes.filter(function(d) {
    return true;
  })

  if (filterElem.key == "year")
    manager.createFrequencyPlot(filterElem, filterGroup, methodsWYear);

  var rangeSliderDomain = d3.extent(methodsWYear, function(d) {
    return parseInt(d[filterElem.key])
  });

  var titleWidth = filterElem.customWidth ? filterElem.customWidth.title : "uk-width-1-6";
  var uiWidth = filterElem.customWidth ? filterElem.customWidth.ui : "uk-width-5-6";

  var filterResult = '<div id="filter-grid-' + filterElem.title.toLowerCase() + '" class="filter filter-range uk-grid-collapse" uk-grid>\
      <div class="' + titleWidth + ' filter-title">' + filterElem.title + '</div>' +
    '<div class="' + uiWidth + '">' +
    '<div class="uk-width-expand" id="range-slider-' + filterElem.key + '"></div>' +
    '</div>\
    </div>';

  $('[id="' + filterGroup + '"]').append(filterResult);

  var sliderContainer = document.getElementById("range-slider-" + filterElem.key);

  var slider = noUiSlider.create(sliderContainer, {
    start: rangeSliderDomain,
    behaviour: 'drag-tap',
    connect: true,
    tooltips: true,
    step: 1,
    range: {
      'min': rangeSliderDomain[0],
      'max': rangeSliderDomain[1]
    },
    format: wNumb({
      decimals: 0
    })
  });

  slider.on('update', function(values, handle) {
    $(sliderContainer).closest(".filter").find(".filter-range-input-min").val(parseInt(values[0]));
    $(sliderContainer).closest(".filter").find(".filter-range-input-max").val(parseInt(values[1]));
  });
  slider.on('end', function(values, handle) {
    if (values[0] == rangeSliderDomain[0] && rangeSliderDomain[1] == parseInt(values[1])) {
      fM.removeActiveFilter(filterElem.key);
    } else {
      fM.addActiveFilter(filterElem.key, [parseInt(values[0]), parseInt(values[1])]);
    }
    updateViews();
  });
}

FilterManager.prototype.createFrequencyPlot = function(filterElem, filterGroup, data) {
  manager = this;
  var divResult = '<div class="histogram uk-grid-collapse" uk-grid>\
      <div class="uk-width-1-4 filter-title"></div>\
      <div class="uk-width-3-4" id="year-histogram"></div>\
      </div>';
  $('[id="' + filterGroup + '"]').append(divResult);

  var parentElem = 'year-histogram';

  var width = document.getElementById(parentElem).clientWidth - manager.settings.margin.left - manager.settings.margin.right;

  manager.svgContainer = d3.select("#" + parentElem).append("svg")
    .attr("width", width)
    .attr("height", manager.settings.contextHeight + manager.settings.margin.top + manager.settings.margin.bottom);
  manager.scent = manager.svgContainer.append("g").attr("class", "scent")
    .attr("transform",
      "translate(" + manager.settings.margin.left + "," + manager.settings.margin.top + ")");



  var histogramDomain = d3.extent(data, function(d) {
    return parseInt(d[filterElem.key])
  });
  numTicks = histogramDomain[1] - histogramDomain[0];

  var x = d3.scaleLinear()
    .domain([histogramDomain[0], histogramDomain[1] + 1])
    .range([0, width]);
  manager.histogram = d3.histogram()
    .value(function(d) {
      return d[filterElem.key];
    })
    .domain(x.domain()) // then the domain of the graphic
    .thresholds(x.ticks(numTicks)); // then the numbers of bins

  var bins = manager.histogram(data);
  var y = d3.scaleLinear()
    .range([manager.settings.contextHeight, 0]);
  y.domain([0, d3.max(bins, function(d) {
    return d.length;
  })]); // d3.hist has to be called before the Y axis obviously

  // append the bar rectangles to the svg element
  manager.scent.selectAll("rect")
    .data(bins)
    .enter()
    .append("rect")
    .attr("x", 1)
    .attr("transform", function(d) {
      return "translate(" + x(d.x0) + "," + y(d.length) + ")";
    })
    .attr("width", function(d) {
      return x(d.x1) - x(d.x0);
    })
    .attr("height", function(d) {
      return manager.settings.contextHeight - y(d.length);
    })
    .style("fill", "grey");
}


FilterManager.prototype.addActiveFilter = function(activeFilterKey, selectedFilterValues) {
  var manager = this;

  for (let filterElem of manager.filters) {
    if (filterElem.key == activeFilterKey) {
      filterElem.active = true;
      filterElem.selectedValues = selectedFilterValues;
      manager.activeFilters = selectedFilterValues;
      break;
    }
  }
}

FilterManager.prototype.removeActiveFilter = function(oldFilterKey) {
  var manager = this;

  for (let filterElem of manager.filters) {
    if (filterElem.key == oldFilterKey) {
      filterElem.active = false;
      manager.activeFilters.pop(filterElem.selectedValues)
      filterElem.selectedValues = null;
      break;
    }
  }
}