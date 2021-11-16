$(document).ready(function () {
  var newArr = [];
  var i = 0;
  var end = 2;
  $(".single-item").each(function () {
    $(this).attr("id", `singleitem-${++i}`);

    newArr.push($(this));
    $(this).remove();
  });
  console.log(newArr);

  const createButton = function (page, type) {
    return `<button type="button" style='' class="btn  btn-dark btns-${type}" data-goto=${
      type === "prev" ? page - 1 : page + 1
    }>
 Page ${
   type === "prev" ? page - 1 : page + 1
 }<i style='transform: translateY(20%); float:${
      type === "prev" ? "left" : "right"
    }' class=" mx-2 p-0 fas fa-chevron-${
      type === "prev" ? "left" : "right"
    }"></i>     
    </button>`;
  };
  const renderButtons = function (page, numResults, resultsPerPage) {
    const pages = Math.ceil(numResults / resultsPerPage);
    let button;
    if (page == 1 && pages > 1) {
      button = createButton(page, "next");
    } else if (page < pages) {
      button = `${createButton(page, "next")}
                ${createButton(page, "prev")};
      `;
    } else if (page == pages && pages > 1) {
      button = createButton(page, "prev");
    }
    $(".buttonsHere").append(button);
  };
  const clearResults = function () {
    $(".dones").html("");
    $(".buttonsHere").html("");
  };
  const renderCelebrities = function (newArr, page = 1, resPerPAge = 5) {
    const start = (page - 1) * resPerPAge;
    const end = page * resPerPAge;
    newArr.slice(start, end).forEach(function (value) {
      console.log(value[0]);
      $(".dones").append(value[0]);
    });
    renderButtons(page, newArr.length, resPerPAge);
  };
  renderCelebrities(newArr);

  $(".buttonsHere").on("click", function (e) {
    const btn = e.target.closest(".btn");
    if (btn) {
      const goto = parseInt(btn.dataset.goto);
      clearResults();
      renderCelebrities(newArr, goto);

      console.log(goto);
    }
  });
});
