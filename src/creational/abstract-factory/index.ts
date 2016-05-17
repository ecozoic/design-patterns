import { MotifWidgetFactory } from './concrete/motif';
import { PmWidgetFactory } from './concrete/pm';

const abstractFactory = new MotifWidgetFactory();
// const abstractFactory = new PmWidgetFactory();
// we can switch the underlying concrete factory w/o breaking any contract w/ client

export * from './abstract';
export { abstractFactory };
