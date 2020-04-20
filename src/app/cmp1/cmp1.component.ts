import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
} from "@angular/core";
import { Cmp2Component } from "../cmp2/cmp2.component";

@Component({
  selector: "app-cmp1",
  templateUrl: "./cmp1.component.html",
  styleUrls: ["./cmp1.component.css"],
})
export class Cmp1Component implements OnInit, AfterContentInit {
  @ContentChild(Cmp2Component) cmp2: Cmp2Component;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit() {
    console.log("from comp1", this.cmp2.str);
  }
}
