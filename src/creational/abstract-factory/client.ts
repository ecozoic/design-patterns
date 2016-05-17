import { abstractFactory, WidgetFactory, Window, ScrollBar } from './index';

// client interacts w/ factory entirely through interfaces and abstract classes
// no knowledge of underlying implementation details (i.e., Motif vs. PM)
const myFactory: WidgetFactory = abstractFactory;
const myWindow: Window = myFactory.createWindow();
const myScrollBar: ScrollBar = myFactory.createScrollBar();
