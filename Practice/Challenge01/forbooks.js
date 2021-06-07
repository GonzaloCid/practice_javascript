class Bookorg {
    constructor(
        title,
        author,
        genre,
        datereleased,
        state,
        pagenumber,
    )
    {
        this.title=title;
        this.author=author;
        this.genre=genre;
        this.datereleased=datereleased;
        this.state=state;
        this.pagenumber=pagenumber;
    }
    bookage(){
        let timerelease = new Date(this.datereleased);
        let now = new Date();
        let elapsed = now - timerelease;
        let dayssinceacquired = Math.floor(elapsed / (1000*3600*24));
        let yearsold= Math.floor(dayssinceacquired/365);

        return "this book is " + yearsold + " years old";
    }
}
export default Bookorg;