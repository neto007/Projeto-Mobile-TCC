import styles from './usuario-profile.scss';

export default class {

  constructor($state, LoginService) {
    'ngInject';

    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.state = $state;
    
    this.user = LoginService.getUserBasicData();  }

 concluir(){
    alert("Alterações concluídas");
    this.state.go("home");
  }

  /*getImage(){
     var options = {
                maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
                width: 800,
                height: 800,
                quality: 80            // Higher is better
            };
           
             // abre as imagens no aparelho
            $cordovaImagePicker.getPictures(options).then(function (results) {
                // Loop through acquired images
                for (var i = 0; i < results.length; i++) {
                    $scope.collection.selectedImage = results[i];   // We loading only one image so we can use it like this

                    window.plugins.Base64.encodeFile($scope.collection.selectedImage, function(base64){  // Encode URI to Base64 needed for contacts plugin
                        $scope.collection.selectedImage = base64;
                        $scope.form_identidade_visual.logomarca = $scope.collection.selectedImage;
                        //$scope.addContact();    // Save contact
                    });
                }
            }, function(error) {
                console.log('Error: ' + JSON.stringify(error));    // In case of error
            });
        };*/

  

  $onInit() {
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
