console.log('Hi');
const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');
imgBox.addEventListener('dragstart', (e) => {
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
    //settimeout 0 means jab sabkuch chal jaye then this will run
})
imgBox.addEventListener('dragend', (e) => {
    console.log('Dragend has been triggered');
    e.target.className = 'imgBox';
})
for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        console.log('dragover has been triggered');
        e.preventDefault();
    })
    whiteBox.addEventListener('dragenter', (e) => {
        console.log('dragenter has been triggered');
        e.target.className += ' dashed';
    })
    whiteBox.addEventListener('dragleave', (e) => {
        console.log('dragleave has been triggered');
        e.target.className='whiteBox';
    })
    whiteBox.addEventListener('drop', (e) => {
        console.log('drop has been triggered');
        e.target.append(imgBox);
    })
}