const db = require('../data/db-config');

exports.add = s => {
  return db('schemes')
          .insert(s)
          .then(([ id ]) => this.findById(id));
};

exports.addStep = (step, scheme_id) => {
  const newStep = {
    ...step,
    scheme_id
  };

  return db('steps')
          .insert(newStep)
          .then(([ id ]) => this.findStepById(id));
};

exports.find = _ => db('schemes');

exports.findById = id => db('schemes').where({ id }).first();

exports.findSteps = id => {
  return db('steps')
          .select('steps.id', 'scheme_name', 'step_number', 'instructions')
          .join('schemes', 'schemes.id', 'scheme_id')
          .where({ scheme_id: id })
          .orderBy('step_number');
};

exports.findStepById = id => db('steps').where({ id }).first();

exports.remove = id => db('schemes').where({ id }).del();

exports.update = (changes, id) => {
  return db('schemes')
          .where({ id })
          .update(changes)
          .then(_ => this.findById(id));
};