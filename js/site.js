//////////////////////////////////////////////////////
// Functions
//////////////////////////////////////////////////////

// function setAspectRatio() {
// 	$(".lazy").each(function() {
//         var img = $(this);
//         var ratio = img.data('ratio');
//         var paddingBottom = String(1/ratio*100)+"%";
//         $(this).parent().css({'padding-bottom': paddingBottom, "height": "0"});
// 	});
// }


function openInNewWindow() {
  $(".fullpost").children("p").children("a").attr("target", "_blank");
}


///// Swap images on the homepage

function homepageHover() {
  $(".imageGridItem").hover(function() {
    $(".imageGridItem").not(this).toggleClass("deactive");
    var itemNum = $(this).attr("itemnum");
    $(".itemHeadline[itemnum|=" + itemNum + "]").toggleClass("active");
  }, function() {
    $(".imageGridItem").not(this).toggleClass("deactive");
    var itemNum = $(this).attr("itemnum");
    $(".itemHeadline[itemnum|=" + itemNum + "]").toggleClass("active");
  });

  $(".imageGridRow").hover(function() {
    $(".mainHeadline").toggleClass("deactive");
  }, function() {
    $(".mainHeadline").toggleClass("deactive");
  });
}

function verticalHeight() {
  $(window).resize(function() {
    windowHeight = $(window).height();
    $(".fullverticalheight").attr("height", windowHeight);
  });
}


///// Scroll back to the top of the page

function backToTop() {
  $('html,body').animate({
    scrollTop: 0
  }, 500, "easeOutCubic");
}


///// Expand and Collpase the Posts on the Process Journal

function readmorepost() {
  $(".processPost .image-container").click(function() {
    $(this).parent().toggleClass("expanded");
    $('html,body').animate({
      scrollTop: $(this).offset().top - 30
    }, 500, "easeOutCubic");
  });
  $(".readmore").click(function() {
    $(this).parent().parent().toggleClass("expanded");
  });
  $(".readmore").hover(function() {
    $(this).toggleClass("active");
  });

}


///// Bring the Navigation Up

function toggleNavigation() {
  $(".navIcon svg").click(function() {
    navigationFunctions();
    checkWhite();
    // document.getElementById("name_mobile").style.color = "#050505";
  });

  function checkWhite() {
    let nav = document.getElementsByTagName("nav-component")[0];
    let h1 = document.getElementById("name_mobile");
    let h1Color = window.getComputedStyle(h1).color;

    if (nav.classList.contains("white") && h1Color == "rgb(255, 255, 255)") {
      document.getElementById("name_mobile").style.color = "#050505";
    } else if (nav.classList.contains("white") && h1Color == "rgb(5, 5, 5)") {
      document.getElementById("name_mobile").style.color = "#FFFFFF";
    }
  }

  function navigationFunctions() {
    var bodyHeight = document.scrollHeight;
    var windowHeight = $(window).height();
    if (bodyHeight > windowHeight) {
      $("body").toggleClass("active");
    }
    $("nav").toggleClass("active");
    $(".nav-bar").toggleClass("active");
    $("nav .subfooter").removeClass("active");
    $("nav .footer").removeClass("active");
  }
}


///// Email on the nav to popup

function toggleEmailSignup() {
  $(".emailsignupbutton").click(function() {
    $("nav .subfooter").toggleClass("active");
    $("nav .footer").toggleClass("active");
  });
}

///// Project Hover

function projectImagesMatchList() {

  var projectListArray = [];

  var projectListRow = $("#projectTable").find("tbody").find("tr");
  $(projectListRow).each(function(i) {
    projectListRow = {
      index: i,
      projectsortnum: $(this).attr("projectsortnum")
    };
    projectListArray[projectListArray.length] = projectListRow;
  });

  var projectImageArray = [];

  $.each(projectListArray, function(i) {

    var projectImageItem = $("ol").find("[projectsortnum='" + projectListArray[i].projectsortnum + "']");
    projectImageArray[i] = projectImageItem;

  });
  $("ol#projectImageList").append(projectImageArray);
  $("#projectImageList").animate({
    opacity: 1
  }, 500, "easeInOutCubic");
  $("#projectTable tbody").animate({
    opacity: 1
  }, 500, "easeInOutCubic");

}

///// When hovering over project items the thing interacts

function projectsHover() {
  if ($(window).width() > 767) {
    var turnOnScrollInterval;
    $(".projectList tbody tr").hover(function() {
      $(this).toggleClass("active");
      var projectNum = $(this).attr("projectsortnum");
      $(".projectImages li").clearQueue();
      $(".projectImages li").not("li[projectsortnum|=" + projectNum + "]").animate({
        opacity: 0.15
      }, 500, "easeOutCubic");
      clearInterval(turnOnScrollInterval);
      $(".projectImages").off("scroll");
      var targetParentPosition = $(".projectImages").scrollTop() + $("li[projectsortnum|=" + projectNum + "]").position().top - ($(".projectImages").height() / 2) + ($("li[projectsortnum|=" + projectNum + "]").outerHeight() / 2);
      $(".projectImages").clearQueue();
      $(".projectImages").animate({
        scrollTop: targetParentPosition
      }, 1250, "easeOutCubic");
    }, function() {
      $(this).toggleClass("active");
      var projectNum = $(this).attr("projectsortnum");
      $(".projectImages li").clearQueue();
      $(".projectImages li").not("li[projectsortnum|=" + projectNum + "]").animate({
        opacity: 1
      }, 500, "easeOutCubic");
      turnOnScrollInterval = setInterval(function() {
        $(".projectImages").on("scroll", setTargetPosition);
      }, 1250);
    });

    $(".projectImages li").hover(function() {
      $(".projectImages li").clearQueue();
      $(".projectImages li").not(this).animate({
        opacity: 0.2
      }, 500, "easeOutCubic");
      var projectNum = $(this).attr("projectsortnum");
      $("tr[projectsortnum|=" + projectNum + "]").toggleClass("active");
      $(".projectList tbody tr").clearQueue();
      $(".projectList tbody tr").not("tr[projectsortnum|=" + projectNum + "]").animate({
        opacity: 0.4
      }, 500, "easeOutCubic");
    }, function() {
      $(".projectImages li").clearQueue();
      $(".projectImages li").not(this).animate({
        opacity: 1
      }, 500, "easeOutCubic");
      var projectNum = $(this).attr("projectsortnum");
      $("tr[projectsortnum|=" + projectNum + "]").toggleClass("active");
      $(".projectList tbody tr").clearQueue();
      $(".projectList tbody tr").not("tr[projectsortnum|=" + projectNum + "]").animate({
        opacity: 1
      }, 500, "easeOutCubic");
    });
  }
}


///// Project List Scroll to Position


var targetSetPosition = 0;
var sourceSetPosition = 0;

function setPositions() {
  targetSetPosition = $(".projectImages").scrollTop();
  sourceSetPosition = $(".projectList").scrollTop();
}

function setTargetPosition() {
  var sourceContentHeight = $(".projectImages").prop('scrollHeight');
  var sourceHeight = $(".projectImages").outerHeight();
  var sourceCurrentPosition = $(".projectImages").scrollTop();
  var targetContentHeight = $(".projectList").prop('scrollHeight');
  var targetHeight = $(".projectList").outerHeight();
  var targetPosition = Math.round((targetContentHeight - targetSetPosition - targetHeight) * (sourceCurrentPosition - sourceSetPosition) / (sourceContentHeight - sourceSetPosition - sourceHeight));

  $(".projectList").scrollTop(targetPosition);
}

function projectFunctions() {
  projectsHover();

  // 	Sort Table Automatically
  var projectTableFunc = $("#projectTable").stupidtable();

  projectTableFunc.on("aftertablesort", function(event, data) {
    var th = $(this).find("th");
    th.find(".arrow").removeClass("active");
    var dir = $.fn.stupidtable.dir;
    var arrow = data.direction === dir.ASC ? "&darr;" : "&uarr;";
    th.eq(data.column).find(".arrow").replaceWith("<span class='arrow active'>&nbsp;" + arrow + "</span>");
    projectImagesMatchList();
  });

  $(".projectImages").scroll(function() {
    setTargetPosition();
  });

  $(".projectImages").mouseover(function() {
    $(".projectImages").clearQueue();
    $(".projectImages").stop();
  });

}

//////////////////////////////////////////////////////
// Event Handlers
//////////////////////////////////////////////////////

$(document).ready(function() {

  // 	Global Function
  toggleNavigation();
  toggleEmailSignup();

  $(".backToTop").click(function() {
    backToTop();
  });

  $(".clickable-row").click(function() {
    var newLocation = $(this).attr("data-href");
    window.location = newLocation;
  });

});