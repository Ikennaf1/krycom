class Gemini extends Exchanger
{
    constructor()
    {
        super();
        let base = 1 / 1000;
        this.padding = Math.floor(Math.random() * base);
    }
}

export default Gemini;
