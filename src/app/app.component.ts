import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  title = "demo";
  @ViewChild("hone") href: ElementRef;
  @ViewChildren("para") pref: QueryList<ElementRef>;
  ngAfterViewInit() {
    console.log(this.href.nativeElement.innerHTML);
    console.log(this.pref);
    this.pref.forEach((x) => {
      console.log(x.nativeElement.innerHTML);
    });
  }
}
