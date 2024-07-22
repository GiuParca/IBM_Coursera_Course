const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $42', 'Pasta - $30', 'Burger - $36', 'Salmon - $45'];
const dessertMenu = ['Cake - $12', 'Ice Cream - $9.80', 'Pudding - $8.60', 'Fruit Salad - $6.70'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';

for(let i = 0; i< dessertMenu.length; i++){
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`}
    
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;

