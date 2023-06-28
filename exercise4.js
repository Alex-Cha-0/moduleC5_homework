const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.images')

function sizeLimit(val) {
    return val >= 100 && val <= 300 && !isNaN(val);
}

btn.addEventListener('click', () => {
    const width = document.getElementById('width').value
    const height = document.getElementById('height').value
    if (sizeLimit(width) === false || sizeLimit(height) === false) {
        resultNode.innerHTML = `
        <p>«одно из чисел вне диапазона от 100 до 300»</p>`;
    } else {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                console.log(response)
                return response;
            })
            .then((data) => {
                let imgBlock = '';

                const newBlock = `
            <br>
            <div class="card">
            <img src="${data.url}" alt="image" class="card-image">
            </div>
        `;
                imgBlock = imgBlock + newBlock;

                resultNode.innerHTML = imgBlock;
            })
            .catch(() => {
                console.log('error')
            });
    }


});