

//window.addEventListener("resize", window_rezise_1);
//
//function window_rezise_1(){
//    location.reload();
//}

if(sessionStorage.getItem("button_id_1") == null || sessionStorage.getItem("button_id_1") == ""){
    ty_item_2_onClick("item_1");
}
else{
    ty_item_2_onClick(sessionStorage.getItem("button_id_1"));
}

function ty_item_2_onClick(button_id)
{
    //deleteChilds_2();

    //console.log(button_id);

    sessionStorage.setItem("button_id_1", button_id);

    var e = document.querySelector(".iframe_1");

    let numberOfButtons_1 = 5;

    var e_button_1 = ["", "", "", "", ""];

    for(let i1 = 1; i1 <= numberOfButtons_1; i1++)
    {
        e_button_1[i1 - 1] = document.getElementById("item_" + i1.toString());

        if("item_" + i1.toString() == button_id)
        {
            e_button_1[i1 - 1].style.setProperty("--s", 1);
        }
        else
        {
            e_button_1[i1 - 1].style.setProperty("--s", 0);
        }
    }

    switch(button_id)
    {
        case "item_1":
            e.src = "./poliedros_platao/poliedros_platao_1.html";
            break;
        case "item_2":
            e.src = "./piramides/piramides_1.html";
            break;
        case "item_3":
            e.src = "./paralelepipedos/paralelepipedos_1.html";
            break;
        case "item_4":
            e.src = "./cilindros/cilindros_1.html";
            break;
        case "item_5":
            e.src = "./cones/cones_1.html";
            break;
    }
}