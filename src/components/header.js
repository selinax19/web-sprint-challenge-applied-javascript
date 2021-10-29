const Header = (title, date, temp) => {
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
    //Instantiate all the elements needed for Header parts
    const header = document.createElement('div');
    const dateSec = document.createElement('span');
    const titleSec = document.createElement('h1');
    const tempSec = document.createElement('span');

    //Setup the structure of the elements of Header
    header.appendChild(dateSec);
    header.appendChild(titleSec);
    header.appendChild(tempSec);

    //Add proper attributes such as class names
    header.classList.add('header');
    dateSec.classList.add('date');
    tempSec.classList.add('temp');

    //Set text content using arguments as raw material
    dateSec.textContent = date;
    titleSec.textContent = title;
    tempSec.textContent = temp;

    return header;
}

// const testHeader = Header('lambda Times', 'January 6, 2021', '26°C');
// console.log('testHeader: ', testHeader);

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerSec = Header('Lambda Times', 'January 6, 2021', '26°C');
  document.querySelector(selector).appendChild(headerSec);
}

// headerAppender('.header-container');

export { Header, headerAppender }