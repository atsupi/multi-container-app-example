var prices = [{"name": "", "id": 1, "price": 0}] // dummy
const table_header = [
    "Id",
    "Name",
    "Price",
];

function createPriceTable() {
    console.log("Creating table: raw=%d", prices.length);
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    for (var j = 0; j < table_header.length; j++) {
        // create header raw
        var th = document.createElement('th');
        th.textContent = table_header[j];
        tr.appendChild(th);
    }
    table.appendChild(tr);
    for (var i = 0; i < prices.length; i++) {
      var tr = document.createElement('tr');
      for (var j = 0; j < table_header.length; j++) {
        // create data raws
        var td = document.createElement('td'); 
        switch (j) {
        case 0:
            td.textContent = prices[i].id;
            break;
        case 1:
            td.textContent = prices[i].name;
            break;
        case 2:
            td.textContent = prices[i].price;
            break;
        default:
        }
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.getElementById('pricetable').appendChild(table);
}

async function callApi() {
    const res = await fetch("http://localhost:3001/fruit/prices");
    return await res.json();
}

async function callPostApi() {
    const data = {
        "name": "melon",
        "price": 500,
    };
    const res = await fetch("http://localhost:3001/fruit/prices", 
        {
            method: "POST",
            mode: "no-cors",
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        });
//    const value = await res.json();
//    return value;
        return res;
}

function buttonClick() {
    //call POST API
    callPostApi().then (result => {
        console.log(result);
        prices = result;
        document.location.reload();
    });
}

document.getElementById("addone").addEventListener('click', buttonClick);

callApi().then(result => {
    prices = result;
    createPriceTable();
});
