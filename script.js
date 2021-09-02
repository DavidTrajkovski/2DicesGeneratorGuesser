
    var jsonniza=new Array(); //niza vo koja ke se smestuvaat json objektite sto se kreiraat
    function roll()
    {
        var x = document.getElementById("vnesenbroj");
        var xbroj = parseInt(x.value);
        //console.log(x.value); //za proverka

        var randbroj1 = Math.floor(Math.random() * 6) + 1;
        //console.log(randbroj1); //za proverka
        randbroj1 = parseInt(randbroj1)

        var randbroj2 = Math.floor(Math.random() * 6) + 1;
        //console.log(randbroj2); //za proverka
        randbroj2 = parseInt(randbroj2)

        var div1 = document.getElementById("broj1");
        var div2 = document.getElementById("broj2");


        var pos=0;
        id=setInterval(generator,10)

        function generator()
    {
        if(pos>100) //vrednosta tuka moze da se menuva, sega ne znam dali otprilika ova e od 1 do 3 sekundi
    {
        clearInterval(id);
        div1.innerText = randbroj1;
        div2.innerText = randbroj2;
        if ((randbroj1 + randbroj2) === xbroj)
    {
        x.style.backgroundColor = "green";
    }
        else
    {
        x.style.backgroundColor = "red";
    }
    }
        else
    {
        pos++;
        div1.innerText=Math.floor(Math.random() * 6) + 1;
        div2.innerText=Math.floor(Math.random() * 6) + 1;
    }
    }

        var obj=new Object();
        obj.input=xbroj;
        obj.dices=[randbroj1,randbroj2];

        //console.log(obj); //za proverka

        var jsonobj=JSON.stringify(obj);
        jsonniza.push(jsonobj)
        //console.log(jsonniza); //za proverka
    }

    function HistorytoJson()
    {
        alert("["+jsonniza+"]");
    }

