import Coinbase from "./Coinbase";
import Gemini from "./Gemini";

class Exchanger
{
    constructor(exchanger)
    {
        switch (exchanger) {
            case 'Coinbase':
                return new Coinbase;
            case 'Gemini':
                return new Gemini;
            default:
                return new Coinbase;
        }
    }
}

export default Exchanger;

// let coinbase = new Exchanger('Coinbase');
// coinbase.get('USD', 'BTC');
