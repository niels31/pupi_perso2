reconstitucion_prev=document.querySelector(".RECONSTITUCION .prevbutton");
reconstitucion_next=document.querySelector(".RECONSTITUCION .nextbutton");

let i =0;

function nxt_img(event, imgs) {
    i++;
    if (i>=imgs.length) {
        i=0;
    };
    parent=event.target.parentElement;
    img=parent.querySelector("img");
    img.src=imgs[i];
}

function prv_img(event, imgs) {
    i--;
    if (i==-1) {
        i=imgs.length-1;
    };
    parent=event.target.parentElement;
    img=parent.querySelector("img");
    img.src=imgs[i];
}

reconstitucion_imgs=[
    "RECONSTITUCION/PHOTOGRAMMES/RECONSTITUCION1.png",
    "RECONSTITUCION/PHOTOGRAMMES/RECONSTITUCION2.png",
    "RECONSTITUCION/PHOTOGRAMMES/RECONSTITUCION3.png",
    "RECONSTITUCION/PHOTOGRAMMES/RECONSTITUCION4.png"]

reconstitucion_prev.addEventListener("click", (e) => {prv_img(e, reconstitucion_imgs)});
reconstitucion_next.addEventListener("click", (e) => {nxt_img(e, reconstitucion_imgs)});

