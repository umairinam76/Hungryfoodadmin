$(document).ready(function() {
    // console.log();
    // $('#example').DataTable();

    if ($("#example").hasClass("table")) {
        $("#example").DataTable({
            responsive:true
        });
    }
    $(".oncolor").on("input", function() {
        $(".appencolo").val($(".oncolor").val());
    });


    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("fast");
    });
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });
    $(".oncolor2").on("input", function() {
        $(".appencolo2").val($(".oncolor2").val());
    });
    $(document).on("click", ".brand-toggle", function() {
        $(".brand-logo").toggle();
    });
    $(document).on("click", ".opa", function() {
        $(".modalssbackdrop").removeClass("d-none");
    });
    $(document).on("click", ".butas", function() {
        $(".modalssbackdrop").addClass("d-none");
    });

    $(document).on("click", ".abcd", function() {
        $(this).toggleClass("bgOran");
    });
    $(document).on("click", ".okaaxx", function() {
        alert("hjo");
    });
    $(document).on("click", ".okchange", function() {
        if ($(this).children("span").hasClass("down")) {
            $(this).children("span").addClass("up");
            $(this).children("span").removeClass("down");
            $(this).children("span").html('<i class="fas fa-chevron-up"></i>');
        } else if ($(this).children("span").hasClass("up")) {
            $(this).children("span").addClass("down");
            $(this).children("span").removeClass("up");
            $(this).children("span").html('<i class="fas fa-chevron-down"></i>');
        }
        if ($(".openchung").hasClass("d-none")) {
            $(".openchung").removeClass("d-none");
        } else {
            $(".openchung").addClass("d-none");
        }
    });
    $(document).on("click", ".addlocation", function() {
        $(".modalssbackdrop").removeClass("d-none");
        $("#addlocationModal").modal("show");
    });

    $(document).on("mouseenter", ".asd", function() {
        // console.log($(this).children('#videosModal'));
        // alert('aa');
        $(this).children("#videosModal").trigger("play");

        $(this).css("background", "");
        $(this).children("#videosModal").css("opacity", "1");
        $(this).children(".hhh").addClass("d-none");
        $(this).children("#videosModal").attr("controls", "");
    });
    $(document).on("mouseleave", ".asd", function() {
        // console.log($(this).children('#videosModal'));
        // alert('aa');
        $(this).children("#videosModal").trigger("pause");

        $(this).css(
            "background",
            "linear-gradient(to right,rgb(0, 0, 0, 1),rgb(0, 0, 0, 1))"
        );
        $(this).children("#videosModal").css("opacity", "0.5");
        $(this).children(".hhh").removeClass("d-none");
        $(this).children("#videosModal").removeAttr("controls");
    });

    $(document).on("click", ".edo", function() {
        $("#EditModal").modal("show");
        $(".modalssbackdrop").removeClass("d-none");
    });

    $(document).on("click", "#checks", function() {
        if ($(this).attr("checked")) {
            $(this).removeAttr("checked");
            console.log("removed");
        } else {
            $(this).attr("checked", "checked");
            console.log("added");
        }
    });

    $(document).on("click", ".okaa", function() {
        $(".modalssbackdrop").removeClass("d-none");
        $("#StaffModal").modal("show");
    });
    $(document).on("click", ".addStaff", function() {
        $(".modalssbackdrop").removeClass("d-none");
        $("#AddStaffModal").modal("show");
    });
 
    // open Modal and open blur
    // $(document).ready(function(){
    //     $('.modal').on('show.bs.modal',function(){
    //         if(!$(this).parent().is('body')){
    //             $(this).appendTo('body');
    //         }
    //         $(this).removeClass(),
    //         $('body').children().not(this).addClass('blur');
    //     })
    //     .on('hide.bs.modal',function(){
    //         var modal =$('.modal.show').not(this);
    //         modal = modal.eq(modal.lenght - 1);

    //         var bluritems = $('body').children().not(this)
    //         if(modal.lenght){
    //             modal.removeClass('blur')
    //         }else
    //         bluritems.removeClass('blur');
    //     })
    // })
  $('.modal').on('show.bs.modal',function(){
      if(!$(this).parent().is('body')){
          $(this).appendTo('body');
      }
      $('body').children().not(this).addClass('blur');
  })
  $('.modal').on('hide.bs.modal',function(){
      $('body').children().removeClass('blur');
  })


    
        
    

});
