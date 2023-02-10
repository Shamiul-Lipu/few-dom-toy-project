/*
 * Title: All the DOM projects JavaScriopts file
 * Description: This file has all the DOM js function associated with this project
 * Author: Shamiul
 * Date: Feb-10-2023
 *
*/

/*----------------------------------
            Counter App
-----------------------------------*/
// set initial count
let count = 0;
// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// function 
btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
        const mybtn = event.currentTarget.classList;
        if (mybtn.contains('decrease')) {
            value.style.color = 'red';
            count--;
        }
        else if (mybtn.contains('increase')) {
            value.style.color = 'green';
            count++;
        }
        else {
            value.style.color = 'black';
            count = 0;
        }

        value.textContent = count;
    });
});