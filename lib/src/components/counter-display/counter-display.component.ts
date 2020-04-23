import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CounterService } from "../../services/counter.service";
import { Observable } from "rxjs/internal/Observable";

/**
 * Display component
 */
@Component({
  selector: "app-counter-display",
  templateUrl: "./counter-display.component.html",
  styleUrls: ["./counter-display.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterDisplayComponent {
  /**
   * Public variable
   */
  public counter: Observable<number>;

  constructor(counterService: CounterService) {
    this.counter = counterService.counter;
  }
}
