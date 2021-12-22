export function ensure<T>(condition: T | false | null | undefined, message?: string): T {
  if (!condition) {
    throw new Error(message || 'ensure() failed');
  }
  return condition;
}

export function assertCondition(condition: any, message?: string): asserts condition {
  ensure(condition, message);
}

export function ensureExists<T>(value: T | null | undefined, message?: string): T {
  // AJD: Don't use _.isNil because that creates a recursive import.
  if (typeof value === 'undefined' || value === null) {
    const builtMessage = buildMessage('Expected value to be defined and non-null', message);
    throw new Error(builtMessage);
  }
  return value;
}

function buildMessage(prefix: string, message?: string): string {
  return prefix + (message ? `: ${message}` : '');
}
