/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */



import Compressing from "./compressorcreator.js";



//  class Compressing {
//         constructor(
//                 Name,
//                 Threshold,
//                 Expectedsignal,
//                 Ratio,
//                 Totaldb,
//                 Distortion,
//                 Attack,
//                 Hold,
//                 Release
    
//         ){
//                 this.Name=Name;
//                 this.Threshold= Threshold;
//                 this.Expectedsignal= Expectedsignal;
//                 this.Ratio= Ratio;
//                 this.Totaldb=Totaldb;
//                 this.Distortion= Distortion;
//                 this.Timeparameters={
//                         Attack: Attack,
//                         Hold: Hold,
//                         Release: Release,
//                 }
//         }
//     diminisher() {
//                 let totaldb=(this.Expectedsignal-this.Threshold)/this.Ratio;
//                 return totaldb + " db";
//     }
//     } 

const Tube = new Compressing(
        "Tube compressor",
        -20,
        10,
        4,
        4,
        15,
        50,
        140,
        "December 4, 2012 14:00:00 PST"
        );

const Transistor = new Compressing(
        "Transistor",
        -10,
        -3,
        2.5,
        3,
        7,
        0,
        200,
        "March 21, 2008"
);
console.log(Tube);
console.log(Tube.compAge())
console.log(Transistor);
console.log(Transistor.compAge());
console.log(Transistor.ratio);

export var dude = 'hommy';
export default Tube;

// const originalcompressor = {
//     Threshold: -10,
//     expectedsignal: -9,
//     ratio:3,
    
//     totalcompression: function() {
//             let totaldb=(this.expectedsignal-this.Threshold)/this.ratio;
//             return totaldb + " db";
//     },
//     Distortion:5,
//     timeparameters: {
//         attack:15,
//         hold:20,
//         release:100,
//     },
// };
// console.log(originalcompressor);