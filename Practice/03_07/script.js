/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const coffiecup = {
    name:"Gonzito's coffee cup!",
    color:"gray",
    weight: 0.1,
    cupstate: false,
    drinkingcoffee: function(fillingupcup){
        this.cupstate=fillingupcup;
    },
},
/*
const bassguitar = {
    name:"Fender jazz bass",
    color:"orange",
    weight:5,
    strings: {
        stringE:true,
        StringA:false,
        stringD:false,
        string:true,
    },
    knobs:{
        volumeknobs:{
            neckvolume:1,
            bridgevolume:0,
        },
        tone=0,
    }
};
*/