const resultNode = document.querySelector('.images')
const btnNode = document.querySelector('.btn')

// const value = document.querySelector('input').value;

function useRequest(url, callback, value) {
    if (limit(value) === true) {
        let xhr = new XMLHttpRequest();
        xhr.open('Get', url, true);
        xhr.onload = function () {
            if (xhr.status !== 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                console.log('Статус ответа: ', xhr.status);
                const result = JSON.parse(xhr.response);
                if (callback) {
                    callback(result)
                }
            }
        };
        xhr.onerror = function () {
            // обработаем ошибку, не связанную с HTTP (например, нет соединения)
            console.log('Ошибка! Статус ответа: ', xhr.status);
        };
        xhr.send();
    } else {
        resultNode.innerHTML = `
        <p>«число вне диапазона от 1 до 10»</p>
        `
    }

}

function limit(val) {
    return !(val < 1 || val > 10);

}

function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img src="${item.download_url}" alt="image" class="card-image">
        <p>${item.author}</p>
        </div>
        `;
        cards = cards + cardBlock;
    })
    resultNode.innerHTML = cards;
}

// Вешаем обработчик на кнопку запроса
btnNode.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    console.log(limit(value))
    useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult, value)
})

