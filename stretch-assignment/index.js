const blocks = document.querySelectorAll('.block');
const blockArray = [];
blocks.forEach(( block, i) => {
    block.setAttribute("id", `block${i}`);
    blockArray.push(block);
});

blockArray.forEach(block => {
    block.addEventListener('click', element => {
        const targetBlock = document.querySelector("#block0");
        const elementClass = element.target.classList.value;
        const targetClass = targetBlock.classList.value;
        element.target.classList.value = targetClass;
        targetBlock.classList = elementClass;
    });
    block.addEventListener('mousedown', element => {
        element.target.classList.add('block--moves');
    });
    block.addEventListener('mouseup', element => {
        element.target.classList.remove('block--moves');
    });
    block.addEventListener('mouseleave', element => {
        element.target.classList.remove('block--moves');
    });
});