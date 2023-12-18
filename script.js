window.onload = function()
{
    var cells = document.getElementsByClassName("cell");

    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "0";
    }
}

var Player_Turn = false;
var setter_value;

function Put(obj)
{
    if(obj.innerText != "0")
    {
        return;
    }

    if (Player_Turn==false)
    {
        setter_value = "-1";
        Player_Turn = true;
    }
    else
    {
        setter_value = "1";
        Player_Turn = false;
    }

    obj.innerText = setter_value;
    console.log(setter_value, obj);
    
}