const yemekListesi = [
  {
    id: 1,
    title: "Mercimek Çorbası",
    day: "Haftaiçi",
    price: 10,
    img:
      "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/mercimek-corbasi-yemekcom.jpg",
    desc: `Lentil Soup`,
  },

  {
    id: 2,
    title: "Talaş Kebabı",
    day: "Haftaiçi",
    price: 35,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2016/06/tavuklu-talas-kebabi-resimli-yemek-tarifi(19).jpg?h=487&w=650",
    desc: `Kebab in Pastry`,
  },

  {
    id: 3,
    title: "Et Haşlama",
    day: "Haftaiçi",
    price: 39,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2016/07/terbiyeli-et-haslama-resimli-yemek-tarifi(11).jpg",
    desc: `Boiled Meat with Vegatables`,
  },

  {
    id: 4,
    title: "Şehriyeli Tavuk Çorbası",
    day: "Cumartesi",
    price: 10,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/sehriyeli-tavuk-corbasi-859b8560-88fc-43c2-9a8c-69937529033a.jpg",
    desc: `Chicken Vermicelli Soup`,
  },

  {
    id: 5,
    title: "İzmir Köfte",
    day: "Cumartesi",
    price: 29,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/izmir_kofte-22742567-6176-4e66-945b-8b3499f98bb3.jpg",
    desc: `İzmir's Special Meatballs`,
  },

  {
    id: 6,
    title: "Tandır",
    day: "Cumartesi",
    price: 43,
    img:
      "https://cdn.yemek.com/mnresize/1250/833/uploads/2018/07/bby-tandir-yemekcom.jpg",
    desc: `Lamb Baked in Tandoori`,
  },

  {
    id: 7,
    title: "İşkembe Çorbası",
    day: "Pazar",
    price: 15,
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2014/07/iskembe-corbasi-yemekcom.jpg",
    desc: `Tripe Soup`,
  },

  {
    id: 8,
    title: "Beğendili Kebap",
    day: "Pazar",
    price: 39,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/begendili_kebap-3b24ef5e-5671-4676-aa84-f75a26c6c962.jpg",
    desc: `Aubergine Puree Kebab`,
  },

  {
    id: 9,
    title: "Kuzu Kapama",
    day: "Pazar",
    price: 39,
    img:
      "https://i.ytimg.com/vi/rcgbsDsh6SA/maxresdefault.jpg",
    desc: `Spring Lamb with Chard`,
  },

];

const sectionCenter = document.querySelector(".section-center");

const btnContainer = document.querySelector(".btn-container");



const days = yemekListesi.reduce( 
  (values, item) => {
  if (!values.includes(item.day)) {
    values.push(item.day);
  }
  return values;
},
  ["Hepsi"]
);


   

const dayList = () => {


  const dayBtns = days.map((day) => {
    return `<button class= "btn btn-outline-dark btn-item" data-id=${day}> ${day} </button>`
  })
  .join(""); 

  btnContainer.innerHTML = dayBtns;

  const filterBtns = document.querySelectorAll(".btn-item");

  filterBtns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
      const day = e.currentTarget.dataset.id;
      console.log(day);

      const yemekListesiDay = yemekListesi.filter((menuItem) => {
        if (menuItem.day === day) {
          return menuItem;
        }
      });
      
      if (day === "Hepsi") {
        menuList(yemekListesi);
      } else {
        menuList(yemekListesiDay);
      }
    });
  });
};



const menuList = (menuItems) => {
  let displayMenu = menuItems.map( (item) => {
    return `
    <div class= "menu-items col-lg-6 col-sm-12">
    <img 
      src=${item.img}
      alt=${item.title}
      class="photo"
      />
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
          ${item.desc}
        </div>
     </div>
    </div>
    `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

menuList(yemekListesi);
dayList();