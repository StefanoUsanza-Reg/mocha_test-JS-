module.exports = {
    sayHello: function(){
        return 'hello world'
    },
    addNumber: function(x,y){
        return x+y
    },
    divisore: function(x,y){
        if(x%y==0)
            return true
        else
            return false
    },
    anagramma: function(a,b){
        function aSort(text){
            return text.split('').sort().join('')
        }
        a = a.toLowerCase()
        b = b.toLowerCase()
        if(a.localeCompare(b)==0)
            return false
        else if((aSort(a).localeCompare(aSort(b))==0))
            return true
        else
            return false

    },
    minuscolo: function(a){
        return a.toLowerCase()
    },
    numeroPrimo: function(x){
        if(x<=1)
            return false
        else if(x==2)
            return true
        else if(x%2==0)
            return false
        else if(x%2!=0){
            let primo=true
            for(let i=3; i<x; i++){
                if(x%i==0){
                    primo=false
                    break
                }
                    
            }
            return primo
        }
            
    }



}