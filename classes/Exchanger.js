class Exchanger
{
    constructor()
    {
        if (this.constructor == Exchanger) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    concatenateCoinSymbols(symbolOne, symbolTwo)
    {
        throw new Error("Method join must be implemented");
    }

    getBuyApi(symbolOne, symbolTwo)
    {
        throw new Error("Method setBuyApi must be implemented");
    }

    getSellApi(symbolOne, symbolTwo)
    {
        throw new Error("Method setSellApi must be implemented");
    }
}

export default Exchanger;
