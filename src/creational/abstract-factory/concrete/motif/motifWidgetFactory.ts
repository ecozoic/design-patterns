import { Window, ScrollBar, WidgetFactory } from '../../abstract';
import { MotifWindow } from './motifWindow';
import { MotifScrollBar } from './motifScrolLBar';

export class MotifWidgetFactory extends WidgetFactory {
  public createWindow(): Window {
    return new MotifWindow();
  }

  public createScrollBar(): ScrollBar {
    return new MotifScrollBar();
  }
}
