const waitFor = selector => {
    return new Promise((resolve, reject) => {

        const interval = setInterval(() => {
            if (document.querySelector(selector)) {
                clearInterval(interval);
                clearTimeout(timeout);
                resolve();
            }
        }, 30);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            reject();
        }, 2000);

    });
};

beforeEach(() => {
    document.querySelector('#target').innerHTML = '';
    createAutoComplete({
      root: document.querySelector('#target'),
      fetchData() {
        return [
          { Title: 'Avengers' },
          { Title: 'Not Avengers' },
          { Title: 'Some other movie' }
        ];
      },
      renderOption(movie) {
        return movie.Title;
      }
    });
  });

it("Shows an Auto-Complete - Dropdown starts closed", (done) => {
    
        const dropdown = document.querySelector('.dropdown');
      
        if(dropdown.classList.contains('is-active')){
            done(new Error("Error: Dropdown is not started closed."));
        }
        else
            done();
      
});

it('Shows an Auto-Complete - After searching, dropdown opens up', async () => {
    const input = document.querySelector('input');
    input.value = 'avengers';
    input.dispatchEvent(new Event('input'));
    
    await waitFor('.dropdown-item');
    const dropdown = document.querySelector('.dropdown');
  

    if(!dropdown.classList.contains('is-active')){
        throw new Error("Error: Dropdown does not open ups, after searching.");
    }
});
