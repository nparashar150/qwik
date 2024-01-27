import type { SubscriptionManager } from '../../state/common';
import type { ContextId } from '../../use/use-context';
import type { VirtualVNode } from '../client/types';

/// Temporary type left behind which needs to be fixed.
export type fixMeAny = any;

export interface Container2 {
  clearLocalProps(host: HostElement): void;
  getParentHost(host: HostElement): HostElement | null;
  markForRender(hostElement: VirtualVNode): void;
  setContext<T>(host: HostElement, context: ContextId<T>, value: T): void;
  resolveContext<T>(host: HostElement, contextId: ContextId<T>): T | null;
  $subsManager$: SubscriptionManager;
  // $journal$: VNodeJournalEntry[];
  /// Current language locale
  $locale$: string;
  /// Retrieve Object from paused serialized state.
  readonly getObjectById: (id: number | string) => any;

  setHostProp<T>(host: HostElement, name: string, value: T): void;
  getHostProp<T>(host: HostElement, name: string): T | null;
}

export interface HostElement {
  __brand__: 'HostElement';
}

export interface QElement2 extends HTMLElement {
  qDispatchEvent?: (event: Event) => boolean;
}
