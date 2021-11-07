window.addEventListener('DOMContentLoaded', () => { //событие боаузер загрузил html и dom
    const tabs = document.querySelectorAll('.tabheader__items'),
          tabsContent = document.querySelectorAll('.tabcontent'),
           tabsParent = document.querySelector('.tabheader__items');
    console.log(tabs);
    console.log(tabsContent);

    function hideTabContent() {
        tabsContent.forEach(item => {  //перебираем все табы
            item.style.display = 'none';  //скрываем табы
        });
        
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');  //удаление класса активности tabheader__item_active (указываем класс без точки)
        }); 
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');  //добавляем класс
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;  //уменьшение длинны
    console.log(event);
    console.log(target);


        if (target && target.classList.contains('tabheader__item'))  {
            console.log(123);
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }

            });
        }
    });

});