// Events for Shop Section
    //
    // Varibles:
    const welcomePopUp = document.getElementById('welcomePopUp');
    const startGameBtn = document.getElementById('startGameBtn');
    const shopBtn = document.getElementById('shopBtn');
    const helpBtn = document.getElementById('helpBtn');
    const xBtnHelp = document.getElementById('xBtnHelp');
    const helpPopUp = document.getElementById('helpPopUp');
    const xBtnShop = document.getElementById('xBtnShop');
    const shopPopUp = document.getElementById('shopPopUp');

    // Event for closing welcomePopUp
    startGameBtn.addEventListener("click", function() {
      welcomePopUp.setAttribute('style', 'visibility: hidden')
    });

    // Event for opening helpPopUp
    helpBtn.addEventListener("click", function() {
      helpPopUp.setAttribute('style', 'visibility: visibile')
    });

    // Event for closing helpPopUp
    xBtnHelp.addEventListener("click", function() {
      helpPopUp.setAttribute('style', 'visibility: hidden')
    });

    // events for button to display 'shopPopUp' as visible
    shopBtn.addEventListener("click", function() {
      shopPopUp.setAttribute('style', 'visibility: visible')
    })

    // Event for closing shopPopUp
    xBtnShop.addEventListener("click", function() {
      shopPopUp.setAttribute('style', 'visibility: hidden')
    });
