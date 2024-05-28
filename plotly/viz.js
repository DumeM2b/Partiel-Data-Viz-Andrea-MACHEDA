fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    const topCountries = getTop30CountriesByPopulation(data);

    const countryNames = topCountries.map(country => country.country);
    const populations = topCountries.map(country => country.population);

    const plotData = [{
        x: countryNames.reverse(),
        y: populations.reverse(),
        type: 'bar',
        marker: {
            color: 'white'
        }
    }];

    const layout = {
        title: 'Population of Top 30 Countries',
        font: {
            color: 'white'
        },
        plot_bgcolor: 'rgba(0,0,0,0)',
        paper_bgcolor: 'rgba(0,0,0,0)',
    };

    var config = {
        displayModeBar: false
    };

    Plotly.newPlot('barchart', plotData, layout, config);
}

function getTop30CountriesByPopulation(data) {
    data.sort((acc, value) => value.population - acc.population);
    return data.slice(0, 30);
}
