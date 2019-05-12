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

var datefilter = d3.select('#datetime')
var cityfilter = d3.select('#city')
var statefilter = d3.select('#state')
var countryfilter = d3.select('#country')
var shapefilter = d3.select('#shape')



function handleDateChange() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.datetime==filterValue
    }
    var filteredTable=tableData.filter(selectData)
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
    
}
function handleCityChange() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.city==filterValue
    }
    var filteredTable=tableData.filter(selectData)
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
    
}
function handleStateChange() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.state==filterValue
    }
    var filteredTable=tableData.filter(selectData)
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
    
}
function handleCountryChange() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.country==filterValue
    }
    var filteredTable=tableData.filter(selectData)
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
    
}
function handleShapeChange() {
    d3.event.preventDefault()
    d3.selectAll('td').remove()
    var filterValue=d3.event.target.value
    function selectData(sighting) {
        return sighting.shape==filterValue
    }
    var filteredTable=tableData.filter(selectData)
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
    
}
datefilter.on('change',handleDateChange)
cityfilter.on('change',handleCityChange)
statefilter.on('change',handleStateChange)
countryfilter.on('change',handleCountryChange)
shapefilter.on('change',handleShapeChange)