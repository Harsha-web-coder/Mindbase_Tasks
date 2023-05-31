// write js here.

// Fetch the JSON file
//let data = required('cards.json')
fetch('cards.json')
.then(response => response.json())
.then(data => {
  // Process the JSON data and generate HTML
  const cardBodycontainer = document.getElementsByClassName('cardslistcontainer');
  console.log(data);

  let html = "";
  data.cardsList.forEach((element) => {
      html += `<div class="col-md-6 col-lg-3">
        <div class="card mb-4 shadow">
        <div class="red-line"></div>
        <div class="card-body">
        <div class="single-line">
          <label class="card-title card-title-turquoise">${element.title}</label>          
          <div class="green-circle">
          <div class="active-text">
          ${element.isActive ? "Active" : "InActive"}
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
          <div class=" form-switch ms-auto small-icon">
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

  cardBodycontainer[0].innerHTML = html;
})
.catch(error => {
  console.error('Error:', error);
});