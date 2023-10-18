document.getElementById('section2').style.display = 'none';
document.getElementById('section3').style.display = 'none';
document.getElementById('section4').style.display = 'none';

let multiple = false;

function upClick(event) {
    for (let i = 1; i <= 4; i++) {
        if ((event.id).includes(i)) {
            document.getElementById(`section${i}`).style.display = 'none';
        }
    }
}

function downClick(event) {
    if (!multiple) {
        for (let i = 1; i <= 4; i++) {
            if ((event.id).includes(i)) {
                document.getElementById(`section${i}`).style.display = 'block';
            } else {
                document.getElementById(`section${i}`).style.display = 'none';
            }
        }
    } else {
        document.getElementById(`section${event.id.replace("downButton", "")}`).style.display = 'block';
    }
}


function checkBoxClick() {
    multiple = true;
}