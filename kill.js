// El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.

$(document).ready(function(){
    var names = ['Eric', 'Jane', 'Terry', 'Lara'];
    var ericMet1 = ['Jane', 'John', 'Mike', 'Leigh', 'Todd', 'Lee', 'Judy'];
    var jenMet2 = ['Mark', 'Mike', 'Leigh', 'Jim', 'Lara', 'John', 'Bill'];
    var terryMet3 = ['Joe', 'Sara', 'Reg', 'Jill', 'John', 'Greg', 'Bryan'];
    var laraMet4 = ['Pete', 'Li', 'Reg', 'Todd', 'Reg', 'Jane', 'Mike', 'Jen', 'Ang'];
    var coin = false;

    console.log('Hola Mundo');

    console.log('Eric met (' + ericMet1 + ')');
    console.log('Jane met (' + jenMet2 + ')');
    console.log('Terry met (' + terryMet3 + ')');
    console.log('Lara met (' + laraMet4 + ')');

    for (var i = 0; i < ericMet1.length; i++) { //extraer cada elemento del array
        var element = ericMet1[i];
        // console.log(ericMet1[i]);

        //comparando el nombre en comun con ericMet
        if(terryMet3.includes(element)) { //si encuentra el mismo elemento de ericMet1 igual dentro de terryMet        
            
            //y si encontramos relacion con otras 2 victimas de la lista
            if (jenMet2.includes(element) === terryMet3.includes(element))
                console.log(`The killer is ${element} and the next victim is ` + names[1]);

            else if ((laraMet4.includes(element) === terryMet3.includes(element)))
                console.log(`The killer is ${element} and the next victim is ` + names[3]);
        }
    }
});