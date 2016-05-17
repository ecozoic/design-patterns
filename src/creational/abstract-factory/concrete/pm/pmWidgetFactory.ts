import { Window, ScrollBar, WidgetFactory } from '../../abstract';
import { PmWindow } from './pmWindow';
import { PmScrollBar } from './pmScrolLBar';

export class PmWidgetFactory extends WidgetFactory {
  public createWindow(): Window {
    return new PmWindow();
  }

  public createScrollBar(): ScrollBar {
    return new PmScrollBar();
  }
}
