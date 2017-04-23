var dataObj = {
  "bestBid": 106.7297012204255,
  "bestAsk": 107.25199883791178,
  "openBid": 107.22827132623534,
  "openAsk": 109.78172867376465,
  "lastChangeAsk": -4.862314256927661,
  "lastChangeBid": -2.8769211401569663
}

var tbody = document.getElementById('sortableTable');
console.log('tbody = ', tbody);

var sortable = [];
for (var data in dataObj) {
    sortable.push([data, dataObj[data]]);
}

sortable.sort(function(a, b) {
    return a[0] - b[0];
});

console.log('sortable -- ',sortable);

// for(var key in sortable){
//     var tr = document.createElement('tr');
//     console.log('tr = ', tr);

//     var tdkey = document.createElement('td'); 
//     console.log('tr = ', tdkey);

//     var tdval = document.createElement('td'); 
//     console.log('tr = ', tdval);

//     // tbody.accessKey.insertRow(0);
//     tdkey.innerHTML = key;
//     tdval.innerHTML = dataObj[key];
//     tr.appendChild(tdkey);
//     tr.appendChild(tdval);
//     tbody.appendChild(tr);
//     console.log('key = ',key,'   val = ', dataObj[key]);
// }


sortable.forEach(function(element) {
  console.log('element -- ', element)

    var tr = document.createElement('tr');
    var tdkey = document.createElement('td'); 
    var tdval = document.createElement('td'); 
    tdkey.innerHTML = element[0];
    tdval.innerHTML = element[1];
    tr.appendChild(tdkey);
    tr.appendChild(tdval);
    tbody.appendChild(tr);
}, this);