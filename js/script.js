let tabItems = document.querySelectorAll(".tab-item"); // selecciona todos los elementos con la clase .tab-item
let tabItemsArray = Array.from(tabItems);
let tabContents = document.querySelectorAll(".tab-content"); // selecciona todos los elementos con la clase .tab-content
let tabContentsArray = Array.from(tabContents);

tabItemsArray.forEach((item) => {
    item.addEventListener("click", (e) => {
        let tabItem = e.target;
        let id = tabItem.dataset.content;
        let tabContent = document.getElementById(id);

        // limpiamos la clase active de todos los elementos
        tabItemsArray.forEach((item) => item.classList.remove("active")); 
        tabContentsArray.forEach((item) => item.classList.remove("active"));

        // agregamos la clase active a los elementos deseados
        tabItem.classList.add("active");
        tabContent.classList.add("active");
    });
});
