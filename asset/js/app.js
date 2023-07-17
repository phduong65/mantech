$('.group_card_people').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 12,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
        
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
        
      }
      
    ]
  });
$('.group_card_hot_bid').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    margin: 12,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



const dropdowns = document.querySelectorAll('.dropdown_topic button');
const active = document.querySelector('.dropdown_topic .dropdown .btn_active');
const dropdown_items = document.querySelectorAll('.dropdown_topic .dropdown .dropdown-item');
const nav_list = document.querySelectorAll('.discover .group_control .discover-nav .nav-list li')
dropdowns.forEach(element => {
  element.addEventListener('click',function () {
    if ($(element).hasClass('btn_active')) {
      element.classList.remove('btn_active')
    }
    else{
      element.classList.add('btn_active')
    }
  })
  const svg = document.querySelector('.dropdown_topic .dropdown svg');
  dropdown_items.forEach(item => {
    item.addEventListener('click',function () {
      svg.style.transform = `rotate()`;
      let button_text = item.parentElement.parentElement.previousElementSibling;
      button_text.innerHTML = ` ${item.textContent}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>`;
      svg.style.transform= `rotate(0deg)`;
    })
  });
});


$(document).ready(function () {
  $('.discover .group_control .discover-nav .nav-list li').click(function(e){
    $('.discover .group_control .discover-nav .nav-list li').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function(){
  $('.discover .group_control .btn_filter').click(function(e){
    if ( $('.discover .group_control .btn_filter .bi-x').length) {
      $('.discover .group_control .btn_filter .bi-x').remove();
      if ($('.discover .discover_filter .discover_sort').length) {
        $('.discover .discover_filter .discover_sort').remove();
      } 
    }
    else{
      let text = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;
    let filter = `<div class="discover_sort">
    <div class="discover_cell discover_price">
        <div class="discover_label">Price</div>
        <div class="dropdown">
            <button class="btn btn_dropdown" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Sellers
                <div class="arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-start dropdown-menu-end">
                <li><span class="dropdown-item" href="#">Sellers</span></li>
                <li><span class="dropdown-item" href="#">Buyers</span></li>
            </ul>
        </div>
    </div>
    <div class="discover_cell dicover_likes">
        <div class="discover_label">Likes</div>
        <div class="dropdown">
            <button class="btn btn_dropdown" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Sellers
                <div class="arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-start dropdown-menu-end">
                <li><span class="dropdown-item" href="#">Sellers</span></li>
                <li><span class="dropdown-item" href="#">Buyers</span></li>
            </ul>
        </div>
    </div>
    <div class="discover_cell discover_creator">
        <div class="discover_label">Creator</div>
        <div class="dropdown">
            <button class="btn btn_dropdown" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Sellers
                <div class="arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-lg-start dropdown-menu-end">
                <li><span class="dropdown-item" href="#">Sellers</span></li>
                <li><span class="dropdown-item" href="#">Buyers</span></li>
            </ul>
        </div>
    </div>
    <div class="discover_cell discover_price-rg">
        <label for="customRange2" class="form-label discover_label">Price range</label>
        <input type="range" class="form-range" min="0.01" max="10.0" id="customRange2">
        <div class="discover_scale">
            <div>0.01 ETH</div>
            <div>10 ETH</div>
        </div>
    </div>
</div>`
      $('.discover .discover_filter').append(filter);
      $('.discover .group_control .btn_filter .filter_ic').append(text);
    }
  });
})
