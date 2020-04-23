import { Observable } from "rxjs/internal/Observable";

/**
 * Service
 */
export abstract class CounterService {
  /**
   * Public method
   */
  public abstract get counter(): Observable<number>;
  /**
   * Public method
   */
  public abstract increment(): void;
  /**
   * Public method
   */
  public abstract decrement(): void;
}
