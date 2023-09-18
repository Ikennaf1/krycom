import Coinbase from "./Coinbase";

class Exchanger
{
    constructor(exchanger)
    {
        switch (exchanger) {
            case 'Coinbase':
                return new Coinbase;
            default:
                return new Coinbase;
        }
    }
}

export default Exchanger;

// let coinbase = new Exchanger('Coinbase');
// coinbase.get('USD', 'BTC');
