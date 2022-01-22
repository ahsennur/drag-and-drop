const blueSquare = document.querySelector('.item');

blueSquare.addEventListener('dragstart', dragStart);
blueSquare.addEventListener('dragend', dragEnd);

function dragStart(e) {
    console.log("dragging started");
    e.dataTransfer.setData('text/plain', e.target.id);

    // to make blueSquare invisible when is dragged from somewhere
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnd(e) {
    console.log("dragging ended");
    // display the dragged element
    // e.target.classList.remove('hide'); //makes it visible but not moved
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    console.log("dragEnter");

    //does not seem to be needed as dragOver just comes after this
    e.preventDefault();

    // to set the border sytle dashed
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    console.log("dragOver");
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    console.log("dragLeave");

    // to set the border sytle undashed
    e.target.classList.remove('drag-over');
}

function drop(e) {
    console.log("drop");
    e.target.classList.remove('drag-over');

    //find blueSquare with transfered data
    const data = e.dataTransfer.getData('text/plain');
    const dragged = document.getElementById(data);

    // add it to the drop target
    e.target.appendChild(dragged);

    // make blueSquare visible
    dragged.classList.remove('hide');
}