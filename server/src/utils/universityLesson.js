const formatDay = (empty) => {
    switch (empty) {
        case "__EMPTY":
            return "Pazartesi"
            break;
        case "__EMPTY_1":
            return "Salı"
            break;
        case "__EMPTY_2":
            return "Çarşamba"
            break;
        case "__EMPTY_3":
            return "Perşembe"
            break;
        case "__EMPTY_4":
            return "Cuma"
            break;
    }
}


const formatData = (data) => {
    let newData = [];
    let currentDepartment = {};

    for (let i = 0; i < data.length; i++) {
        if (data[i].lessons.startsWith('class')) {
            if (Object.keys(currentDepartment).length !== 0) {
                newData.push(currentDepartment);
                currentDepartment = {};
            }
            currentDepartment.name = data[i].lessons.substring(6).trim();
            currentDepartment.lesson = [];
        } else if (data[i].lessons === 'SAAT') {
            i += 1;
        } else {
            const time = data[i].lessons.split('-')[0];
            for (let j = 1; j < Object.keys(data[i]).length; j++) {
                const day = Object.keys(data[i])[j];
                const lessonNames = data[i][day].split(' / ');
                for (let k = 0; k < lessonNames.length; k++) {
                    const lessonName = lessonNames[k];
                    if (lessonName) {
                        currentDepartment.lesson.push({ name: lessonName, time: time, day: formatDay(day) });
                    }
                }
            }
        }
    }

    newData.push(currentDepartment);
    return newData;
}


module.exports = {
    formatData
}