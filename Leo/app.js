let url = window.location.href;
// console.log(url);
let url_segment = url.split('?');
// console.log(url_segment [1]);


let play_btn = document.getElementById('play');
let video = document.getElementById('video');


play_btn.addEventListener('click', () =>{
    if(video.paused) {
        video.play();
        video.style.display = 'unset';
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})

video.addEventListener('ended', () => {
    video.play();
})


let date = new Date();
let main_date = date.getDate();
//comsole.log((main_date))


Array.from(document.getElementsByClassName('date_point')).forEach((el) =>{
    if(el.innerText == main_date) {
       el.classList.add('h6_active')
    }
})

let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Leo',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: [ 'L', 'H', 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 24,
        l: [ 2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12 ],
        h: [ 1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12 ],
        f: [ 5, 6, 15, 17, 18 ],
        e: [ 2, 7, 8, 17, 18 ],
        d: [ 5, 16, 15, 23, 22 ],
        c: [ 1, 2, 11, 12, 19 ],
        b: [ 8, 5 ],
        a: [],
        price: [ 800, 800, 560, 560, 560, 560, 430, 430],
        date: 7,
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Leo',
        loc: 'Dwarka Sector 14 , New Delhi',
        audi: 1,
        type: '4DX',
        series: [ 'L', 'H', 'F', 'E', 'D', 'C', 'B', 'A' ],
        row_section: 3,
        seat: 24,
        l: [ 3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15 ],
        h: [ 5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11 ],
        f: [ 1, 3, 13, 15, 22 ],
        e: [ 3, 9, 10, 20, 24 ],
        d: [ 7, 12, 9, 21, 20 ],
        c: [ 6, 8, 11, 12, 19 ],
        b: [ 8, 5, 12, 13, 14 ],
        a: [],
        price: [ 800, 800, 560, 560, 560, 560, 430, 430],
        date: 24,
    },
]


let addSeats = (arr) => {
   // console.log(Arr)
   arr.forEach((el,) => {
        const{series, row_section, seat, price , a, b ,c, d ,e ,f , h , j} = el;

        // Create Row
        for (let index = 0; index < series.length ; index++) {
         //   console.log(series[index]);
         let row = document.createElement('div');
         row.className = 'row';

        let booked_seats =[];
        booked_seats =[...eval(series[index].toLocaleLowerCase())];
        console.log(booked_seats);
      
        // Create Seats
        
        for (let seats = 0; seats < seat.length; seats++) {
            let li = document.createElement('li');
             let = booked_seats.filter(el =>{
                return el === seats;
             })
        }
        }
    })
}



let data = pvr.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
// console.log(date);
addSeats(data)