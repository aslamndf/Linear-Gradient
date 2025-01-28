const btn1 = document.getElementById("btn1");
      const btn2 = document.getElementById("btn2");
      let rgb1 = "#000000";
      let rgb2 = "#ffffff";

      let copyDiv = document.querySelector(".copyCode");

      const myHex = () => {
        let hexValues = "0123456789abcdefg";
        let colors = "#";
        for (let index = 0; index < 6; index++) {
          colors = colors + hexValues[Math.floor(Math.random() * 16)];
        }
        return colors;
      };

      const handleBtn1 = () => {
        rgb1 = myHex();
        console.log(rgb1);
        btn1.innerHTML = rgb1;
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
        document.querySelector("#myButton").textContent = `${rgb1}`;
      };

      const handleBtn2 = () => {
        rgb2 = myHex();
        console.log(rgb2);
        btn2.innerHTML = rgb2;
        document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
      };

      btn1.addEventListener("click", handleBtn1);
      btn2.addEventListener("click", handleBtn2);

      copyDiv.addEventListener("click", () => {
        alert(
          "Copy the code",
          navigator.clipboard.writeText(copyDiv.innerText)
        );
      });