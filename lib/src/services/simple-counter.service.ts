import { Injectable } from "@angular/core";

import { CounterService } from "./counter.service";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";

/**
 * Service
 */
@Injectable()
export class SimpleCounterService implements CounterService {
  /**
   * Privateprperty method
   */
  private readonly counterSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  /**
   * Public method
   */
  public get counter(): Observable<number> {
    return this.counterSubject.asObservable();
  }
  /**
   * Public method
   */
  public increment(): void {
    this.counterSubject.next(this.counterSubject.value + 1);
  }
  /**
   * Public method
   */
  public decrement(): void {
    this.counterSubject.next(this.counterSubject.value - 1);
  }
}
