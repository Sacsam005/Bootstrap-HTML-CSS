/* <div class="col-md-5 col-sm-12 text-white">
        <h6>Become a <div id="result"></div></h6> */

const showName = () => {
    let name = document.getElementById('result');
    name.innerHTML = 'a Coding-Expert';


setTimeout(() => {
    name.innerHTML = 'a Web-Developer';
}, 1000);

setTimeout(() => {
    name.innerHTML = 'an Engineer';
}, 2000);

setTimeout(() => {
    name.innerHTML = 'a FreeLancer';
}, 3000);
}
showName();

setInterval(showName, 4000);