function fixSpin () {
var pitch = geofs.animation.values.atilt
setTimeout(() => {
//Detecting spin
if ((geofs.animation.values.atilt + 50 < pitch) || (geofs.animation.values.atilt - 50 > pitch)) {
//Keeping airspeed
//When the aircraft starts spinning, it loses some airspeed before the fix can run
geofs.aircraft.instance.definition.minimumSpeed = 600
console.log("Spin detected")
//Aircraft is reset, keeping airspeed
geofs.flyToCamera()
console.log("Spin fixed")
//Resetting airborne spawn speed to normal now that we're done
setTimeout(() => {
   geofs.aircraft.instance.definition.minimumSpeed = 250
}, 5000)
      }
   }, 500);
}

//Repeating the function
let fixyFixy = setInterval(function(){
   fixSpin()
}, 1000);