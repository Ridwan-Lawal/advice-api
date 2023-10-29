const adviceContainer = document.querySelector(".containers");

const displayAdvice = function ({ id, advice }) {
  const template = `
      <p class="text-neonGreen uppercase text-xs tracking-[5px]">Advice #${
        id || ""
      }</p>
  
      <h1 class="text-lightCyan text-xl mt-7">
       ${advice || "No advice Available"}
      </h1>
  
      <!-- divider -->
      <div class="mt-5 mb-2 flex justify-center">
        <img
          src="./images/pattern-divider-mobile.svg"
          alt=""
          class="md:hidden"
        />
        <img
          src="./images/pattern-divider-desktop.svg"
          alt=""
          class="hidden md:block"
        />
      </div>
  
      <!-- dice -->
      <div class="flex dice justify-center relative top-6">
        <div
          class="w-fit p-3 bg-neonGreen shadow-md shadow-neonGreen rounded-full"
        >
          <img src="./images/icon-dice.svg" alt="" />
        </div>
      </div>
      `;

  adviceContainer.insertAdjacentHTML("afterbegin", template);
};

// getting Advice
export const getAdvice = async function () {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice`);
    if (!res.ok) throw new Error("Something went wrong fetching data :(");

    const { slip: data } = await res.json();
    displayAdvice(data);
  } catch (err) {
    alert(err);
  }
};

export { adviceContainer };
