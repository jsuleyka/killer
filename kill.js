// El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.

$(document).ready(function(){
    var names = ['Eric', 'Jane', 'Terry', 'Lara'];
    var ericMet1 = ['Jane', 'John', 'Mike', 'Leigh', 'Todd', 'Lee', 'Judy'];
    var jenMet2 = ['Mark', 'Mike', 'Leigh', 'Jim', 'Lara', 'John', 'Bill'];
    var terryMet3 = ['Joe', 'Sara', 'Reg', 'Jill', 'John', 'Greg', 'Bryan'];
    var laraMet4 = ['Pete', 'Li', 'Reg', 'Todd', 'Reg', 'Jane', 'Mike', 'Jen', 'Ang'];
    var coin = 0;

    console.log('Hola Mundo');

    console.log('Eric met (' + ericMet1 + ')');
    console.log('Jane met (' + jenMet2 + ')');
    console.log('Terry met (' + terryMet3 + ')');
    console.log('Lara met (' + laraMet4 + ')');

    for (var i=0; i<ericMet1.length; i++) {
        var element = ericMet1[i];

        if(terryMet3.includes(element))
            console.log(`The killer is ${element} and the next victim is ` + names[1]);
    }
});