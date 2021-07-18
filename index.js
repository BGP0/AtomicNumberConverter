const parts = ['nil','un','bi','tri','quad','pent','hex','sept','oct','enn']

function convert() {
    var input = document.getElementById("input").value
    var output = ""

    for (i of input) {
        output += parts[i]
    }

    document.getElementById("output").innerHTML = output.charAt(0).toUpperCase() + output.slice(1) + "ium"
}