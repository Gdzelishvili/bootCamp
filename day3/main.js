let products = [
    { id: 1, name: "Laptop", price: 1200, available: true },
    { id: 2, name: "Phone", price: 800, available: true },
    { id: 3, name: "Tablet", price: 500, available: false }
];

console.log("Initial Products:", products);

products.push({ id: 4, name: "Smartwatch", price: 300, available: true });

console.log("After Adding a Product:", products);

products = products.filter(product => product.id !== 2);

console.log("After Removing Product ID 2:", products);

products.forEach(product => {
    if (product.name === "Laptop") {
        product.price = 1100;
    }
});

console.log("After Updating Laptop Price:", products);

document.body.innerHTML = `
    <h2>Product List</h2>
    <ul>
        ${products.map(p => `<li>${p.name} - $${p.price}</li>`).join('')}
    </ul>
`;
