function applycss(){
    var a = document.getElementById('bac');
    a.style.display='inline';
    var b = document.getElementById('apply');
    b.style.display='none';
    var c = document.getElementById('hw');
    c.className='hello';
}

function back(){
    var c = document.getElementById('hw');
    c.className='';
    var e = document.getElementById('apply');
    e.style.display='inline';
    var f = document.getElementById('bac');
    f.style.display='none';
}