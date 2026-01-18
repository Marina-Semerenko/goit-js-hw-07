const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const subcategoryItems = category.querySelectorAll('ul li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${subcategoryItems.length}`);
    
}) 

