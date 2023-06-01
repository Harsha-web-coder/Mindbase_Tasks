// Fetch the JSON file
fetch('cards.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data and generate HTML
    const cardBodyContainer = document.querySelector('.cardslistcontainer');
    console.log(data);

    let html = "";
    let cardsData = data.cardsList;

    data.cardsList.forEach(element => {
      html += `<div class="col-md-6 col-lg-3">
        <div class="card mb-4 shadow">
          <div class="red-line"></div>
          <div class="card-body">
            <div class="single-line">
              <label class="card-title card-title-turquoise">${element.title}</label>
              <div class="green-circle">
                <div class="active-text">
                  ${element.isActive ? "Active" : "Inactive"}
                </div>
              </div>
            </div>

            <div class="single-line">
              <label>DeviceId</label>
              <div>
                ${element.DeviceID}
              </div>
            </div>

            <div class="single-line">
              <label>DeviceType</label>
              <div>
                ${element.deviceType}
              </div>
            </div>

            <br>
            <h6 class="card-title-blue">ASSOCIATIONS</h6>
            <div class="single-line">
              <label>Associations</label>
              <div>
                ${element.Customer}
              </div>
            </div>
            <br>
            <h6 class="card-title-blue">ACTION UPDATES</h6>
            <i class="fas fa-eye small-icon"></i>
          </div>

          <div class="card-footer d-flex align-items-center justify-content-between small-icon">
            <div class="small-icon">
              <input class="form-check-input" type="checkbox" id="checkbox">
            </div>
            <div class="form-switch ms-auto small-icon">
              <input class="form-check-input small-icon" type="checkbox" id="switchToggle" checked>
              <span>Active</span>
            </div>
            <div class="ms-auto">
              <i class="fas fa-edit small-icon2"></i>
              <i class="fas fa-trash small-icon2"></i>
              <i class="fas fa-ellipsis-h small-icon2"></i>
            </div>
          </div>
        </div>
      </div>`;
    });

    cardBodyContainer.innerHTML = html;

    // Display filtered cards based on search input
    function displayFilteredCards(filterText) {
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();

        if (title.includes(filterText.toLowerCase())) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // Event listener for search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
      const filterText = searchInput.value.trim();
      displayFilteredCards(filterText);
    });

    // Event listener for search icon
    const searchIcon = document.querySelector('.sorrt');
    searchIcon.addEventListener('click', function() {
      searchInput.focus();
    });

    // Sort cards in ascending order
    function sortCardsAscending() {
      cardsData.sort((a, b) => a.title.localeCompare(b.title));
      generateCardHTML(cardsData);
    }

    // Sort cards in descending order
    function sortCardsDescending() {
      cardsData.sort((a, b) => b.title.localeCompare(a.title));
      generateCardHTML(cardsData);
    }

    // Event listener for dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const sortType = this.getAttribute('data-sort');
        if (sortType === 'asc') {
          sortCardsAscending();
        } else if (sortType === 'desc') {
          sortCardsDescending();
        }
      });
    });

    // Generate HTML for cards
    function generateCardHTML(cards) {
      let html = "";
      cards.forEach(element => {
        html += `<div class="col-md-6 col-lg-3">
          <div class="card mb-4 shadow">
            <div class="red-line"></div>
            <div class="card-body">
              <div class="single-line">
                <label class="card-title card-title-turquoise">${element.title}</label>
                <div class="green-circle">
                  <div class="active-text">
                    ${element.isActive ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>

              <div class="single-line">
                <label>DeviceId</label>
                <div>
                  ${element.DeviceID}
                </div>
              </div>

              <div class="single-line">
                <label>DeviceType</label>
                <div>
                  ${element.deviceType}
                </div>
              </div>

              <br>
              <h6 class="card-title-blue">ASSOCIATIONS</h6>
              <div class="single-line">
                <label>Associations</label>
                <div>
                  ${element.Customer}
                </div>
              </div>
              <br>
              <h6 class="card-title-blue">ACTION UPDATES</h6>
              <i class="fas fa-eye small-icon"></i>
            </div>

            <div class="card-footer d-flex align-items-center justify-content-between small-icon">
              <div class="small-icon">
                <input class="form-check-input" type="checkbox" id="checkbox">
              </div>
              <div class="form-switch ms-auto small-icon">
                <input class="form-check-input small-icon" type="checkbox" id="switchToggle" checked>
                <span>Active</span>
              </div>
              <div class="ms-auto">
                <i class="fas fa-edit small-icon2"></i>
                <i class="fas fa-trash small-icon2"></i>
                <i class="fas fa-ellipsis-h small-icon2"></i>
              </div>
            </div>
          </div>
        </div>`;
      });

      cardBodyContainer.innerHTML = html;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });