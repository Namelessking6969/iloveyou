function addPicture(src) {
    var img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
  }
  
  addPicture("");
  addPicture("image2.jpg");
  addPicture("image3.jpg");
  