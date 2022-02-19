  
  //!GET BILL
  
  const bill = document.querySelector("#bill-amount")
  let billValue = 0;
  bill.addEventListener("input", function () {
      billValue = parseFloat(bill.value);
  })

//!GET NUMBER OF PEOPLE
  const numberPeople = document.querySelector("#numberPeople")
  let numberPeopleValue = 0;
  numberPeople.addEventListener("input", function () {
      numberPeopleValue = parseFloat(numberPeople.value);
      document.querySelector(".amount-button__wrapper").classList.remove("active")
      if (numberPeopleValue == 0) {
          document.querySelector(".number-people__input").classList.add("warning-active")
          document.querySelector(".warning").style.display = "block"
      } else {
          document.querySelector(".number-people__input").classList.remove("warning-active")
          document.querySelector(".warning").style.display = "none"
      }
      solve();
  })

  //!GET CUSTOM VALUE
  const custom = document.querySelector("#customInput")
  let customValue = 0;
  let customPrecent = 0;
  custom.addEventListener("input", function () {
      let customValue = parseFloat(custom.value);
      customPrecent = customValue / 100;
  })




//!GET PRECENTAGE VALUES
  let precentValue = 0;
  let precentage = document.querySelectorAll(".precent");
  precentage.forEach((precent) => {
      precent.addEventListener("click", function () {
          switch (precent.innerHTML) {
              case "5%":
                  precentValue = 0.05
                  break;

              case "10%":
                  precentValue = 0.1
                  break;
              case "15%":
                  precentValue = 0.15
                  break;
              case "25%":
                  precentValue = 0.25
                  break;
              case "50%":
                  precentValue = 0.5
                  break;
          }
          custom.value = "";
      })

  })









//!CALCULATION FUNCTION
  function solve() {
      let value = 0;
      let custom = document.querySelector("#customInput");
      if (custom.value) {
          value = (customPrecent * billValue);

      } else {
          value = (precentValue * billValue);
      }
      let tipAmount = value / numberPeopleValue;
      let total = (billValue + value) / numberPeopleValue;
      document.querySelector("#tip-amount").innerHTML = "$" + tipAmount.toFixed(2);
      document.querySelector("#total").innerHTML = "$" + total.toFixed(2);
  }



//!RESET BUTTON 
  document.querySelector(".calc").addEventListener("click", resetAll);

  function resetAll() {
      document.querySelector(".amount-button__wrapper").classList.add("active")
      document.querySelector("#customInput").value = "";
      document.querySelector("#bill-amount").value = "";
      document.querySelector("#numberPeople").value = "";
      document.querySelector("#tip-amount").innerHTML = "$0.00";
      document.querySelector("#total").innerHTML = "$0.00";
      document.querySelector(".number-people__input").classList.remove("warning-active")
      document.querySelector(".warning").style.display = "none"

  }


  //!SELECT TIP TOGGLE BUTTONS EFFECT ON FOCUS

  var select = document.querySelector(".select-tip-button")
  document.querySelector("#first").addEventListener("click", function () {

      if (!document.querySelector("#first").classList.contains("toggled")) {
          document.querySelector("#first").classList.add("toggled")
          document.querySelector("#second").classList.remove("toggled")
          document.querySelector("#third").classList.remove("toggled")
          document.querySelector("#fourth").classList.remove("toggled")
          document.querySelector("#fifth").classList.remove("toggled")
      } else {
          document.querySelector("#first").classList.remove("toggled")
          precentValue = "";
      }
  })


  document.querySelector("#second").addEventListener("click", function () {

      if (!document.querySelector("#second").classList.contains("toggled")) {
          document.querySelector("#second").classList.add("toggled")
          document.querySelector("#first").classList.remove("toggled")
          document.querySelector("#third").classList.remove("toggled")
          document.querySelector("#fourth").classList.remove("toggled")
          document.querySelector("#fifth").classList.remove("toggled")
      } else {
          document.querySelector("#second").classList.remove("toggled")
          precentValue = "";
      }
  })


  document.querySelector("#third").addEventListener("click", function () {

      if (!document.querySelector("#third").classList.contains("toggled")) {
          document.querySelector("#third").classList.add("toggled")
          document.querySelector("#first").classList.remove("toggled")
          document.querySelector("#second").classList.remove("toggled")
          document.querySelector("#fourth").classList.remove("toggled")
          document.querySelector("#fifth").classList.remove("toggled")
      } else {
          document.querySelector("#third").classList.remove("toggled")
          precentValue = "";
      }
  })


  document.querySelector("#fourth").addEventListener("click", function () {

      if (!document.querySelector("#fourth").classList.contains("toggled")) {
          document.querySelector("#fourth").classList.add("toggled")
          document.querySelector("#first").classList.remove("toggled")
          document.querySelector("#second").classList.remove("toggled")
          document.querySelector("#third").classList.remove("toggled")
          document.querySelector("#fifth").classList.remove("toggled")
      } else {
          document.querySelector("#fourth").classList.remove("toggled")
          precentValue = "";
      }
  })


  document.querySelector("#fifth").addEventListener("click", function () {

      if (!document.querySelector("#fifth").classList.contains("toggled")) {
          document.querySelector("#fifth").classList.add("toggled")
          document.querySelector("#first").classList.remove("toggled")
          document.querySelector("#second").classList.remove("toggled")
          document.querySelector("#third").classList.remove("toggled")
          document.querySelector("#fourth").classList.remove("toggled")
      } else {
          document.querySelector("#fifth").classList.remove("toggled")
          precentValue = "";
      }
  })
