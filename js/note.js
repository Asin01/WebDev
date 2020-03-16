$(function(){
    var notesList = [];
    var selectedID = 0;

    $("#btnSubmit").on("click"), function(){
        var note = new Object();
        note.title = $("#title").val();
        note.content = $("#note").val();
        notesList.push(note);
    };
    $("#display.htm").on("pagebeforeshow", function(){
        for (i=0; i<notesList.length; i++){
            $("#list_notes").append("<li id='" +  i + "'><a href='page_viewNote'>" + notesList[i].title + "</a></li>");
        }
    });
});
