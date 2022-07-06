import React from 'react'

export const Finder = () => {

    const form = document.querySelector('.search__form');
    const resultsContainer = document.querySelector('.search__findings-list');
    const countContainer = document.querySelector('.search__findings');
    const errorContainer = document.querySelector('.search__error');
    const inp = document.querySelector('.search__textfield')
    
    const renderError = () => {
      errorContainer.innerHTML = `
            <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
            <p class="search__error-message">
                Произошла ошибка...
            </p>
      `;
      countContainer.innerHTML = '';
    };
    
    const renderEmptyResults = () => {
      errorContainer.innerHTML = `
            <img src="https://code.s3.yandex.net/web-code/entrance-test/search.svg" alt="" class="search__error-icon" />
            <p class="search__error-message">
                По вашему запросу ничего не найдено, попробуйте уточнить запрос
            </p>
      `;
      countContainer.innerHTML = '';
    };
    
    const renderCount = count => {
      countContainer.innerHTML = `
          Найдено <span class="search__findings-amount">${count.toLocaleString(
            'ru-RU'
          )}</span> результатов
      `;
    };
    
    const onSubmitStart = () => {
      countContainer.innerHTML = `Загрузка...`;
      resultsContainer.innerHTML = '';
      errorContainer.innerHTML = '';
    };
    
    function template(item) {
      const newElement = document.createElement('li');
      newElement.classList.add('search__finding-item');
      newElement.innerHTML = `
          <p class="search__finding-name">
              ${item.full_name}
          </p>
        `;
      return newElement;
    }
    
    async function onSubmit(e) {
      // ваш код
      // console.log("onSubmit fn");
      e.preventDefault();
console.log(inp.value);
      await fetch(`https://api.nomoreparties.co/github-search?q=${inp.value}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            
            console.log(data);
        })
    }
    
 

  return (
    <div>
        Finder

    <>
    
        <header class="header">
            <img src="https://code.s3.yandex.net/web-code/entrance-test/github-logo.svg" alt="" class="header__logo" />
            <h1 class="header__title">GitHub Поиск</h1>
        </header>
        <section class="search">
            <form class="search__form" >
                <input type="text" name="title" class="search__textfield" placeholder="Искать в GitHub" />
                <button type="submit" class="search__button" onClick={onSubmit}>
                    Найти
                </button>
            </form>
            <div class="search__result">
                <h2 class="search__findings">
                </h2>
                <ul class="search__findings-list">
                </ul>
            </div>
            <div class="search__error">
            </div>
        </section>
   
    </>

    </div>
  )
}
