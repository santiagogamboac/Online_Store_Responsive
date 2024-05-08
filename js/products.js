const getProducts = async () => {
  try {
    const results = await fetch("./data/products.json");
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};

/*
=============
Load Category Products
=============
 */
const categoryCenter = document.querySelector(".category__center");

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getProducts();
  displayProductItems(products);
});

const displayProductItems = items => {
  let displayProduct = items.map(
    product => ` 
                  <div class="product category__products">
                    <div class="product__header">
                      <img src=${product.image} alt="product">
                    </div>
                    <div class="product__footer">
                      <h3>${product.title}</h3>
                      <div class="rating">
                      </div>
                      <div class="product__price">
                        <h4>$${product.price}</h4>
                      </div>
                      <a href="#">
                      <button class="CartBtn">
    <span class="IconContainer"> 
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
    </span>
    <p class="text">Add to Cart</p>
  </button>
  </a>
                    </div>
                  </div>
                  `
  );

  displayProduct = displayProduct.join("");
  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};

/*
=============
Filtering
=============
 */

const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");

if (categoryContainer) {
  categoryContainer.addEventListener("click", async e => {
    const target = e.target.closest(".section__title");
    if (!target) return;

    const id = target.dataset.id;
    const products = await getProducts();

    if (id) {
      // remove active from buttons
      Array.from(filterBtn).forEach(btn => {
        btn.classList.remove("active");
      });
      target.classList.add("active");

      // Load Products
      let menuCategory = products.filter(product => {
        if (product.category === id) {
          return product;
        }
      });

      if (id === "All Products") {
        displayProductItems(products);
      } else {
        displayProductItems(menuCategory);
      }
    }
  });
}

/*
=============
Product Details Left
=============
 */
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const picContainer = document.querySelector(".product__pictures");
const zoom = document.getElementById("zoom");
const pic = document.getElementById("pic");

// Picture List
const picList = [pic1, pic2, pic3, pic4, pic5];

// Active Picture
let picActive = 1;

["mouseover", "touchstart"].forEach(event => {
  if (picContainer) {
    picContainer.addEventListener(event, e => {
      const target = e.target.closest("img");
      if (!target) return;
      const id = target.id.slice(3);
      changeImage(`./images/products/iPhone/iphone${id}.jpeg`, id);
    });
  }
});

// change active image
const changeImage = (imgSrc, n) => {
  // change the main image
  pic.src = imgSrc;
  // change the background-image
  zoom.style.backgroundImage = `url(${imgSrc})`;
  //   remove the border from the previous active side image
  picList[picActive - 1].classList.remove("img-active");
  // add to the active image
  picList[n - 1].classList.add("img-active");
  //   update the active side picture
  picActive = n;
};

/*
=============
Product Details Bottom
=============
 */

const btns = document.querySelectorAll(".detail-btn");
const detail = document.querySelector(".product-detail__bottom");
const contents = document.querySelectorAll(".content");

if (detail) {
  detail.addEventListener("click", e => {
    const target = e.target.closest(".detail-btn");
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      Array.from(btns).forEach(btn => {
        // remove active from all btn
        btn.classList.remove("active");
        e.target.closest(".detail-btn").classList.add("active");
      });
      // hide other active
      Array.from(contents).forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
