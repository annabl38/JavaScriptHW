// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select('tbody')
tableData.forEach((entry)=> {
    var row = tbody.append('tr')
    Object.entries(entry).forEach(([key,value]) => {
        var cell = tbody.append('td')
        cell.text(value)
    })
})

var filter = d3.select('#filter-btn')

filter.on('click', function() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var inputElement=d3.select('#datetime')
    var filterValue=inputElement.property('value')
    function selectDate(sighting) {
        return sighting.datetime==filterValue
    }
    var filteredTable=tableData.filter(selectDate)
    filteredTable.forEach((entry)=> {
        var row = tbody.append('tr')
        Object.entries(entry).forEach(([key,value]) => {
            var cell = tbody.append('td')
            cell.text(value)
        })
    })
    if(filterValue==''){
        tableData.forEach((entry)=> {
            var row = tbody.append('tr')
            Object.entries(entry).forEach(([key,value]) => {
                var cell = tbody.append('td')
                cell.text(value)
            })
        })
    }
})
