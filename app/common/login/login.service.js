    export default class {
    
      constructor($http, SettingsService, jwtHelper, $q) { //inetar
        'ngInject';
    
        this.$http = $http; // injetar
        this.settings = SettingsService; // injetar
    
        this.url = this.settings.getApiUrlWithEndpoint("login");
        this.jwtHelper = jwtHelper;
        this.$q = $q;
      }
    
      login(onSuccess, onFailure) {
        var deferred = this.$q.defer();

        facebookConnectPlugin.login(
          ['public_profile', 'user_birthday', 'user_events', 'user_friends',
           'user_location', 'user_likes', 'email'],
           (facebookResponse) => {
            this.loginWithToken(facebookResponse.authResponse.accessToken)
              .then((data) => {
                onSuccess(data);
              })
              .catch((err) => {
                onFailure(err);
              })
           },
           (err) => onFailure(err)
        );

        return deferred;
      }

      // Isso vai retornar uma promise!
      loginWithToken(token) {
        return this.$http.post(this.url + '/facebook', {
          "token": token
        }).then((response) => {
          this.successLogin(response.data);
          return response.data;
        });
      }
    
      successLogin(loginObject) {
        localStorage.setItem("login_token", loginObject.token);
        localStorage.setItem("login_subject", loginObject.subject);
      } 
    
      getUserBasicData() {
        if(!localStorage.getItem('login_token')) {
            return null;
        }
        
        let tokenDecoded = this.jwtHelper.decodeToken(localStorage.getItem('login_token'));
    
        return tokenDecoded._user;
      }
    
      logout() {
        localStorage.removeItem("login_token");
        localStorage.removeItem("login_subject");
      }
    
      isLogged() {
        return localStorage.getItem('login_token') != null;
      }
    }