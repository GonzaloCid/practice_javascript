/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: { 
    left: 26,
    right: 26,                
  },
  
  extraspace: function(){
 
    this.volume= this.volume+5;
    console.log(this.volume);
  },
  newname: function(){
      
     
      this.name= "Forever Backpack";
      return "From now on I call my backpack the " + this.name;
      
  },
 extrapockets: function(){
    this.pocketNum=this.pocketNum+10;
    return this.pocketNum;
 },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  paintonbackpack: function(){
    this.color="red";
    return "ooups I accidentally painted my backpack and now it's "+ this.color;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    return "the new length for the left strap is "+ this.strapLength.left + 
    " and the new length for the right strap is "+ this.strapLength.right;
  },
};
