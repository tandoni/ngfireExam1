import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit, OnDestroy {
  message = "Your random value is ";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    document.getElementById('random-btn').classList.add("active");
    this.route.params.subscribe((routeParams: Params) => {
      let value = routeParams['value'];
      // console.log(value);
      let newValue = '0';
      if (value == 2) {
        newValue = `${Math.random() >= 0.5? 'True' : 'False'}`;
      } else if (value == 10) {
        newValue = `${Math.floor((Math.random() * 10) + 1)}`;
      } else if (value == 100) {
        newValue = `${Math.floor((Math.random() * 100) + 1)}`;
      } else if (value == 1000) {
        newValue = `${Math.floor((Math.random() * 1000) + 1)}`;
      }
      if (newValue === 'True' || newValue === 'False') {
        this.message = newValue;
      } else {
        this.message =`Your random value is ${newValue}`;
      }
    });
  }

  ngOnDestroy() {
    document.getElementById('random-btn').classList.remove("active");
  }

}
