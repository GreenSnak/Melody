$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
  var counterDoun = $(".counter-doun"); /* кнопка уменьшения этажа */
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");
  var floorFlatsPath = $(".flats path"); // каждая отдельная квартира в SVG
  var finderFloorFlats = $(".flat-item"); // переменная, где хранится текуая квартира

  // функция при наведении на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("corrent-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });

  floorPath.on("click", toggleModal); /* при клике на этаж, вызвает окно */
  modalCloseButton.on(
    "click",
    toggleModal
  ); /* при клике на кнопку закрыть убирает окно */
  viewFlatsButton.on("click", toggleModal);

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function () {
    // проверяем значение этажа, оно не должго быть больше 18
    if (currentFloor < 18) {
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // формаатируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("corrent-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("corrent-floor"); // подсвечиваем текущий этаж
    }
  });
  // отслеживаем клик по кнопке вниз
  counterDoun.on("click", function () {
    // проверяем значение этажа, оно не должго быть больше 2
    if (currentFloor > 2) {
      currentFloor--; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // формаатируем переменную с этажом, чтобы было 01 а не 1
      $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
      floorPath.removeClass("corrent-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("corrent-floor"); // подсвечиваем текущий этаж
    }
  });

  // функция открыть-закрыть окно
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
