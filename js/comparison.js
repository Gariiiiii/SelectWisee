const productADropdown = document.querySelector("#productA");
const productBDropdown = document.querySelector("#productB");

// Populate product dropdowns with options dynamically from the products array
products.slice(1).forEach((product, index) => {
    const optionA = `<option value="${index + 1}">${product.name}</option>`;
    const optionB = `<option value="${index + 1}">${product.name}</option>`;
        productADropdown.innerHTML += optionA;
        productBDropdown.innerHTML += optionB;
});

// Attach event listeners for dropdown changes
productADropdown.addEventListener("change", function () {
    item1(this.value);
});

productBDropdown.addEventListener("change", function () {
    item2(this.value);
});

document.getElementById("productA").addEventListener("change", checkProducts);
document.getElementById("productB").addEventListener("change", checkProducts);

// Function to check selected products and toggle table visibility
function checkProducts() {
    const productA = document.getElementById("productA").value;
    const productB = document.getElementById("productB").value;
    const comparisonSection = document.getElementById("comparisonSection"); // Section to toggle height
    const rows = document.querySelectorAll("tbody .table");

    if (productA !== "0" && productB !== "0") {
        rows.forEach(row => row.classList.add("active"));
        comparisonSection.style.height = "auto"; // Expand the section height
    } else {
        rows.forEach(row => row.classList.remove("active"));
        comparisonSection.style.height = "200px"; // Collapse the section height
    }
}

    // Handle product selection for product A
    function item1(a) {
        let productB = document.getElementById("productB").value;
        if (a != productB) {
            updateProductDetails(a, "1");
        } else {
            alert("Both desired products are the same to compare. Please select different products.");
            resetProductDetails("1");
        }
    }

    // Handle product selection for product B
    function item2(a) {
        let productA = document.getElementById("productA").value;
        if (a != productA) {
            updateProductDetails(a, "2");
        } else {
            alert("Both desired products are the same to compare. Please select different products.");
            resetProductDetails("2");
        }
    }

    // Update product details in the comparison table
    function updateProductDetails(index, suffix) {
        document.getElementById(`img${suffix}`).src = products[index].image;
        document.getElementById(`display${suffix}`).innerHTML = products[index].display;
        document.getElementById(`camera${suffix}`).innerHTML = products[index].camera;
        document.getElementById(`frontCamera${suffix}`).innerHTML = products[index].frontCamera;
        document.getElementById(`color${suffix}`).innerHTML = products[index].color;
        document.getElementById(`storage${suffix}`).innerHTML = products[index].storage;
        document.getElementById(`price${suffix}`).innerHTML = `<span>MRP: ₹${products[index].price}</span>`;
        document.getElementById(`rating${suffix}`).innerHTML = products[index].rating;
        document.getElementById(`review${suffix}`).innerHTML = products[index].reviews;
        document.getElementById(`biometric${suffix}`).innerHTML = products[index].faceOrTouchID;
        document.getElementById(`chip${suffix}`).innerHTML = products[index].chip;
        document.getElementById(`durability${suffix}`).innerHTML = products[index].splashWaterAndDustResistant;
        document.getElementById(`box${suffix}`).innerHTML = products[index].inTheBox;
        document.getElementById(`charging${suffix}`).innerHTML = products[index].charging;
    }

    // Reset product details in the comparison table
    function resetProductDetails(suffix) {
        document.getElementById(`img${suffix}`).src = "img/products/No-Image-Placeholder.jfif"; // Clear image
        document.getElementById(`display${suffix}`).innerHTML = "";
        document.getElementById(`camera${suffix}`).innerHTML = "";
        document.getElementById(`frontCamera${suffix}`).innerHTML = "";
        document.getElementById(`color${suffix}`).innerHTML = "";
        document.getElementById(`storage${suffix}`).innerHTML = "";
        document.getElementById(`price${suffix}`).innerHTML = "";
        document.getElementById(`rating${suffix}`).innerHTML = "";
        document.getElementById(`review${suffix}`).innerHTML = "";
        document.getElementById(`biometric${suffix}`).innerHTML = "";
        document.getElementById(`chip${suffix}`).innerHTML = "";
        document.getElementById(`durability${suffix}`).innerHTML = "";
        document.getElementById(`box${suffix}`).innerHTML = "";
        document.getElementById(`charging${suffix}`).innerHTML = "";
    }
