const instagramUsername = window.location.pathname.split("/")[1];
const isProfilePage = instagramUsername && window.location.pathname === `/${instagramUsername}/`;

if (!isProfilePage) {
  return;
}

const banner = document.createElement("div");
banner.style.backgroundImage = "url(https://your-default-banner-image-url.com/banner.jpg)";
banner.style.backgroundSize = "cover";
banner.style.backgroundRepeat = "no-repeat";
banner.style.backgroundPosition = "center";
banner.style.height = "200px";
banner.style.width = "100%";
banner.style.position = "relative";
banner.style.zIndex = "1";

const input = document.createElement("input");
input.type = "file";
input.accept = "image/*";
input.style.display = "none";

input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.onload = function() {
    banner.style.backgroundImage = `url(${reader.result})`;
  };
  reader.readAsDataURL(input.files[0]);
});

banner.addEventListener("click", function() {
  input.click();
});

document.querySelector("header").appendChild(banner);
