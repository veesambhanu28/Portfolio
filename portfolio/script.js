const words = ["Web Developer","Programmer","UI/UX Enthusiast"];
let i = 0, j = 0, text = "", del = false;

function type(){
    let el = document.querySelector(".text");
    if(!el) return;

    if(!del && j <= words[i].length){
        text = words[i].slice(0, j++);
    } 
    else if(del && j >= 0){
        text = words[i].slice(0, j--);
    }

    el.innerHTML = text;

    // Small smooth pause (not noticeable)
    if(j == words[i].length){
        del = true;
        setTimeout(type, 400);
        return;
    }

    if(j == 0){
        del = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, del ? 50 : 90);
}

type();
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const popup = document.getElementById("successPopup");
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2500);

    this.reset();
});