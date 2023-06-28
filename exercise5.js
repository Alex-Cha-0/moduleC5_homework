const btn = document.querySelector('.btn');
const resultNode = document.querySelector('.images')
// проверка на лимиты
function inputLimit(val) {
    return val >= 1 && val <= 10 && !isNaN(val);
}

// Проверка перезагрузки страницы, если true то загружаем данные из localStorage
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");
    // Получение данных из localStorage:
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    console.log(obj)
    let img = `<p>Отображается ранее загруженная страница!</p>`
    obj.forEach(item => {
        const imgBlock = `
                    <br>             
                    <div class="card">
                    <img src="${item.download_url}" alt="image" class="card-image">           
                    </div>
                    `;
        img = img + imgBlock;
    })
    resultNode.innerHTML = img;

}

btn.addEventListener('click', () => {
    const pageNumber = document.getElementById('page_number').value;
    const limit = document.getElementById('limit').value;
    if (inputLimit(pageNumber) === false && inputLimit(limit) === false) {
        resultNode.innerHTML = `
        <p>«Номер страницы и лимит вне диапазона от 1 до 10»</p>`;
    } else if (inputLimit(pageNumber) === false) {
        resultNode.innerHTML = `
        <p>«Номер страницы вне диапазона от 1 до 10»</p>`;
    } else if (inputLimit(limit) === false) {
        resultNode.innerHTML = `
        <p>«Лимит вне диапазона от 1 до 10»</p>`;
    } else {
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                // Сохранение данных в localStorage:
                const myJSON = JSON.stringify(data);
                localStorage.setItem('testJSON', myJSON)

                // обьект результата в формате JSON
                let img = ''
                data.forEach(item => {
                    const imgBlock = `
                    <br>
                    <div class="card">
                    <img src="${item.download_url}" alt="image" class="card-image">           
                    </div>
                    `;
                    img = img + imgBlock;
                })
                resultNode.innerHTML = img;


            })
            .catch(() => {
                console.log('error')
            });
    }


})

