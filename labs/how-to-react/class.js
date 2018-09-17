// Create a class Browser which simulates the interaction between user and a webbrowser that
// - Contains at least a class attribute currPage
// - On construction takes in a homepage and a list of possible webpages
// - Provides four methods 'navigate', 'goBack', 'gotoHomePage' and 'showCurrentPage'

class Browser {
  constructor() {

  }

  // navgiate: directs the user to the page specified if it's in the list of
  // possible pages
  // otherwise, throw an error notifying the user that the page is not found
  navigate = (page) => {

  }

  // goBack: changes the current page back to the previous page
  // If there's no previous page, navigates the user to their homepage
  goBack = () => {

  }

  //gotoHomePage: navigate the user to their homepage
  gotoHomePage = () => {

  }

  // showCurrentPage: returns the string value of the 'currPage' attribute
  showCurrentPage = () => {
    
  }
}

module.exports = Browser;
