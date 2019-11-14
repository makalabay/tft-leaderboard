import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | boards', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:boards');
    assert.ok(route);
  });
});
