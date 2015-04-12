function facebook() {

  Parse.initialize("eSYKShtc2RBkaFhDOAMJdFruVKn5j6iswBbLChQt", "ZN0YofVV776oRu0lBNSvbPTLGktZl05lZZ4GksGz");
  
    window.fbAsyncInit = function() {
      /*facebookConnectPlugin.browserInit("475577662591924");*/
      Parse.FacebookUtils.init({ // this line replaces FB.init({
        appId      : '475577662591924', // Facebook App ID
        status     : true,  // check Facebook Login status
        cookie     : true,  // enable cookies to allow Parse to access the session
        xfbml      : true,  // initialize Facebook social plugins on the page
        version    : 'v2.2' // point to the latest Facebook Graph API version
      });
      
      /*var myExpDate = new Date();
      myExpDate.setMonth( myExpDate.getMonth( ) + 2 );
      myExpDate = myExpDate.toISOString();

      var facebookAuthData = {
      "id": session.authResponse.userId+"",
      "access_token": session.authResponse.accessToken,
      "expiration_date": myExpDate 
      }*/

      // Run code after the Facebook SDK is loaded.
      Parse.FacebookUtils.logIn(null, {
        success: function(user) {
          if (!user.existed()) {
            alert("User signed up and logged in through Facebook!");
          } else {
            location.href = 'party_list.html'
            alert("User logged in through Facebook!");
          }
        },
        error: function(user, error) {
          alert("User cancelled the Facebook login or did not fully authorize.");
        }
      });
    };
   
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "http://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }