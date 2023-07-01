var elements = []

function calculateAverage() {
    let totalPoints = 0;
    let totalWeight = 0;
    for (let i = 0; i < elements.length; i++) {
        let note = parseFloat(elements[i][0]);
        let score = parseFloat(elements[i][1]);
        if (!isNaN(note) && !isNaN(score)) {
            totalPoints += note * score;
            totalWeight += score;
        }
    }
    let average = totalPoints / totalWeight;
    document.getElementById('result').innerHTML = "Durchschnittsnote: " + average.toFixed(2);
    let cpPercentage = (totalWeight / 180) * 100;
    createChart(cpPercentage);
}

function addElement() {
    let note = document.getElementById('note').value
    let cp = document.getElementById('cp').value
    let module = document.getElementById('module').value
    let element = document.createElement('tr');
    element.classList.add('element')
    element.innerHTML = '<td class="element-value">' + note + '</td><td class="element-value">' + cp + '</td><td class="element-value">' + module + '</td>'
    let container = document.getElementById('element-container');
    container.appendChild(element);
    let ele = [note, cp, module]
    elements.push(ele)
    console.log(elements)
}

function createChart(cpPercentage) {
    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Verwendete CPs', 'Übrige CPs'],
            datasets: [{
                data: [cpPercentage, 180 - cpPercentage],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}