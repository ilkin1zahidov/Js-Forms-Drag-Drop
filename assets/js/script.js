
let uploadIcon = document.querySelector(".upload-icon");
let table = document.querySelector(".table")


uploadIcon.addEventListener("click", function () {
  this.nextElementSibling.click();
})


uploadIcon.nextElementSibling.addEventListener("change", function (e) {
  for (const file of e.target.files) {
    let reader = new FileReader();
    reader.onloadend = (event) => {
      let base64 = event.currentTarget.result;

      table.lastElementChild.innerHTML += `        <tr>
      <td>${file.size / 1024}</td>
      <td>${file.name}</td>
      <td><img src="${base64}" width="100px" height= "100px" alt=""></td>
    </tr>`

    }

    reader.readAsDataURL(file);


  }
})





let imageDrop = document.getElementById('dropPhoto');
imageDrop.addEventListener('change', handleImage, false);

function handleImage(e) {
  if (this.files && this.files[0]) {
    let reader = new FileReader();
    reader.onload = e => $('#blah').attr('src', e.target.result);
    reader.readAsDataURL(this.files[0]);

  }

}

