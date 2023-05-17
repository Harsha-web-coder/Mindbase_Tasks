function a(){
    b();
    function b(){
        v=10;
    }
}
a();
console.log(v);
//
function z(){
    var x=10;
    q();
    function q(){
        console.log(x);
    }
}
z();
//cannot access variable
/*
function a(){
    b();
    function b(){
        console.log(v);
    }
}
a();
v=10;
*/
//let variables cannot be accessed in window and this (Globalcallstack).But var can be accessed.
/*
LET->Syntax Error(no duplicate declarations),TypeError (no multiple declarations with same variable).
Reference Error(cannot access before initialization,not defined)->Temporal Dead zone
CONST->SyntaxError,Type Error(cannot access multiple values to a variable).
				Cannot do declare and assign in another line of code
					we need to declare and assign both in same line
VAR->can do multiple declarations with same variable.
*/