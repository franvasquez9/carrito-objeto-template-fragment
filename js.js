const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();
const botones= document.querySelectorAll('.card .btn');

const carritoObjeto = {

};

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritoObjeto.hasOwnProperty(producto.titulo)) {
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;
    pintarCarrito();
};

const pintarCarrito = () => {

    carrito.textContent = "";

    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    })
    carrito.appendChild(fragment)
}

botones.forEach(btn => btn.addEventListener("click", agregarAlCarrito));




























/*const lista = document.querySelector('#lista');

const arrayPaises = ["peru", "venezuela","chile","Argentina"];

const fragment = document.createDocumentFragment();




//otra forma no genera reflow
let = template = "";

arrayPaises.forEach(pais => {
    template += `
    <li class = "list">
        <b>Pais:</b>
        <span class = "text-primary">${pais}</span>
    </li>
    `;

});
lista.innerHTML = template;







/*
arrayPaises.forEach(pais => {
    const li = document.createElement('li');
    li.className="lista";

    const b= document.createElement('b');
    b.textContent = "pais: ";

    const span = document.createElement('span')
    span.className="text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);

    fragment.appendChild(li);
})

lista.appendChild(fragment);













/*arrayPaises.forEach(pais => {
const newNodo = document.createElement('li');
    newNodo.textContent = pais;

    const referencia = fragment.firstChild

    fragment.insertBefore(newNodo,referencia);
})
lista.appendChild(fragment);



/*arrayPaises.forEach(pais => {
    const li = document.createElement('li');
        li.textContent = pais;
        fragment.appendChild(li);
    })
    lista.appendChild(fragment);*/







/*arrayPaises.forEach(pais => {
    lista.innerHTML += `<li>${pais}</li>`;
})// se genera un relow (se regenera el sitio web)

/*const li = document.createElement('li');
li.textContent = "Lista 1 js";
console.log(li);
lista.appendChild(li);*/