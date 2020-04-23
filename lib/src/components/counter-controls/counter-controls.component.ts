import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CounterService } from "../../services/counter.service";

/**
 * Control component
 */
@Component({
  selector: "app-counter-controls",
  templateUrl: "./counter-controls.component.html",
  styleUrls: ["./counter-controls.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterControlsComponent {
  constructor(private readonly counterService: CounterService) {}

  /**
   * Public method
   */
  public incrementCounter(): void {
    this.counterService.increment();
  }

  /**
   * Public method
   */
  public decrementCounter(): void {
    this.counterService.decrement();
  }
}
