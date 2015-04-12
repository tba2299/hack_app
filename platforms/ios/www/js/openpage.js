var lock = new Auth0Lock('nC615HOb0Lf2lmQkqqApIisAPyPM29xv', 'hack-app.auth0.com');
	    
	function signin() {
		lock.show({
			container: 'container'
			, callbackURL: {window.location:'bs.html'}
			, responseType: 'code'
			, authParams: {
			scope: 'openid profile'
			}
		});
	}