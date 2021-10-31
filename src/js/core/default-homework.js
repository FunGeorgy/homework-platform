export class Homework {
  config;
  img;
  obj;

    constructor(config) {
    console.log(config);
    this.config = config;
    this.addHomework();
    this.obj = document.getElementById("head");
    this.img = document.createElement("img");
    this.img.className = "image";
    this.img.id = "image";
    this.img.src = config.img;
    this.obj.appendChild(this.img);
  }

  addHomework() {
    this.takeHtmlCode(document, this.config.codeHtml)
    console.log(document.getElementById("homework"));
  }

  takeHtmlCode (document, path) {
        Promise.all([
          fetch(path)
            .then((response) => response.text())
            .then((result) => {
                console.log('im here')
                document.getElementById("homework").innerHTML = result
            })
            .catch((error) => console.dir(error + " ошибка с запросом")),
        ]);
      }
}
