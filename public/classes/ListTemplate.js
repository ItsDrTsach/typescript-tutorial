var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement("li");
        var h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        pos === "start" ? this.container.prepend(li) : this.container.append(li);
        localStorage.setItem("history", this.container.innerHTML);
    };
    return ListTemplate;
}());
export { ListTemplate };
