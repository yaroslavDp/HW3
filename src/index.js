import { App } from "./js/script";
window.addEventListener('DOMContentLoaded', function() {
     const app = new App()

     app.charGetAll()
     app.charSearchById()
     app.updCharacter();


});