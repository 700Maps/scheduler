date = new Date()
day = date.getDate()
month = date.toLocaleString('default', { month: 'long' });
year = date.getFullYear()
document.getElementById('date').innerHTML = `${month} ${day} ${year}`

const monthDays = [
    ['september', 30],
    ['october', 31],
    ['november', 30],
    ['december', 31],
    ['january', 31],
    ['febuary', 28],
    ['march', 31],
    ['april', 30],
    ['may', 31],
    ['june', 30],
    ['july', 31],
    ['august', 31]
]

let numberOfDays
for (let i = 0; i < monthDays.length; i++) {
    if (monthDays[i][0] == month.toLowerCase()) {
        numberOfDays = monthDays[i][1]
    }
}

let markedDays = JSON.parse(localStorage.getItem('markedDays'))
console.log(markedDays)

dayNumber = 1
document.querySelectorAll('td').forEach(element => {
    if (dayNumber == day) {
        element.classList.add('currentDay')
    };

    if (markedDays.some(subArray => subArray.includes(dayNumber.toString()))) {
        element.classList.add('markedDay')

        let subArray = markedDays.find(subArray => subArray.includes(dayNumber.toString()));

        x = document.createElement('div')
        x.classList.add('dayTitle')
        x.innerHTML = subArray[0]
        element.append(x)
    }

    if (dayNumber < numberOfDays + 1) {
        x = document.createElement('div')
        x.classList.add('numberDay')
        x.innerHTML = dayNumber
        dayNumber++
        element.append(x)
    } else {
        element.classList.add('unusedSpace')
    };
});

console.log('JS loaded')