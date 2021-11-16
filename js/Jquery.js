$(document).ready(function() {
    // Linking START
    $("#AppointmentPageGo").on("click", function(e) {
        // alert("hi");
        // e.preventDefault();
    });
    // Linking END
    // Focusout removing blur on the check box START
    $(".selectHeight").height($(window).height());

    $(".custom-control-input").on("click", function() {
        $(".custom-control-input").css("outline", "0  !important");
    });
    // Focusout removing blur on the check box    END
    // without content MEANS ONLY SIDEBAR and NAVIGATION BAR  START
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 10) {
            // this refers to window
            $(".bg-shadowsOfCol-md-9").css("box-shadow", "0px 10px 10px -15px #111");
        } else {
            $(".bg-shadowsOfCol-md-9").css("box-shadow", "none");
        }
    });

    // if ($(window).height() < $(".mobes").height() + 120) {
    //   //this element is overflowing on the y axis
    //   var scrolling = $(".mobes").height() + 120 - $(window).height();
    //   $(".mobes").mousemove(function (event) {
    //     if (event.clientY - 190 <= scrolling) {
    //       $(".heyThere").html($(".mobes").height());
    //       var thissHeight = `-${event.clientY}`;
    //       $(".mobes").css("margin-top", Number(thissHeight) + 280);
    //     }
    //   });
    // }

    var displayWindowSize10 = () => {
        $(".fixingLogoWidth").css("width", $(".widthLogos").width());
        addOneRemoveOne(".contentsssTime", "px-5", "px-2");
        $(".imageCoverSett").css("width", "100%");
        if ($(".YesYouCanRunProfile").length) ProfileDpAndName();
        if ($(".MainContainersSetThat").length) {
            $(".MainContainersSetThat").css(
                "max-width",
                $(".MainContainersSetToIt").width()
            );
        }

        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height() - 115);
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css(
        //     "height",
        //     $("body").height() - $(".Thisbar").height()
        //   );
        // }
    };

    window.addEventListener("resize", displayWindowSize10);
    $(".tabView-col-3").css("background-color", "white");
    $(".tabView-col-3").css("height", $(window).height());
    if ($(".contentsss").height() + 115 < $(window).height()) {
        $(".contentsss").css("background-color", "white");
        $(".contentsss").css("height", $(window).height() - 115);
    } else {
        $(".contentsss").css("background-color", "white");
    }
    $(".contentsss").css("height", $("body").height() - 115);

    $(".ActiveNavbar").removeClass("mmm");
    $(".ActiveNavbar").addClass("mmm");
    $(".ActiveNavbar").children("p").removeClass("sidebar-text");
    $(".ActiveNavbar").children("p").addClass("sidebar-text");

    var src = $(".ActiveNavbar").children("img").attr("src");
    if ($(".ActiveNavbar").length) {
        var srcChanging = src.split(".");
        let newSrcs = [];
        for (var a = 0; a <= srcChanging[0].length - 1; a++) {
            newSrcs.push(srcChanging[0][a]);
        }
        newSrcs[newSrcs.length - 1] = "2";
        purpleIconPath = newSrcs.join("");
        purpleIconShow = purpleIconPath + "." + srcChanging[1];
        $(".ActiveNavbar").children("img").attr("src", purpleIconShow);
    }
    // $(".HomeGo").on("click", function () {
    //   window.open("Home.html", "_self");
    // });

    // without content MEANS ONLY SIDEBAR and NAVIGATION BAR END

    // Verification START

    var mq12 = window.matchMedia("(max-width: 4200px)");
    var mq13 = window.matchMedia("(min-width: 1571px)");
    var mq14 = window.matchMedia("(max-width: 995px)");
    var mq15 = window.matchMedia("(min-width: 668px)");
    var mq16 = window.matchMedia("(max-width: 668px)");
    var mq17 = window.matchMedia("(min-width: 442px)");
    var mq18 = window.matchMedia("(min-width: 340px)");
    var mq19 = window.matchMedia("(max-width: 442px)");
    var mq82 = window.matchMedia("(max-width: 767px)");
    if (mq12.matches && mq13.matches) {
        // window width is at less than 280px
        if ($(".add-it-w50").hasClass("w-100")) {
            $(".add-it-w50").removeClass("w-100");
        }
        $(".add-it-w50").addClass("w-50");
    } else if (mq14.matches && mq15.matches) {
        if ($(".add-it-w50").hasClass("w-100")) {
            $(".add-it-w50").removeClass("w-100");
        }
        if ($(".add-it-w50").hasClass("w-75")) {
            $(".add-it-w50").removeClass("w-75");
        }
        $(".add-it-w50").addClass("w-50");
    } else if (mq16.matches && mq17.matches) {
        if ($(".add-it-w50").hasClass("w-100")) {
            $(".add-it-w50").removeClass("w-100");
        }
        if ($(".add-it-w50").hasClass("w-50")) {
            $(".add-it-w50").removeClass("w-50");
        }
        $(".add-it-w50").addClass("w-75");
    } else if (mq18.matches && mq19.matches) {
        if ($(".add-it-w50").hasClass("w-50")) {
            $(".add-it-w50").removeClass("w-50");
        }
        if ($(".add-it-w50").hasClass("w-75")) {
            $(".add-it-w50").removeClass("w-75");
        }
        $(".add-it-w50").addClass("w-100");
    } else {
        $(".add-it-w50").removeClass("w-50");
        $(".add-it-w50").addClass("w-100");
    }

    var displayWindowSize10 = () => {
        if (mq12.matches && mq13.matches) {
            // window width is at less than 280px
            if ($(".add-it-w50").hasClass("w-100")) {
                $(".add-it-w50").removeClass("w-100");
            }
            $(".add-it-w50").addClass("w-50");
        } else if (mq14.matches && mq15.matches) {
            if ($(".add-it-w50").hasClass("w-100")) {
                $(".add-it-w50").removeClass("w-100");
            }
            if ($(".add-it-w50").hasClass("w-75")) {
                $(".add-it-w50").removeClass("w-75");
            }
            $(".add-it-w50").addClass("w-50");
        } else if (mq16.matches && mq17.matches) {
            if ($(".add-it-w50").hasClass("w-100")) {
                $(".add-it-w50").removeClass("w-100");
            }
            if ($(".add-it-w50").hasClass("w-50")) {
                $(".add-it-w50").removeClass("w-50");
            }
            $(".add-it-w50").addClass("w-75");
        } else {
            $(".add-it-w50").removeClass("w-50");
            $(".add-it-w50").addClass("w-100");
        }
    };
    window.addEventListener("resize", displayWindowSize10);
    $(".abcds").css("height", "657px");
    // $(".abcds").css("background-color", "red");
    // Verification END

    // Appointment START

    $(".HistoryAppointments").on("click", function() {
        $(".Todays").addClass("d-nones");
        $(".Historys").removeClass("d-nones");
        $(".Upcomings").addClass("d-nones");
        $(this).children("div").removeClass("NotActiveAppointments");

        $(this).children("div").removeClass("NotActiveAppointments");
        $(this).children("div").addClass("AciveAppointment");
        if ($(".TodayAppointments").children("div").hasClass("AciveAppointment")) {
            $(".TodayAppointments").children("div").removeClass("AciveAppointment");
            $(".TodayAppointments").children("div").addClass("NotActiveAppointments");
        }
        if (
            $(".UpcomingAppointments").children("div").hasClass("AciveAppointment")
        ) {
            $(".UpcomingAppointments")
                .children("div")
                .removeClass("AciveAppointment");
            $(".UpcomingAppointments")
                .children("div")
                .addClass("NotActiveAppointments");
        }
        // $(".tabView-col-3").css("background-color", "white");
        // $(".tabView-col-3").css("height", $(window).height());
        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height() - 115);
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   // $(".contentsss").css("height", 0);
        //   $(".contentsss").css("height", $("body").height() - 115);
        // }
        // $(".tabView-col-3").css("background-color", "white");
        // $(".tabView-col-3").css("height", $(window).height());
        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height());
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css(
        //     "height",
        //     $("body").height() - distanceOfElementFromTop(".contentsss")
        //   );
        // }
    });
    $(".TodayAppointments").on("click", function() {
        $(".Todays").removeClass("d-nones");
        $(".Historys").addClass("d-nones");
        $(".Upcomings").addClass("d-nones");
        $(this).children("div").removeClass("NotActiveAppointments");
        $(this).children("div").addClass("AciveAppointment");
        if (
            $(".HistoryAppointments").children("div").hasClass("AciveAppointment")
        ) {
            $(".HistoryAppointments").children("div").removeClass("AciveAppointment");
            $(".HistoryAppointments")
                .children("div")
                .addClass("NotActiveAppointments");
        }
        if (
            $(".UpcomingAppointments").children("div").hasClass("AciveAppointment")
        ) {
            $(".UpcomingAppointments")
                .children("div")
                .removeClass("AciveAppointment");
            $(".UpcomingAppointments")
                .children("div")
                .addClass("NotActiveAppointments");
        }
        $(this).children("div").removeClass("NotActiveAppointments");
        $(this).children("div").addClass("AciveAppointment");
        // $(".tabView-col-3").css("background-color", "white");
        // $(".tabView-col-3").css("height", $(window).height());
        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height() - 115);
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   // $(".contentsss").css("height", 0);
        //   $(".contentsss").css("height", $("body").height() - 115);
        // }
        // $(".tabView-col-3").css("background-color", "white");
        // $(".tabView-col-3").css("height", $(window).height());
        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height());
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css(
        //     "height",
        //     $("body").height() - distanceOfElementFromTop(".contentsss")
        //   );
        // }
    });
    $(".UpcomingAppointments").on("click", function() {
        $(".Todays").addClass("d-nones");
        $(".Historys").addClass("d-nones");
        $(".Upcomings").removeClass("d-nones");
        $(this).children("div").removeClass("NotActiveAppointments");
        $(this).children("div").addClass("AciveAppointment");
        if (
            $(".HistoryAppointments").children("div").hasClass("AciveAppointment")
        ) {
            $(".HistoryAppointments").children("div").removeClass("AciveAppointment");
            $(".HistoryAppointments")
                .children("div")
                .addClass("NotActiveAppointments");
        }
        if ($(".TodayAppointments").children("div").hasClass("AciveAppointment")) {
            $(".TodayAppointments").children("div").removeClass("AciveAppointment");
            $(".TodayAppointments").children("div").addClass("NotActiveAppointments");
        }
        $(this).children("div").removeClass("NotActiveAppointments");
        $(this).children("div").addClass("AciveAppointment");
        // $(".tabView-col-3").css("background-color", "white");
        // $(".tabView-col-3").css("height", $(window).height());
        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height() - 115);
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   // $(".contentsss").css("height", 0);
        //   $(".contentsss").css("height", $("body").height() - 115);
        // }
        // $(".tabView-col-3").css("background-color", "white");
        // $(".tabView-col-3").css("height", $(window).height());
        // if ($(".contentsss").height() + 115 < $(window).height()) {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css("height", $(window).height());
        // } else {
        //   $(".contentsss").css("background-color", "white");
        //   $(".contentsss").css(
        //     "height",
        //     $("body").height() - distanceOfElementFromTop(".contentsss")
        //   );
        // }
    });

});

    // Appointment COMPLETE MODAL START in Appointment page

    var mq = window.matchMedia("(max-width: 741px)");
    var mq2 = window.matchMedia("(max-width: 1342px)");
    var mq4 = window.matchMedia("(min-width: 310px)");
    var mq3 = window.matchMedia("(max-width: 309px)");
    var mq5 = window.matchMedia("(min-width: 100px)");
    var mq6 = window.matchMedia("(max-width: 461px)");
    // This functioin returns Distance of Any element with respect to TOP
    var distanceOfElementFromTop = function(element) {
        var elem = document.querySelector(`${element}`);
        // Set our distance placeholder
        var distance = 0;
        // Loop up the DOM
        do {
            // Increase our distance counter
            distance += elem.offsetTop;
            // Set the element to it's parent
            elem = elem.offsetParent;
        } while (elem);
        distance = distance < 0 ? 0 : distance;
        return distance;
    };
    var distanceOfElementFromLeft = function(element) {
        var elem = document.querySelector(`${element}`);
        // Set our distance placeholder
        var distance = 0;
        // Loop up the DOM
        do {
            // Increase our distance counter
            distance += elem.offsetLeft;
            // Set the element to it's parent
            elem = elem.offsetParent;
        } while (elem);
        distance = distance < 0 ? 0 : distance;
        return distance;
    };

    // This Function remove first two parameter values and then add the third one as a class
    var removeTwoAddOne = function(remove1, remove2, add1) {
        if ($(".changeSizeOfbuttonsWidth").hasClass(`${remove1}`)) {
            $(".changeSizeOfbuttonsWidth").removeClass(`${remove1}`);
        }
        if ($(".changeSizeOfbuttonsWidth").hasClass(`${remove2}`)) {
            $(".changeSizeOfbuttonsWidth").removeClass(`${remove2}`);
        }
        $(".changeSizeOfbuttonsWidth").addClass(`${add1}`);
    };
    var ChangeInputDateLayout = function() {
        if (mq6.matches) {
            $(".changeActions").removeClass("d-flex");
            $(".changeActions").addClass("d-column-flex");
            $(".changeTo100").removeClass("w-50");
            $(".changeTo100").addClass("w-100");
            // removeTwoAddOne('w-50', 'w-100', 'w-75');
        } else {
            if ($(".changeActions").hasClass("d-column-flex")) {
                $(".changeActions").removeClass("d-column-flex");
                $(".changeActions").addClass("d-flex");
                $(".changeTo100").addClass("w-50");
                $(".changeTo100").removeClass("w-100");
            }
        }
    };
    var SettingTheHeightOfModal = function(modalId, distance) {
        if (mq.matches) {
            // window width is at less than 280px
            if ($(`${modalId}`).hasClass("w-50")) {
                $(`${modalId}`).removeClass("w-50");
                $(`${modalId}`).addClass("w-100");
            }
            $(`${modalId}`).css("margin-top", distance + 15);
        } else {
            if ($(`${modalId}`).hasClass("w-100")) {
                $(`${modalId}`).removeClass("w-100");
                $(`${modalId}`).addClass("w-50");
            }
            $(`${modalId}`).css("margin-top", distance);
        }
    };

    // CALNDER MODAL JS START In Appointment page
    ChangeInputDateLayout();
    if (mq2.matches && mq4.matches) {
        removeTwoAddOne("w-50", "w-100", "w-75");
    }
    if (mq5.matches && mq3.matches) {
        removeTwoAddOne("w-50", "w-75", "w-100");
    }
    $(".CalenderShow").on("click", function() {
        $("#myModal3").modal("hide");
        let distance = distanceOfElementFromTop(".CalenderShow");
        SettingTheHeightOfModal("#myModal2", distance);
        var displayWindowSize = () => {
            ChangeInputDateLayout();
            SettingTheHeightOfModal("#myModal2", distance);
            SettingTheHeightOfModal("#myModal3", distance);
            if (mq2.matches && mq4.matches) {
                removeTwoAddOne("w-50", "w-100", "w-75");
            }
            if (mq5.matches && mq3.matches) {
                removeTwoAddOne("w-50", "w-75", "w-100");
            }
        };
        window.addEventListener("resize", displayWindowSize);
    });
    // CALNDER MODAL JS END In Appointment page

    // APPOINTMENTS MODAL JS START In Appointment page

    $(".AppShow").on("click", function() {
        $("#myModal2").modal("hide");
        let distance = distanceOfElementFromTop(".AppShow");
        SettingTheHeightOfModal("#myModal3", distance);
    });
    // APPOINTMENTS MODAL JS END In Appointment page
    // Close Modals START
    var hideModal = function(modalId) {
        if ($(`${modalId}`).is(":visible")) {
            $(`${modalId}`).modal("hide");
        }
    };

    $("#myModal").on("click", function() {
        hideModal("#myModal2");
        hideModal("#myModal3");
    });
    // Close Modals END

    // APPOINTMENT COMPLETE MODAL JS END In Appointment page

    // Appointment END

    // Time availibility START
    var mq10 = window.matchMedia("(min-width:200px)");
    var mq11 = window.matchMedia("(max-width:376px)");

    function addOneRemoveOne(targetClass, oneClass, secondClass) {
        if (mq10.matches && mq11.matches) {
            if ($(targetClass).hasClass(oneClass)) {
                $(targetClass).removeClass(oneClass);
                $(targetClass).addClass(secondClass);
            }
        } else {
            if ($(targetClass).hasClass(secondClass)) {
                $(targetClass).removeClass(secondClass);
                $(targetClass).addClass(oneClass);
            }
        }
    }

    addOneRemoveOne(".contentsssTime", "px-5", "px-2");
    // Time availibility END
    // Profile START
    $(".Profile-name").width($(".Profile-pic").width());
    // ProfileDpAndName();
    if ($(".bioShow").length) {
        var bioText = document.querySelector(".bioShow").innerHTML;
        document.getElementById("BIO-HERE").value = bioText;
    }

    $(".yes").on("click", function() {
        var Updated = document.getElementById("BIO-HERE").value;
        document.querySelector(".bioShow").innerHTML = Updated;
    });
    $(".fixingLogoWidth").css("width", $(".widthLogos").width());
    var ProfileDpAndName = function() {
        $(".widthLogos").addClass("WidthCheck");
        $(".imageCoverSett").css("width", $(window).width());
        var coverHeightProfile = $(".imageCoverSett").height();
        $(".SportsInProfile").height(coverHeightProfile);
        $(".TimeAvailibility").css("top", coverHeightProfile + 20);
        var widthOfSidebar = $(".WidthCheck").width();
        var distanceFromLeftDp = distanceOfElementFromLeft(".profilePicEdit");
        // var distanceFromTopDp = distanceOfElementFromTop(".profilePicEdit");
        // console.log(distanceFromLeftDp);
        // $('.Profile-name').css('position', 'absolute !important');
        $(".Profile-name").css("left", distanceFromLeftDp - widthOfSidebar - 8);
        // $(".Profile-name").css(
        //   "top",
        //   distanceFromTopDp + $(".profilePicEdit").height() + 10
        // );
        // console.log("hiiii");
    };
    if ($(".YesYouCanRunProfile").length) ProfileDpAndName();
    // console.log(ProfileDpAndName());
    // Profile END

    // Reviews START
    var mq101 = window.matchMedia("(max-width: 360px)");

    if (mq101.matches) {
        // window width is at less than 280px
        // $(".MainReviewTolalDiv").removeClass("d-flex");
        $(".MainReviewTolalDiv").addClass("flex-column");
    } else {
        $(".MainReviewTolalDiv").removeClass("flex-column");
        // $(".MainReviewTolalDiv").addClass("d-flex");
        // window width is greater than 570px
    }
    var mq210 = window.matchMedia("(max-width: 360px)");
    if (mq210.matches) {
        // window width is at less than 280px
        $(".changeToW100").removeClass("w-50");
        $(".changeToW100").addClass("w-100");
    } else {
        $(".changeToW100").removeClass("w-100");
        $(".changeToW100").addClass("w-50");
        // window width is greater than 570px
    }
    var displayWindowSize = () => {
        var mq101 = window.matchMedia("(max-width: 360px)");
        if (mq101.matches) {
            // window width is at less than 280px
            // $(".MainReviewTolalDiv").removeClass("d-flex");
            $(".MainReviewTolalDiv").addClass("flex-column");
        } else {
            $(".MainReviewTolalDiv").removeClass("flex-column");
            // $(".MainReviewTolalDiv").addClass("d-flex");
            // window width is greater than 570px
        }
        var mq210 = window.matchMedia("(max-width: 360px)");
        if (mq210.matches) {
            // window width is at less than 280px
            $(".changeToW100").removeClass("w-50");
            $(".changeToW100").addClass("w-100");
        } else {
            $(".changeToW100").removeClass("w-100");
            $(".changeToW100").addClass("w-50");
            // window width is greater than 570px
        }
    };
    window.addEventListener("resize", displayWindowSize);

    // Reviews END

    // Reviews USer END
    if ($(".Eye").length) {
        $(".Eye").on("click", function() {
            // console.log($(this).parent().parent().attr('style').split("url('")[1].split("');")[0]);
            console.log(
                $(this)
                .parent()
                .parent()
                .children("video")
                .children("source")
                .attr("src")
                .split("/")[1]
            );
            var videoName = $(this)
                .parent()
                .parent()
                .children("video")
                .children("source")
                .attr("src")
                .split("/")[1]
                .toString();
            var videoPath = `video/${videoName}`.toString();
            $(".SetpicView")
                .children()
                .children()
                .children()
                .children("source")
                .attr("src", videoPath);
            $(".SetpicView").children().children().children("video")[0].load();
            $("#PicPreview").modal("show");
            $(".SetpicView").children().children().children("video")[0].play();

            // var imgPath = $(this)
            //   .parent()
            //   .parent()
            //   .attr("style")
            //   .split("url('")[1]
            //   .split("');")[0]
            //   .toString();
            // $(".SetpicView").children("img").attr("src", imgPath.toString());
            // $("#PicPreview").modal("show");
        });
    }
    if ($(".MainContainersSetThat").length)
        $(".MainContainersSetThat").css(
            "max-width",
            $(".MainContainersSetToIt").width()
        );

    // Reviews User END
    // console.log($(window).height() - distanceOfElementFromTop(".mobes"));
    if ($(".mobes").length) {
        $(".mobes").height($(window).height() - distanceOfElementFromTop(".mobes"));
    }

    // Appointment Details START
    // if ($(".detailsImageOfAppointment")) {
    //   $(".detailsImageOfAppointment").height(
    //     $(window).height() -
    //       distanceOfElementFromTop(".detailsImageOfAppointment")
    //   );
    // }
    $(".TimesInAppointmentDetails").width(
        $(".NamesInAppointmentDetails").width()
    );
    // if (mq82.matches) {
    //   $(".contentsss").css({ height: "" });
    // }
    // Appointment Details END
});