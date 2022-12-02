let status = document.getElementById('status');
let output = document.getElementById('output');
if (FileReader) {
  document.getElementById('file-selector').addEventListener ('change', event => {
    output.src = '';
    status.textContent = '';
    let file = event.target.files[0];
    // проверяет файл на формат если не изображение то код работает
    if (!file.type.match('image.*')) {
        
        document.body.style.background = "Black";
        // вовремя ошибки формата Изображения
        // берет див изменяет его дисплей на блок и берет инпут изменяет его свойство дисплей на none
      document.getElementById('file-selector').style.display = "none";
      document.getElementById('status').style.display = "block"; 
      document.getElementById('status').textContent = "Ошибка формата";
      document.getElementById('status').style.color = "Red";
      document.getElementById('status').style.fontFamily = "sans-serif";
      document.getElementById('status').style.fontSize = "30px";
      
      // Создаем переменную btn - кнопка 
      var btn = document.createElement("button");
      btn.textContent = "Закрыть";  
      document.getElementById('status').appendChild(btn);
      btn.style.fontSize = "22px";
      // функция нажания на кнопку для того что бы закрыть 
      btn.onclick = function(){
      document.getElementById('status').style.display = "none"; 
      document.getElementById('file-selector').style.display = "block";
      
      // удаляем элемент инпут
      let firstInput = document.getElementById('file-selector');
      firstInput.parentNode.removeChild(firstInput);
    
      // Добовляем текст
      document.write("Обновите страницу!!!");
    }
      return;
    }
    //создаем новое переменное 
    let reader = new FileReader();
    //из  img берем значениие 
    reader.addEventListener('load', event => {
      //возврашает результать
      output.src = event.target.result;
      
    });
    //читаем значение файла
    reader.readAsDataURL(file);
  });
}