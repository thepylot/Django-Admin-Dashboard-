
var container = document.getElementById("container"),
addListBtn = document.getElementById("add-a-list-btn"),
addList1 = document.getElementById("add-a-list"),
saveListBtn = document.getElementById("save-list-btn"),
saveListBox = document.getElementById("save-list-box"),
listInputBox = document.getElementById("list-input-box"),
textValue;


var data = {
lists: []

};

function addList() {
"use strict";
saveListBox.style.display = "inline-block";



}

function tasksAdd(){

    $(".add").click(function(e) {
        e.stopPropagation();
        $(".card").removeClass("no-tile, mute");
        $(".add").removeClass("mute");
        $(".save-edit").remove();
        $(".edit").remove();
        $(".task").show();
    
        $(".no-tile").remove();
        $(".add").show();
        $(".save, .cancel").hide();
        $(".add-textarea").remove();
        $(this)
            .prev()
            .append(
            '<li class="card no-tile"><div class=""><textarea class="add-textarea" autofocus/></div><i class="js-remove">✖</i>'
        );
        $(this)
            .closest(".col")
            .find("textarea")
            .focus();
        // $(this).replaceWith('<button class="save">Save</button>')
        $(this).hide();
        $(this)
            .next()
            .show();
        $(this)
            .siblings(".cancel")
            .show();
        $("textarea").bind("input propertychange", function() {
            $(this)
                .closest(".col")
                .find(".save")
                .removeClass("disabled");
        });
    });
    
    $(".cancel").click(function(e) {
        e.stopPropagation();
        $(this)
            .closest(".col")
            .find(".no-tile")
            .remove();
        $(this)
            .prev()
            .addClass("disabled");
        $(this)
            .siblings(".add")
            .show();
        $(this)
            .siblings(".save")
            .hide();
        $(this).hide();
    });
    
    $(".save").click(function() {
        $(".add-textarea")
            .parent()
            .addClass("task");
        if (
            !$(this)
            .siblings(".column-wrapper")
            .find("textarea")
            .val() == ""
        ) {
            $(this)
                .siblings(".column-wrapper")
                .find("textarea")
                .replaceWith(
                $(this)
                .siblings(".column-wrapper")
                .find("textarea")
                .val()
            );
            $(this)
                .siblings(".column-wrapper")
                .find(".no-tile")
                .addClass("tile")
                .removeClass("no-tile");
            //  $(this).replaceWith('<a class="card add">Add a card...</a>');
    
            $(this)
                .prev()
                .show();
            $(this)
                .hide()
                .addClass("disabled");
            $(this)
                .siblings(".cancel")
                .hide();
        }
    });
    
    $(document).on("click", ".edit", function(e) {
        e.stopPropagation();
    });
    
    $(document).on("click", ".task", function(e) {
        e.stopPropagation();
        $(".no-tile").remove();
        if ($(".card").not(":has(.task)")) {
            // $('.no-tile').remove();
            // $('.card').removeClass('tile').addClass('no-tile');
            $(".add").show();
            $(".save, .cancel, textarea").hide();
            $(".add").addClass("mute");
            $(".task")
                .parent()
                .addClass("mute");
            $(this)
                .parent()
                .removeClass("mute");
            $(".edit").hide();
            $(".save-edit").remove();
            $(".task").show();
            $(this).hide();
            $(".card")
                .removeClass("tile")
                .addClass("remove");
            $(this)
                .parent(".card")
                .append(
                '<textarea class="edit">' +
                $(this).text() +
                '</textarea><a class="save-edit">Save</a>'
            );
            $(".edit").select();
    
            $(".save-edit").click(function() {
                if (!$(".edit").val() == "") {
                    $(".edit").hide();
                    $(this)
                        .parent(".card")
                        .find(".task")
                        .text(
                        $(this)
                        .prev()
                        .val()
                    );
                    $(this).remove();
                    $(".task").show();
                    $(".card")
                        .removeClass("remove, mute")
                        .addClass("tile");
                    // $('.card').addClass('tile').removeClass('no-tile');
                }
            });
        }
    });
    
    $(window).click(function() {
        $(".card").removeClass("no-tile, mute, remove");
        $(".add").removeClass("mute");
        $(".card").removeClass("mute");
        $(".save-edit").remove();
        $(".edit").remove();
        $(".task").show();
        if (!$("textarea")) {
            $(".card").addClass("tile");
        }
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $(".card").removeClass("no-tile, mute, remove");
            $(".card").removeClass("mute");
            $(".add").removeClass("mute");
            $(".save-edit").remove();
            $(".edit").remove();
            $(".task").show();
            $(".card").addClass("tile");
        } else {
            return false;
        }
    });
    
    $(document).on("click", ".js-remove", function() {
        $(this)
            .parent(".card")
            .remove();
    });
      
            $('.card').removeClass('no-tile, mute');
        $('.add').removeClass('mute');
        $('.save-edit').remove();
        $('.edit').remove();
        $('.task').show();
          
        $('.no-tile').remove();
        $('.add').show();
        $('.save, .cancel').hide();
        $('.add-textarea').remove();
        $(this).prev().append('<li class="card no-tile"><div class=""><textarea class="add-textarea" autofocus/></div><i class="js-remove">✖</i>');
        $(this).closest('.col').find('textarea').focus();
       // $(this).replaceWith('<button class="save">Save</button>')
        $(this).hide();
         $(this).next().show();
        $(this).siblings('.cancel').show();
        $('textarea').bind('input propertychange', function() {
            $(this).closest('.col').find('.save').removeClass('disabled');
        });
      
      
      $('.cancel').click(function(e){
        e.stopPropagation();
        $(this).closest('.col').find('.no-tile').remove();
        $(this).prev().addClass('disabled');
        $(this).siblings('.add').show();
        $(this).siblings('.save').hide();
        $(this).hide();
        
      });
      
      
       $('.save').click(function(){
          $('.add-textarea').parent().addClass('task');
         if (!$(this).siblings('.column-wrapper').find('textarea').val()==""){
            $(this).siblings('.column-wrapper').find('textarea').replaceWith($(this).siblings('.column-wrapper').find('textarea').val());
            $(this).siblings('.column-wrapper').find('.no-tile').addClass('tile').removeClass('no-tile');
          //  $(this).replaceWith('<a class="card add">Add a card...</a>');
        
           $(this).prev().show();
         $(this).hide().addClass('disabled');
        $(this).siblings('.cancel').hide();
         }
        });
      
      $(document).on('click', '.edit', function(e){
        e.stopPropagation();
      });
      
      
      $(document).on('click','.task',function(e){
        e.stopPropagation();
      $('.no-tile').remove();
        if($('.card').not(':has(.task)')){
         // $('.no-tile').remove();
       // $('.card').removeClass('tile').addClass('no-tile');
        $('.add').show();
        $('.save, .cancel, textarea').hide();
        $('.add').addClass('mute');
        $('.task').parent().addClass('mute');
        $(this).parent().removeClass('mute');
        $('.edit').hide();
        $('.save-edit').remove();
        $('.task').show();
        $(this).hide();
        $('.card').removeClass('tile').addClass('remove');
        $(this).parent('.card').append('<textarea class="edit">' + $(this).text() + '</textarea><a class="save-edit">Save</a>');
        $('.edit').select();
        
        $('.save-edit').click(function(){
          if (!$('.edit').val()==""){
            $('.edit').hide();
            $(this).parent('.card').find('.task').text($(this).prev().val());
            $(this).remove();
            $('.task').show();
               $('.card').removeClass('remove, mute').addClass('tile');
              // $('.card').addClass('tile').removeClass('no-tile');
          }
        });
      }
      });
      
      $(window).click(function() {
        $('.card').removeClass('no-tile, mute, remove');
        $('.add').removeClass('mute');
          $('.card').removeClass('mute');
        $('.save-edit').remove();
        $('.edit').remove();
        $('.task').show();
          if (!$('textarea')){
                $('.card').addClass('tile');
          }
      });
      
      
      $(document).keyup(function(e){
      
          if(e.keyCode === 27){
            $('.card').removeClass('no-tile, mute, remove');
               $('.card').removeClass('mute');
        $('.add').removeClass('mute');
        $('.save-edit').remove();
        $('.edit').remove();
        $('.task').show();
        $('.card').addClass('tile');
           }
          else {
              return false;
          }
      
      });
      
      $(document).on('click','.js-remove',function(){
          $(this).parent('.card').remove();
      });
    }

function createList(textValue) {
"use strict";
if (textValue) {
    var parentDiv = document.createElement("div"),
        listTitle = document.createElement("div"),
        title = document.createElement("div"),
        dotIcon = document.createElement("a"),
        newTextNode = document.createTextNode(textValue),
        addCardLink = document.createElement("a"),
        addSaveLink = document.createElement("a"),
        listOfTasks = document.createElement("ul"),
        addText = document.createTextNode("Tapsirirq elave et"),
        lists,
        x,
        y;

    data.lists.push({
        title: textValue,
        cards: []
    }); 

    lists = data.lists.map(function (e) {
        return e;
    });

    for (x = 0; x < lists.length; x += 1) {
        parentDiv.setAttribute("class", "add-card-container");
        parentDiv.setAttribute("id", "list-container" + x);
        dotIcon.setAttribute("class", "fa fa-ellipsis-h ellipsis");
        dotIcon.setAttribute("id", "del" + x);
        title.setAttribute("contenteditable", "true");
        title.setAttribute("class", "text");
        title.appendChild(newTextNode);
        listTitle.appendChild(dotIcon);
        listTitle.setAttribute("class", "list-title");
        listTitle.appendChild(title);
        addCardLink.setAttribute("href", "#");
        addCardLink.setAttribute("class", "add");
        addSaveLink.setAttribute("class", "save disabled");
        addSaveLink.setAttribute("href", "#");
        addCardLink.appendChild(addText);
        listOfTasks.setAttribute("class", "column-wrapper");
        parentDiv.style.cssFloat = "left";
        parentDiv.style.display = "inline-block";
        parentDiv.appendChild(listTitle);
        parentDiv.appendChild(listOfTasks);
        parentDiv.appendChild(addCardLink);
        parentDiv.appendChild(addSaveLink);

        container.insertBefore(parentDiv, addList1);
        addListBtn.style.display = "inline-block";
        saveListBox.style.display = "none";
        listInputBox.value = "";
        


       addCardLink.addEventListener("click", function(){
           tasksAdd();
        
          
       })

    }
}
}
window.addEventListener("load", function () {
"use strict";
addListBtn.addEventListener("click", function () {
    addList();
});

saveListBtn.addEventListener("click", function () {
    textValue = listInputBox.value;
    createList(textValue);
});



});




//Create Task -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create Task -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create Task -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create Task -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Create Task -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  
 // $('.add').click(function(e){for (var i = 1; i <= 4; i++) {
    //  Sortable.create(document.getElementById("col_" + i), {
     //     group: "omega",
     //     draggable: ".tile",
     //     animation: 300
     // });
  //}
  