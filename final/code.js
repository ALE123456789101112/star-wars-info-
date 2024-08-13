setScreen("titlescreen");
// Clicking images from left to right
playSound("assets/category_background/jazzy_beats.mp3", true);
onEvent("Star_destroyer_title_img", "click", function( ) {
console.log("Star_destroyer_title_img clicked!");
setScreen("StarDestroyerSpex");
playSound("assets/category_transition/game_transition_after_match_loading_screen_calculating_sound.mp3", false);
});
//Razor Crest
onEvent("razor_crest_title_img", "click", function( ) {
  setScreen("RazorCrest");
  playSound("assets/category_transition/game_transition_after_match_loading_screen_calculating_sound.mp3", false);
 
  
});
// X-Wing
onEvent("Xwing_title.img", "click", function( ) {
  setScreen("X-Wing");
  playSound("assets/category_transition/game_transition_after_match_loading_screen_calculating_sound.mp3", false);

});
// SlaveI
onEvent("Slave_img_title", "click", function( ){
  setScreen("SlaveI");
  playSound("assets/category_transition/game_transition_after_match_loading_screen_calculating_sound.mp3", false);

});
//Millenium Falcon
onEvent("Mil.Falc.title.img", "click", function( ){
  setScreen("milleniumfalcon");
  playSound("assets/category_transition/game_transition_after_match_loading_screen_calculating_sound.mp3", false);

  });
//TIE interceptor
onEvent("TIE.interceptor.title.img", "click", function( ) {
  setScreen("TIE-Interceptor");
  playSound("assets/category_transition/game_transition_after_match_loading_screen_calculating_sound.mp3", false);

 });
//Back buttons
onEvent("back-star-destroyer", "click", function( ) {
  setScreen("titlescreen");
});
onEvent("button2", "click", function( ) {
  setScreen("titlescreen");
});
onEvent("x-WING", "click", function( ) {
  setScreen("titlescreen");
});
onEvent("button3", "click", function( ) {
  setScreen("titlescreen");
});
onEvent("Back1", "click", function( ) {
  setScreen("titlescreen");
});
onEvent("button1", "click", function( ) {
  setScreen("titlescreen");
});
