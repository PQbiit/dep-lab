const menuContainer = document.querySelector('#menu-container');

const menu = [
    {
        name: 'Pulled Pork',
        image: 'https://img-global.cpcdn.com/recipes/52793d519d4963fd/680x482cq70/how-to-smoke-pulled-pork-bbq-recipe-main-photo.jpg',
        description: 'lorem ipsum',
        price: 12.99
    },
    {
        name: 'Brisket',
        image: 'https://howtobbqright.com/wp-content/uploads/2020/05/IMG_8261.jpg',
        description: 'lorem ipsum',
        price: 10.99
    },
]

function displayBucketlistItems(){
    menuContainer.innerHTML = ``
    for (let i = 0; i < menu.length; i++) {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `<img src=${menu[i].image} class="card-image"/>
        <h4 class="card-text">${menu[i].name}</h4>
        <p class="card-text">${menu[i].description}</p>
        <p class="card-price">${menu[i].price}</p>`
        menuContainer.appendChild(menuItem);
    }
}

displayBucketlistItems();