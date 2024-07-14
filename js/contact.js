function displaySearch() {
  var cartona = "";
  cartona += `<div class="container container-contact">
    <form class="contact-form">
        <div class="form-group">
            <input type="text" placeholder="Enter Your Name">
            <input type="email" placeholder="Enter Your Email">
        </div>
        <div class="form-group">
            <input type="tel" placeholder="Enter Your Phone">
            <input type="number" placeholder="Enter Your Age">
        </div>
        <div class="form-group">
            <input type="password" placeholder="Enter Your Password">
            <input type="password" placeholder="Repassword">
        </div>
        <button type="submit">Submit</button>
    </form>
</div>`;

  document.getElementById("rowData").innerHTML = cartona;
}

displaySearch();
