import { Window } from './window';
import { ScrollBar } from './scrollBar';

export abstract class WidgetFactory {
  public abstract createWindow(): Window;
  public abstract createScrollBar(): ScrollBar;
}
