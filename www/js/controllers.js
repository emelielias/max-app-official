 var firebaseConfig = {
    apiKey: "AIzaSyAv9oCek3DkGxuNn3Vna6JuPgpiGk7Gc5U",
    authDomain: "maxapp-e11de.firebaseapp.com",
    databaseURL: "https://maxapp-e11de.firebaseio.com",
    projectId: "maxapp-e11de",
    storageBucket: "maxapp-e11de.appspot.com",
    messagingSenderId: "402501589169",
    appId: "1:402501589169:web:56e24b5c883ba22423aa90",
    measurementId: "G-E3NT21N5QM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

angular.module('starter.controllers', [])

.controller("Registro", function($scope, $rootScope){
  $scope.obtener = function(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.Correo, usuario.Contra).then(function Listo(x){
      swal("Listo", "Registro correctamente", "success" );

      firebase.database().ref(x.user.uid).set({
        correo:usuario.Correo,
        ID:x.user.uid
      })
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      }).catch(function(error) {
      // An error happened.
      });
      }).catch(function(error) {
       // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      swal("Error",errorMessage, "error");
    });
  }

})

.controller('DashCtrl', function($scope) {
   $scope.categorias = [
     {
       nombre: "TV y video",
       icono: "ion-monitor"
     },
     {
       nombre: "video juegos",
       icono: "ion-game-controller-b"
     },
     {
       nombre: "electrodomestico",
       icono: "ion-android-calendar"
     },
     {
       nombre:"Audio",
       icono:"ion-radio-waves"
     },
     {
       nombre:"camaras y drones",
       icono:"ion-android-camera"
     },
     {
       nombre:"Audifonos y bosinas",
       icono:"ion-headphone"
     },
     {
      nombre:"Ambientadores",
      icono:"ion-volume-mute"
     },
     {
      nombre:"prendas electronicas",
      icono: "ion-qr-scanner"
     }
     ]

})
    

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
