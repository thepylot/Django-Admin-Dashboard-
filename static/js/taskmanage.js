//LIST VARS
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
//DATE FOR TASKS
function date(){
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
return today;
}
//TASK STARTS HERE
var user = '{{user}}';
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
            '<li class="card no-tile"><div class=""><textarea class="add-textarea" autofocus/></div><div class = "date row"><i class = " cal fa fa-calendar"></i>' + date() + '<i class = " book fa fa-bookmark-o"></i></div><i class="js-remove">✖</i></li>'
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
    //DRAG DROP
    function dragdrop(){
        $(function(){
            $('ul').sortable({
                  connectWith: 'ul',
                  beforeStop: function(ev, ui) {
                      if ($(ui.item).hasClass('number') && $(ui.placeholder).parent()[0] != this) {
                          $(this).sortable('cancel');
                      }
                    assignValues();
                    showValues();
                    is_completed();
                  }
              });    
          //   $("#target").sortable({
          //     connectWith:"#sortable",
          //      placeholder:"highlight",
          //     connectWith: "#sortable",
          //     revert:true,
              
          //      stop:function(event,ui){
          //       assignValues();
          //       showValues();
          //     }
          //   });
            $("#sortable #target").disableSelection();
            function assignValues(){
              $("#sortable li,#target li").each(function(){
                $(this).find("input").val($(this).index()+1)
              })
            }
            
            function showValues(){
              
              $("#target li").each(function(){
               var i= $(this).find("input").val();
               $(this).find(".index").html("<p>"+i+"</p>");
              })
            
            }
            function is_completed(){
              len=$("#target li").length;
              if(len>3){
                $("#sortable li").addClass("number");
              }
              if(len<3){
                $("#sortable li").removeClass("number");
              }
              
            }
          });
        }
// LIST SECTION
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
        savebtntext = document.createTextNode("Save"),
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
       // addCardLink.setAttribute("href", "#");
        addCardLink.setAttribute("class", "add");
        addSaveLink.setAttribute("class", "save disabled");
        //addSaveLink.setAttribute("href", "#");
        addCardLink.appendChild(addText);
        addSaveLink.appendChild(savebtntext);
        listOfTasks.setAttribute("class", "column-wrapper");
        
        listOfTasks.setAttribute("id", "sortable");
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
           dragdrop();
        
          
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



//AJAX GET
// $.ajax({
//     type: "GET",
//     url : "ajax/more/"
// })
//AJAX POST
//CSRF CODE

