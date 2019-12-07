// change todo style on click
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

// click on trash icon for deleting todo
$("ul").on("click","li span", function(event) {
    $(this).parent().fadeOut("slow", function() {
        $(this).remove();
    });
    event.stopPropagation();
})

// add new todo from input to list
$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // add new todo to list 
        let newTodo = $(this).val();
        $("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${newTodo}</li>`);
        $("input[type='text']").val("");
    }
})

// button toggle-display settings for input
$(".fa-plus").click(function() {
    $("input[type='text']").toggleClass("displayInput");
})
