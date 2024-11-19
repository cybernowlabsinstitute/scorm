window.confirm = function(){};

// window.addEventListener('DOMContentLoaded', function(){
//   let start;

//   const attemptForcePlay = () => {
//     console.log('Date.now() - start', Date.now() - start)
//     if (Date.now() - start < 1000) {
//       console.log('Force Play')
//       window.cpAPIInterface.play();
//     }
//   }

//   let interval = setInterval(function() {
//     if (!window.cpAPIEventEmitter) return
//     window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIEPAUSE", function(){
//       console.log("CPAPI_MOVIEPAUSE");
//       attemptForcePlay();
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIERESUME", function(){
//       console.log("CPAPI_MOVIERESUME");
//       start = Date.now();
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIESTART", function(){
//       console.log("CPAPI_MOVIESTART");
//       start = Date.now();
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_MOVIESTOP", function(){
//       console.log("CPAPI_MOVIESTOP");
//       attemptForcePlay();
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_STARTPLAYBARSCRUBBING", function(){
//       console.log("CPAPI_STARTPLAYBARSCRUBBING");
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_ENDPLAYBARSCRUBBING", function(){
//       console.log("CPAPI_ENDPLAYBARSCRUBBING");
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function(){
//       console.log("CPAPI_SLIDEENTER");
//       attemptForcePlay()
//     });

//     window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEEXIT", function(){
//       console.log("CPAPI_SLIDEEXIT");
//       start = Date.now();
//     });

//     clearInterval(interval);
//   }, 1000)
// });