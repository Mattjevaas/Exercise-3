var data=[];

window.addEventListener("load",function(){

    for(let i=1; i<=51;i++)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://swapi.co/api/people/"+i+"/", true);
        
        xhttp.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200)
            {
                data.push(this.responseText);
            }
        };
    
        xhttp.send();
    }
});

function tableCreate(){

    setTimeout(function()
    {
        var body = document.getElementById("tabel"),
            tbl  = document.createElement('table');
        
            tbl.style.width  = '100%';
            tbl.style.border = '1px solid black';
            
            var tr = tbl.insertRow();
            tr.style.border = '1px solid black';
            
            for(var i=0;i<9;i++)
            {
                th  = document.createElement('th');
                th.className += "has-text-centered"
                th.style.border = '1px solid black';

                if(i==0)
                {
                    th.innerHTML = "No";
                }
                else if(i==1)
                {
                    th.innerHTML = "Name";
                }
                else if(i==2)
                {
                    th.innerHTML = "Height";
                }
                else if(i==3)
                {
                    th.innerHTML = "Mass";
                }
                else if(i==4)
                {
                    th.innerHTML = "Hair Color";
                }
                else if(i==5)
                {
                    th.innerHTML = "Skin Color";
                }
                else if(i==6)
                {
                    th.innerHTML = "Eye Color";
                }
                else if(i==7)
                {
                    th.innerHTML = "Birth Year";
                }
                else if(i==8)
                {
                    th.innerHTML = "Gender";
                }

                tr.appendChild(th);
            }

            for(let j=0;j<data.length;j++)
            {
                var tr = tbl.insertRow();
                tr.className += "has-text-centered"
                tr.style.border = '1px solid black';
                
                for(var k = 0; k < 9; k++)
                {
                    
                    if(k==0)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(j+1));
                    }
                    else if(k==1)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).name));
                    }
                    else if(k==2)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).height));
                    }
                    else if(k==3)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).mass));
                    }
                    else if(k==4)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).hair_color));
                    }
                    else if(k==5)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).skin_color));
                    }
                    else if(k==6)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).eye_color));
                    }
                    else if(k==7)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).birth_year));
                    }
                    else if(k==8)
                    {
                        var td = tr.insertCell();
                        td.style.border = '1px solid black';
                        td.className += "has-text-centered"
                        td.appendChild(document.createTextNode(JSON.parse(data[j]).gender));
                    }
                    
                        
                }
            }

        
        body.appendChild(tbl);
    },5000);
}

var seconds = 5;
    
function tunggu(){

    if (seconds <=0)
    {
        document.getElementById("tunggu").innerHTML = "";
    }
    else
    {
        seconds--;
        document.getElementById("tunggu").innerHTML = "Harap Tunggu "+seconds+" Detik, Sedang Load Data...";
        setTimeout("tunggu()", 1000);
    }
}

function autocomplete(inp, arr) {

var currentFocus;

inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
 
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
   
    this.parentNode.appendChild(a);
    
    for (i = 0; i < arr.length; i++) {
       
        if (JSON.parse(arr[i]).name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            b = document.createElement("DIV");

            b.innerHTML = "<strong>" + JSON.parse(arr[i]).name.substr(0, val.length) + "</strong>";
            b.innerHTML += JSON.parse(arr[i]).name.substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + JSON.parse(arr[i]).name + "'>";
            
            b.addEventListener("click", function(e) {

                inp.value = this.getElementsByTagName("input")[0].value;
    
                closeAllLists();
            });
            a.appendChild(b);
        }
    }
});


inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {

        currentFocus++;

        addActive(x);
    } else if (e.keyCode == 38) { 

        currentFocus--;

        addActive(x);
    } else if (e.keyCode == 13) {

        e.preventDefault();
        if (currentFocus > -1) {

        if (x) x[currentFocus].click();
        }
    }
});

function addActive(x) {

    if (!x) return false;

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);

    x[currentFocus].classList.add("autocomplete-active");
}

function removeActive(x) {

    for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
    }
}

function closeAllLists(elmnt) {

    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
    }
    }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var TRange = null;

function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
        // CODE FOR BROWSERS THAT SUPPORT window.find
        strFound = self.find(str);
        if (strFound && self.getSelection && !self.getSelection().anchorNode) {
            strFound = self.find(str)
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1)
            while (self.find(str, 0, 1)) continue
        }
    } else if (navigator.appName.indexOf("Microsoft") != -1) {
        // EXPLORER-SPECIFIC CODE        
        if (TRange != null) {
            TRange.collapse(false)
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
        if (TRange == null || strFound == 0) {
            TRange = self.document.body.createTextRange()
            strFound = TRange.findText(str)
            if (strFound) TRange.select()
        }
    } else if (navigator.appName == "Opera") {
        alert("Opera browsers not supported, sorry...")
        return;
    }
    if (!strFound) alert("String '" + str + "' not found!")
        return;
};

function search(){
    var search = document.getElementById("input").value;
    findString(search);
};