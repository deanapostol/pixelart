// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function(){



function makeGrid() {

// Your code goes here!

const height = $("#inputHeight").val();
const width = $("#inputWidth").val();


for(let i =0; i< height; i++){

    $("#pixelCanvas").append("<tr class='rows'> </tr>")
    for(let j =0; j< width; j++){
        $("#pixelCanvas").children().last().append("<td class='columns'> </td>");
    }
}
}

$("#sizePicker").on("submit",function(evt){
    evt.preventDefault();
    $(".rows,.columns").remove();
    makeGrid();
})



 $("#pixelCanvas").on("click","td",function(){
    const color = $("#colorPicker").val();

    $(this).css("background-color",color);
 })




})
