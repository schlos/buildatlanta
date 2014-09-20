var View = require('ampersand-view');
var ProjectView = require('./project');

module.exports = View.extend({
  template: `
    <div class="commentView">
      <div class="comments">
        <strong>Dodatni projekti</strong>
        <p>Dio sredstava će biti strateški raspodjeljen na raznim programima diljem grada. Ti samostalni programi su opisani u nastavku.</p>
        <div role="additionalProjects"></div>
      </div>
    </div>
  `,

  bindings: {
    'model.name': '[role=name]',
    'model.description': '[role=description]',
  },

  events: {
    'click .comments': 'ignoreClick',
    'click .commentView': 'remove',
  },

  render: function() {
    this.renderWithTemplate(this);
    this.renderCollection(this.collection, ProjectView, this.getByRole('additionalProjects'));
    return this;
  },

  ignoreClick: function(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  },
});
