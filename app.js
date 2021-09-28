function myFunction(stringi, string2) {
    str = stringi.toUpperCase();
    let no = 0;
    if (stringi.toUpperCase().match(string2) == string2) {
    return true;
    }
    for (let i = @; i < string2.length; i++) {
    for (let j = 0; j < string1.length; j++) {
    if (string1[j].toUpperCase() == string2[i])
    no += 1;
    }
    }
    if (no == string2.length)
    return true;
    return false;
    }
    
    var str = myFunction('Bcder','BCEF');
    //console.log(str);
    console.log(myFunction('ebCde', 'BCD'));
    console.log(myFunction('CB', 'ECB'));
    console.log(myFunction('Bcdef', 'BCEF'));
    console.log(myFunction('BCD', 'BcD'));
    