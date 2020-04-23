import { Injectable } from "@angular/core";

import { TimedCounterServiceConfiguration } from "../models/timed-counter-service-configuration.model";

import { SimpleCounterService } from "./simple-counter.service";
import { Subscription } from "rxjs/internal/Subscription";
import { interval } from "rxjs/internal/observable/interval";
/**
 * Service
 */
@Injectable()
export class TimedCounterService extends SimpleCounterService {
  /**
   * Private property
   */
  private autoIncrementSubscription: Subscription | undefined;

  constructor(private readonly configuration: TimedCounterServiceConfiguration) {
    super();

    this.start();
  }
  /**
   * Public method
   */
  public start(): void {
    if (!this.autoIncrementSubscription) {
      this.autoIncrementSubscription = interval(this.configuration.autoIncrementInterval).subscribe(() => this.increment());
    }
  }
  /**
   * Public method
   */
  public stop(): void {
    if (this.autoIncrementSubscription) {
      this.autoIncrementSubscription.unsubscribe();
      this.autoIncrementSubscription = undefined;
    }
  }
}
