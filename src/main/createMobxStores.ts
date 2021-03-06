import RouterStore from '../stores/RouterStore';
import CounterStore from '../stores/CounterStore';
import SimpleFormStore from '../stores/SimpleFormStore';
import DynamicDependenciesStore from '../stores/DynamicDependenciesStore';
import BatchedMutationsStore from '../stores/BatchedMutationsStore';
import TodosStore from '../stores/TodosStore';

/**
 * Creates the Mobx stores.
 */
export default function createMobxStores(history: HistoryModule.History): {} { // TODO Stores type?
  return {
    routerStore: new RouterStore(history),
    counterStore: new CounterStore(),
    simpleFormStore: new SimpleFormStore(),
    dynamicDependenciesStore: new DynamicDependenciesStore(),
    BatchedMutationsStore: new BatchedMutationsStore(),
    todosStore: new TodosStore(),
  };
}
