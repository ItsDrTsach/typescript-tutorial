import HasFormatter from "../interfaces/HasFormatter.js";
export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: HasFormatter, heading: string, pos: "start" | "end"): void {
    let li = document.createElement("li");
    let h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);
    let p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);
    pos === "start" ? this.container.prepend(li) : this.container.append(li);
    localStorage.setItem("history", this.container.innerHTML);
  }
}
