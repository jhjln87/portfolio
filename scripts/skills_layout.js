const skillsData = [
    {
        author: "Josh Thompson, associate turned friend",
        quote: "Hardworking and devoted",
        span: 10
    },
    {
        author: "Julie Yung, manager",
        quote: "Consistent and shows up every day",
        span: 12
    },
    {
        author: "Dallin Murdock, associate",
        quote: "Problem solver",
        span: 9
    },
    {
        author: "Lynn Watson, professor",
        quote: "Reliable, dependable, prepared",
        span: 11,
        bold: true
    },
    {
        author: "Aidan Beal, manager",
        quote: "Hardworking, dedicated, and enjoyable to be around",
        span: 10
    },
    {
        author: "Gary Godderidge, professor",
        quote: "Dutiful, responsible, caring, talented, gifted, and capable",
        span: 12
    }
]

const skillsContainer = document.getElementById('skills');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const total_columns = 35;

skillsData.forEach((item, index) => {
    const p = document.createElement('p');
    const row = Math.floor(index / 2) + 1; 
    const isSecondInRow = index % 2 !== 0;

    if (!isSecondInRow) {
        const firstSpan = getRandomInt(11, 19);
        const colStart = getRandomInt(1, Math.max(1, 18 - firstSpan));
        
        p.style.gridRow = `${row}`;
        p.style.gridColumn = `${colStart} / span ${item.span}`;
        skillsContainer.dataset.lastEnd = colStart + firstSpan;
    } else {
        const minStart = parseInt(skillsContainer.dataset.lastEnd) + 2;
        const maxStart = total_columns - Math.floor(item.span);
        let colStart;
        if (minStart >= maxStart) {
            colStart = minStart;
        } else {
            colStart = getRandomInt(minStart, maxStart);
        }
        const remainingSpan = (total_columns + 1) - colStart;

        p.style.gridRow = `${row}`;
        p.style.gridColumn = `${colStart} / span ${item.span}`;
        
    }

    if (item.bold) {
        p.classList.add('bold');
    }
    p.innerHTML = `"${item.quote}" -${item.author}`;

    skillsContainer.appendChild(p);
});