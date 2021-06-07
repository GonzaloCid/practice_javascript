class Compressing {
    constructor(
            Name,
            Threshold,
            Expectedsignal,
            Ratio,
            Distortion,
            Attack,
            Hold,
            Release,
            Dateaquired,

    ){
            this.Name=Name;
            this.Threshold= Threshold;
            this.Expectedsignal= Expectedsignal;
            this.Ratio= Ratio;
            this.Distortion= Distortion;
            this.Timeparameters={
                    Attack: Attack,
                    Hold: Hold,
                    Release: Release,
            }
            this.Dateaquired= Dateaquired
    }
    compAge(){
            let now = new Date();//this global function(constructor) will output the current date and we assign it to a variable(miliseconds)
            let acquired = new Date(this.Dateaquired);//This global function transforms a string(in this case the date aquired) and transforms it into data to be able to process it(also miliseconds)
            let elapsed = now - acquired;//now that both variables have a format we can calculate using them( result will be in miliseconds)
            let dayssinceacquired = Math.floor(elapsed / (1000*3600*24));
            let yearssinceaquired = Math.floor(dayssinceacquired/365);
            return "this compressor is " + yearssinceaquired + " years old";
         }
diminisher() {
            let reduction=(this.Expectedsignal-this.Threshold)/this.Ratio;
            return reduction + "db";
}
};

export default Compressing;

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
