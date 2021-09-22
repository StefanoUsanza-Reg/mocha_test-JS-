const assert = require('chai').assert
const expect = require('chai').expect
const app = require('../script')
//const sayHello = require('../script').sayHello

//Results
sayHelloResult = app.sayHello()
addNumberResult = app.addNumber(2,3)
divisoreResult1 = app.divisore(25,5)
divisoreResult2 = app.divisore(25,2)
minuscolo = app.minuscolo("HeLlO")
anagramma1 = app.anagramma("Ralsei","Asriel")
anagramma2 = app.anagramma("casa","cassa")
anagramma3 = app.anagramma("pane","pane")

numeroPrimoResult1 = app.numeroPrimo(5)
numeroPrimoResult2 = app.numeroPrimo(10)
numeroPrimoResult3 = app.numeroPrimo(1)
numeroPrimoResult4 = app.numeroPrimo(2)
numeroPrimoResult5 = app.numeroPrimo(0)
numeroPrimoResult6 = app.numeroPrimo(-3)
numeroPrimoResult7 = app.numeroPrimo(235)


describe('script', function(){
    describe('sayHello()', function(){
        //assert
        it('la funzione sayHello dovrebbe ritornare hello world', function(){
            assert.equal(sayHelloResult, 'hello world')
        })

        it('sayHello should return type string', function(){
            assert.typeOf(sayHelloResult, 'String')
        })
        //expect
        it('sayHello should return hello world', function(){
            expect(sayHelloResult).to.equal('hello world')
        })

    })
    describe('addNumber()', function(){
        it('addNumber should return 5', function(){
            assert.equal(addNumberResult, 5);
        })
        it('addNumber should return type number', function(){
            assert.typeOf(addNumberResult, "number");
        })
    })

    describe('divisore()', function(){
        it('divisore should return type boolean', function(){
            assert.typeOf(divisoreResult1, 'boolean');
        })
        it('divisore should return true', function(){
            assert.equal(divisoreResult1, true);
        })
        it('divisore should return false', function(){
            assert.equal(divisoreResult2, false);
        })
    })

    describe('minuscolo()', function(){
        it('minuscolo should return hello', function(){
            assert.equal(minuscolo, 'hello');
        })
    })

    describe('anagramma()', function(){
        it('anagramma should return true', function(){
            assert.equal(anagramma1, true);
        })
        it('anagramma should return false', function(){
            assert.equal(anagramma2, false);
        })
        it('anagramma should return false', function(){
            assert.equal(anagramma3, false);
        })
    })

    describe('numeroPrimo()', function(){
        it.only('numeroPrimo should return true', function(){
            assert.equal(numeroPrimoResult1, true);
        })
        it.only('numeroPrimo should return false', function(){
            assert.equal(numeroPrimoResult2, false);
        })
        it.only('numeroPrimo should return false', function(){
            assert.equal(numeroPrimoResult3, false);
        })
        it.only('numeroPrimo should return true', function(){
            assert.equal(numeroPrimoResult4, true);
        })
        it.only('numeroPrimo should return false', function(){
            assert.equal(numeroPrimoResult5, false);
        })
        it.only('numeroPrimo should return false', function(){
            assert.equal(numeroPrimoResult6, false);
        })
        it.only('numeroPrimo should return false', function(){
            assert.equal(numeroPrimoResult7, false);
        })
    })

})