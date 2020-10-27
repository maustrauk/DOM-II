let field = document.querySelector(".blocks");
let blocks = field.querySelectorAll("div");


blocks.forEach(block => block.addEventListener('click', () => {
    let newBlock = document.createElement('div');
    newBlock.className = block.className;
    block.remove();
    field.appendChild(newBlock);
}));