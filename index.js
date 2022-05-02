let x=0;
let arr = Array();

function addElement() {
    arr[x] = document.getElementById('t1').value;
    alert(`${arr[x]} was Added`);
    x++;
    document.getElementById("t1").value = "";
}

function display(){
    let output = '';
    for(var i =0; i<arr.length;i++){
        output+= `${arr[i]} <br/>`;
    }
    document.getElementById("Result").innerHTML = output;
}
